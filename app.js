/* Korea AI Summer — render + language switching.

   English is already in index.html, so the page is complete before this file
   runs. This script only (a) swaps text when another language is chosen and
   (b) rebuilds the data-driven lists from i18n.js.

   `set()` never throws on a missing key or a missing element — a typo leaves
   the English text in place instead of blanking the whole page. */

(function () {
  "use strict";

  var STORE = "kas.lang";
  var DEFAULT = "en";

  /* ── helpers ─────────────────────────────────────── */

  function dig(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return o && Object.prototype.hasOwnProperty.call(o, k) ? o[k] : undefined;
    }, obj);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function missing(path) {
    if (window.console && console.warn) console.warn("[i18n] missing key:", path);
  }

  /* ── text swap ───────────────────────────────────── */

  function applyText(t) {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var path = nodes[i].getAttribute("data-i18n");
      var val = dig(t, path);
      if (typeof val === "string") nodes[i].textContent = val;
      else missing(path);
    }
  }

  /* ── data-driven lists ───────────────────────────── */

  function renderVisits(t) {
    var host = document.getElementById("visitList");
    if (!host || !t.visits || !t.visits.items) return;
    var labels = (window.STATUS_LABELS && STATUS_LABELS[current]) || STATUS_LABELS.en;
    host.textContent = "";
    t.visits.items.forEach(function (it) {
      var li = el("li");
      li.appendChild(el("span", "sl-name", it.name));
      li.appendChild(el("span", "pill " + it.status, labels[it.status] || it.status));
      if (it.note) li.appendChild(el("span", "sl-note", it.note));
      host.appendChild(li);
    });
  }

  function renderTicks(id, items) {
    var host = document.getElementById(id);
    if (!host || !items) return;
    host.textContent = "";
    items.forEach(function (s) { host.appendChild(el("li", null, s)); });
  }

  function renderSponsors(t) {
    var host = document.getElementById("sponTable");
    if (!host || !t.spon || !t.spon.rows) return;
    host.textContent = "";
    t.spon.rows.forEach(function (row) {
      var tr = el("tr");
      row.forEach(function (cell) { tr.appendChild(el("td", null, cell)); });
      host.appendChild(tr);
    });
  }

  function renderFaq(t) {
    var host = document.getElementById("faqList");
    if (!host || !t.faq || !t.faq.items) return;
    /* Remember which entries were open so switching language does not
       collapse what the reader was in the middle of. */
    var open = [];
    var existing = host.querySelectorAll("details");
    for (var i = 0; i < existing.length; i++) open[i] = existing[i].open;

    host.textContent = "";
    t.faq.items.forEach(function (pair, i) {
      var d = el("details");
      if (open[i]) d.open = true;
      d.appendChild(el("summary", null, pair[0]));
      d.appendChild(el("p", "faq-body", pair[1]));
      host.appendChild(d);
    });
  }

  /* ── language ────────────────────────────────────── */

  var current = DEFAULT;

  function render(code) {
    var t = window.I18N && I18N[code];
    if (!t) { missing("language " + code); return; }
    current = code;

    var meta = LANGS.filter(function (l) { return l.code === code; })[0];
    document.documentElement.lang = code;
    document.documentElement.dir = (meta && meta.dir) || "ltr";

    applyText(t);
    renderVisits(t);
    renderTicks("eligList", t.apply && t.apply.eligItems);
    renderTicks("coveredList", t.apply && t.apply.coveredItems);
    renderSponsors(t);
    renderFaq(t);

    var btns = document.querySelectorAll("#langPicker button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-current", btns[i].dataset.lang === code ? "true" : "false");
    }

    try { localStorage.setItem(STORE, code); } catch (e) { /* private mode */ }
  }

  function buildPicker() {
    var host = document.getElementById("langPicker");
    if (!host) return;
    LANGS.forEach(function (l) {
      var b = el("button", null, l.label);
      b.type = "button";
      b.dataset.lang = l.code;
      b.setAttribute("aria-label", l.label);
      b.addEventListener("click", function () { render(l.code); });
      host.appendChild(b);
    });
  }

  function detect() {
    var saved;
    try { saved = localStorage.getItem(STORE); } catch (e) { /* ignore */ }
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || "").slice(0, 2).toLowerCase();
    return I18N[nav] ? nav : DEFAULT;
  }

  /* ── forms not wired yet ─────────────────────────── */

  function wirePlaceholders() {
    ["applyBtn", "volBtn", "sponBtn"].forEach(function (id) {
      var b = document.getElementById(id);
      if (!b) return;
      b.addEventListener("click", function (e) {
        /* No form endpoint yet. Say so rather than silently doing nothing. */
        if (b.getAttribute("href") === "#") {
          e.preventDefault();
          alert("Form coming soon / 접수 양식 준비 중입니다.");
        }
      });
    });
  }

  function stamp() {
    var n = document.getElementById("updated");
    if (n && !n.textContent.trim()) n.textContent = "2026-08-24";
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildPicker();
    wirePlaceholders();
    stamp();
    render(detect());
  });
})();
