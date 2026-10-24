// Holzi will raus – Service Worker: alles offline verfügbar
const VERSION = "holzi-v32";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./three.min.js",
  "./cannon.min.js",
  "./matter.min.js",
  "./qrcode.js",
  "./wortwald.txt",
  "./jsqr.js",
  "./icon-192.png",
  "./icon-512.png",
  "./maskable-512.png",
  "./apple-touch-icon.png",
  "./fonts/grandstander-latin-600-normal.woff2",
  "./fonts/grandstander-latin-800-normal.woff2",
  "./fonts/grandstander-latin-900-normal.woff2",
  "./fonts/atkinson-hyperlegible-latin-400-normal.woff2",
  "./fonts/atkinson-hyperlegible-latin-700-normal.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Ersatz-Quelle fuer die 3D-Bibliotheken: aus dem Cache, im Hintergrund auffrischen
  if (url.host === "cdnjs.cloudflare.com") {
    e.respondWith(
      caches.open(VERSION).then((c) =>
        c.match(req).then((hit) => {
          const net = fetch(req).then((res) => { c.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || net;
        })
      )
    );
    return;
  }

  // Eigene Dateien: erst Cache, dann Netz
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req, { ignoreSearch: true }).then((hit) =>
        hit || fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
          return res;
        }).catch(() => caches.match("./index.html"))
      )
    );
  }
});
