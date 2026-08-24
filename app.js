/* AI Summer Korea — render + language switching.

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

  /* Some languages carry only the core sections. Anything they do not
     translate has to fall back to English — not to whatever the previous
     language left in the DOM, which is how you end up reading Korean
     sponsor copy on the French page. */
  function base() {
    return (window.I18N && I18N.en) || {};
  }

  function pick(t, path) {
    var v = dig(t, path);
    if (v !== undefined && v !== null) return v;
    var f = dig(base(), path);
    if (f === undefined || f === null) missing(path);
    return f;
  }

  /* ── text swap ───────────────────────────────────── */

  function applyText(t) {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var path = nodes[i].getAttribute("data-i18n");
      var val = pick(t, path);
      if (typeof val === "string") nodes[i].textContent = val;
    }
  }

  /* ── data-driven lists ───────────────────────────── */

  function renderVisits(t) {
    var host = document.getElementById("visitList");
    var items = pick(t, "visits.items");
    if (!host || !items) return;
    var labels = (window.STATUS_LABELS && STATUS_LABELS[current]) || STATUS_LABELS.en;
    host.textContent = "";
    items.forEach(function (it) {
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
    var rows = pick(t, "spon.rows");
    if (!host || !rows) return;
    host.textContent = "";
    rows.forEach(function (row) {
      var tr = el("tr");
      row.forEach(function (cell) { tr.appendChild(el("td", null, cell)); });
      host.appendChild(tr);
    });
  }

  function renderFaq(t) {
    var host = document.getElementById("faqList");
    var faqItems = pick(t, "faq.items");
    if (!host || !faqItems) return;
    /* Remember which entries were open so switching language does not
       collapse what the reader was in the middle of. */
    var open = [];
    var existing = host.querySelectorAll("details");
    for (var i = 0; i < existing.length; i++) open[i] = existing[i].open;

    host.textContent = "";
    faqItems.forEach(function (pair, i) {
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
    /* zh-Hans / zh-Hant matter for font selection — the same codepoint is
       drawn differently in mainland and Taiwan typefaces. */
    document.documentElement.lang = (meta && meta.tag) || code;
    document.documentElement.dir = (meta && meta.dir) || "ltr";

    applyText(t);
    renderVisits(t);
    renderTicks("eligList", pick(t, "apply.eligItems"));
    renderTicks("coveredList", pick(t, "apply.coveredItems"));
    renderSponsors(t);
    renderFaq(t);

    var opts = document.querySelectorAll("#langMenu [data-lang]");
    for (var i = 0; i < opts.length; i++) {
      opts[i].setAttribute("aria-selected", opts[i].dataset.lang === code ? "true" : "false");
    }
    var trigger = document.getElementById("langButton");
    if (trigger && meta) {
      var lbl = trigger.querySelector(".lang-current");
      if (lbl) lbl.textContent = meta.label;
    }

    try { localStorage.setItem(STORE, code); } catch (e) { /* private mode */ }
  }

  /* One button, one menu. Eight language buttons in a row do not fit a
     phone, and a native <select> cannot be styled to match the page. */
  function buildPicker() {
    var host = document.getElementById("langPicker");
    if (!host) return;
    host.textContent = "";

    var btn = el("button", "lang-btn");
    btn.type = "button";
    btn.id = "langButton";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Choose language");
    btn.appendChild(el("span", "lang-globe", "\u2295"));
    btn.appendChild(el("span", "lang-current", "EN"));
    btn.appendChild(el("span", "lang-caret", "\u25be"));

    var menu = el("ul", "lang-menu");
    menu.id = "langMenu";
    menu.setAttribute("role", "listbox");
    menu.hidden = true;

    LANGS.forEach(function (l) {
      var li = el("li");
      li.setAttribute("role", "option");
      li.dataset.lang = l.code;
      li.tabIndex = -1;
      li.setAttribute("aria-selected", "false");
      li.appendChild(el("span", "lang-name", l.label));
      if (l.english) li.appendChild(el("span", "lang-en", l.english));
      li.addEventListener("click", function () { render(l.code); close(); btn.focus(); });
      li.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); render(l.code); close(); btn.focus(); }
      });
      menu.appendChild(li);
    });

    function open() {
      menu.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      var sel = menu.querySelector('[aria-selected="true"]') || menu.firstChild;
      if (sel) sel.focus();
    }
    function close() {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
    function toggle() { menu.hidden ? open() : close(); }

    btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });

    menu.addEventListener("keydown", function (e) {
      var items = [].slice.call(menu.children);
      var i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); (items[i + 1] || items[0]).focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); (items[i - 1] || items[items.length - 1]).focus(); }
      else if (e.key === "Escape") { e.preventDefault(); close(); btn.focus(); }
      else if (e.key === "Tab") close();
    });

    document.addEventListener("click", function (e) {
      if (!menu.hidden && !host.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { close(); btn.focus(); }
    });

    host.appendChild(btn);
    host.appendChild(menu);
  }

  /* navigator.language sliced to two characters collapses zh-TW into zh-CN,
     which is the one distinction Chinese readers notice immediately. Match
     the full tag first, then the bare language, then fall back. */
  function detect() {
    var saved;
    try { saved = localStorage.getItem(STORE); } catch (e) { /* ignore */ }
    if (saved && I18N[saved]) return saved;

    var tags = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language || ""];

    for (var i = 0; i < tags.length; i++) {
      var tag = String(tags[i]).toLowerCase();
      if (!tag) continue;
      /* Traditional Chinese ships to Taiwan, Hong Kong and Macau. */
      if (/^zh\b/.test(tag)) {
        return /hant|\btw\b|\bhk\b|\bmo\b/.test(tag) ? "zh-Hant" : "zh-Hans";
      }
      for (var j = 0; j < LANGS.length; j++) {
        var code = LANGS[j].code.toLowerCase();
        if (tag === code || tag.split("-")[0] === code) return LANGS[j].code;
      }
    }
    return DEFAULT;
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
