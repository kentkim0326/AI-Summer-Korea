#!/usr/bin/env node
/* Regenerates the static English list markup inside index.html from i18n.js.
 *
 * Why this exists: the English copy lives in index.html so that crawlers which
 * never run JavaScript still read the whole page. The data-driven lists are
 * the one place that can silently drift out of sync with i18n.js — this makes
 * that impossible.
 *
 *   node build-static.js          rewrite index.html
 *   node build-static.js --check  exit 1 if it would change anything (for CI)
 *
 * Only the marked regions are touched, so it is safe to run repeatedly.
 */
"use strict";

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const dir = __dirname;
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "i18n.js"), "utf8"), ctx);

const en = ctx.I18N.en;
const labels = ctx.STATUS_LABELS.en;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const blocks = {
  visitList:
    en.visits.items
      .map(
        (it) =>
          `      <li><span class="sl-name">${esc(it.name)}</span>` +
          `<span class="pill ${it.status}">${esc(labels[it.status])}</span>` +
          `<span class="sl-note">${esc(it.note)}</span></li>`
      )
      .join("\n") + "\n    ",

  eligList:
    en.apply.eligItems.map((s) => `          <li>${esc(s)}</li>`).join("\n") +
    "\n        ",

  coveredList:
    en.apply.coveredItems.map((s) => `          <li>${esc(s)}</li>`).join("\n") +
    "\n        ",

  sponTable:
    en.spon.rows
      .map(
        (r) =>
          `          <tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`
      )
      .join("\n") + "\n        ",

  faqList:
    en.faq.items
      .map(
        ([q, a]) =>
          `      <details><summary>${esc(q)}</summary>` +
          `<p class="faq-body">${esc(a)}</p></details>`
      )
      .join("\n") + "\n    ",
};

const file = path.join(dir, "index.html");
const before = fs.readFileSync(file, "utf8");
let after = before;

for (const [id, inner] of Object.entries(blocks)) {
  const re = new RegExp(`(<(?:ul|tbody|div)[^>]*id="${id}"[^>]*>)([\\s\\S]*?)(</(?:ul|tbody|div)>)`);
  if (!re.test(after)) {
    console.error(`error: could not find container #${id} in index.html`);
    process.exit(1);
  }
  after = after.replace(re, (_, open, __, close) => `${open}\n${inner}${close}`);
}

if (process.argv.includes("--check")) {
  if (after !== before) {
    console.error("index.html is out of sync with i18n.js — run: node build-static.js");
    process.exit(1);
  }
  console.log("index.html is in sync with i18n.js");
  process.exit(0);
}

if (after === before) {
  console.log("index.html already in sync — nothing to do");
} else {
  fs.writeFileSync(file, after);
  console.log("index.html regenerated from i18n.js");
}
