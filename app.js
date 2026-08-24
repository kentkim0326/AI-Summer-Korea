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

    if (document.getElementById("f-type")) fillTypes();

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

  /* ── contact form ────────────────────────────────

     Set FORM_ENDPOINT to the Google Apps Script web app URL (see
     apps-script/Code.gs for how to deploy it). While it is empty the
     dialog still opens and shows the fields, but submitting is disabled
     and says why — better than a button that silently does nothing. */
  var FORM_ENDPOINT = "";

  var TYPES = [
    { value: "student",   key: "form.typeStudent" },
    { value: "volunteer", key: "form.typeVolunteer" },
    { value: "sponsor",   key: "form.typeSponsor" },
    { value: "other",     key: "form.typeOther" }
  ];

  var dlg, form, lastFocus;

  function t(path) {
    var v = pick(I18N[current] || {}, path);
    return typeof v === "string" ? v : "";
  }

  function fillTypes(selected) {
    var sel = document.getElementById("f-type");
    if (!sel) return;
    var keep = selected || sel.value;
    sel.textContent = "";
    TYPES.forEach(function (o) {
      var opt = document.createElement("option");
      opt.value = o.value;
      opt.textContent = t(o.key);
      sel.appendChild(opt);
    });
    if (keep) sel.value = keep;
  }

  function clearErrors() {
    var spans = form.querySelectorAll(".ferr");
    for (var i = 0; i < spans.length; i++) spans[i].textContent = "";
    var fields = form.querySelectorAll("[aria-invalid]");
    for (var j = 0; j < fields.length; j++) fields[j].removeAttribute("aria-invalid");
  }

  function setError(id, msg) {
    var field = document.getElementById(id);
    var span = form.querySelector('.ferr[data-for="' + id + '"]');
    if (field) field.setAttribute("aria-invalid", "true");
    if (span) span.textContent = msg;
    return field;
  }

  function validate() {
    clearErrors();
    var first = null;
    ["f-name", "f-email", "f-country", "f-affiliation"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && !el.value.trim()) {
        var f = setError(id, t("form.required"));
        if (!first) first = f;
      }
    });
    var email = document.getElementById("f-email");
    if (email && email.value.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
      var f2 = setError("f-email", t("form.badEmail"));
      if (!first) first = f2;
    }
    if (first) first.focus();
    return !first;
  }

  function openForm(type) {
    if (!dlg) return;
    lastFocus = document.activeElement;
    fillTypes(type);
    document.getElementById("formDone").hidden = true;
    form.hidden = false;

    var notice = document.getElementById("formNotice");
    var submit = document.getElementById("formSubmit");
    if (!FORM_ENDPOINT) {
      notice.textContent = t("form.notYet");
      notice.hidden = false;
      submit.disabled = true;
    } else {
      notice.hidden = true;
      submit.disabled = false;
    }

    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
    var firstField = document.getElementById("f-name");
    if (firstField) firstField.focus();
  }

  function closeForm() {
    if (!dlg) return;
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function submitForm(e) {
    e.preventDefault();
    if (!FORM_ENDPOINT || !validate()) return;

    var submit = document.getElementById("formSubmit");
    submit.disabled = true;
    submit.textContent = t("form.sending");

    var payload = {
      type: document.getElementById("f-type").value,
      name: document.getElementById("f-name").value.trim(),
      email: document.getElementById("f-email").value.trim(),
      country: document.getElementById("f-country").value.trim(),
      affiliation: document.getElementById("f-affiliation").value.trim(),
      message: document.getElementById("f-message").value.trim(),
      website: document.getElementById("f-website").value,
      lang: current,
      origin: location.origin
    };

    /* text/plain avoids the CORS preflight that Apps Script cannot answer. */
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) { finish(res && res.ok); })
      .catch(function () { finish(false); });
  }

  function finish(ok) {
    var submit = document.getElementById("formSubmit");
    submit.disabled = false;
    submit.textContent = t("form.submit");

    if (!ok) {
      var notice = document.getElementById("formNotice");
      notice.textContent = t("form.errTitle") + " " + t("form.errBody");
      notice.hidden = false;
      return;
    }
    form.reset();
    form.hidden = true;
    document.getElementById("formDoneTitle").textContent = t("form.okTitle");
    document.getElementById("formDoneBody").textContent = t("form.okBody");
    document.getElementById("formDone").hidden = false;
  }

  function wireForm() {
    dlg = document.getElementById("formDialog");
    form = document.getElementById("contactForm");
    if (!dlg || !form) return;

    var map = { applyBtn: "student", volBtn: "volunteer", sponBtn: "sponsor" };
    Object.keys(map).forEach(function (id) {
      var b = document.getElementById(id);
      if (!b) return;
      b.addEventListener("click", function (e) {
        e.preventDefault();
        openForm(map[id]);
      });
    });

    document.getElementById("formClose").addEventListener("click", closeForm);
    document.getElementById("formDoneClose").addEventListener("click", closeForm);
    form.addEventListener("submit", submitForm);

    /* Clicking the backdrop closes it. The dialog element reports clicks on
       its own padding box, so compare against the content rectangle. */
    dlg.addEventListener("click", function (e) {
      if (e.target !== dlg) return;
      var r = dlg.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right &&
                   e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) closeForm();
    });

    fillTypes();
  }

  function stamp() {
    var n = document.getElementById("updated");
    if (n && !n.textContent.trim()) n.textContent = "2026-08-24";
  }

  /* ── hero video ──────────────────────────────────

     preload="none" plus a poster means the page is complete before a single
     byte of video is fetched. We only then decide whether to fetch it at all:
     not on a metered or slow connection, not when the reader has asked for
     reduced motion, and the small encode on small screens. */
  function heroVideo() {
    var v = document.getElementById("heroVideo");
    if (!v) return;

    try {
      if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    } catch (e) { /* older browsers: carry on */ }

    var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
    if (c.saveData) return;
    if (typeof c.effectiveType === "string" && /(^|-)(slow-)?2g$/.test(c.effectiveType)) return;

    v.src = window.innerWidth < 768 ? "assets/hero-480.mp4" : "assets/hero-720.mp4";
    v.load();
    var play = v.play();
    /* Autoplay can still be refused (low power mode). The poster stays,
       which is a perfectly good hero — so swallow it rather than logging. */
    if (play && play.catch) play.catch(function () {});
  }

  function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    if (location.protocol !== "https:" && location.hostname !== "localhost") return;
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {
        /* Registration failing costs the reader nothing — the site is static. */
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildPicker();
    heroVideo();
    registerSW();
    wireForm();
    stamp();
    render(detect());
  });
})();
