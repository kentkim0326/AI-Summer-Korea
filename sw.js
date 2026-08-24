/* AI Summer Korea — service worker.
 *
 * Two strategies, chosen by what goes stale and what does not:
 *
 *   HTML and the translation file — network first. Copy changes constantly
 *   (dates, partners, budget figures). A visitor must never read last week's
 *   numbers because a cache answered first. The cache is only the fallback
 *   for when the network is gone.
 *
 *   Fingerprint-free static assets (logo, video, icons) — cache first. They
 *   are large and they change rarely; when one does change, bump VERSION.
 *
 * Nothing is precached on install. The site is one page and the hero video is
 * over a megabyte — forcing that download on first visit costs more than it
 * saves. Assets enter the cache as they are actually used.
 */
"use strict";

const VERSION = "ask-v2";
const CACHE = VERSION;

/* Same-origin only. Google Fonts is cross-origin and handles its own caching. */
const STATIC = /\/assets\/|\/manifest\.webmanifest$|\/styles\.css$|\/app\.js$/;
const NETWORK_FIRST = /\/$|\.html$|\/i18n\.js$/;

self.addEventListener("install", (e) => {
  /* Take over as soon as the new worker is ready rather than waiting for
     every tab to close — a stale worker serving a stale page is the thing
     we are trying to avoid. */
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await cache.match(req);
    if (hit) return hit;
    /* An offline navigation with nothing cached: fall back to the shell. */
    if (req.mode === "navigate") {
      const shell = await cache.match("/");
      if (shell) return shell;
    }
    throw err;
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  /* Range requests (the hero video seeking) return 206, which cannot be
     stored — putting one in the cache throws and kills the response. */
  if (res && res.ok && res.status === 200) cache.put(req, res.clone());
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate" || NETWORK_FIRST.test(url.pathname)) {
    e.respondWith(networkFirst(req));
    return;
  }
  if (STATIC.test(url.pathname)) {
    e.respondWith(cacheFirst(req));
  }
});
