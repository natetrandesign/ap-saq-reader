/* Reader — offline shell. Bump CACHE to ship an update. */
const CACHE = 'reader-v33';
const CORE = [
  './', './index.html', './app.js?v=19', './data.json?v=3',
  './essays.js?v=2', './mcq.js?v=1', './formats.js?v=13', './read.js?v=7',
  './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: 'window' });
    await Promise.all(windows.map(client => client.navigate(client.url).catch(() => {})));
  })());
});

function shellRequest(req, url) {
  if (req.mode === 'navigate') return true;
  return /\/$|\/index\.html$|\/sw\.js$/.test(url.pathname);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // never cache model API traffic
  if (/api\.anthropic\.com|api\.openai\.com|generativelanguage\.googleapis\.com/.test(url.host)) return;

  // The page itself must come from the network, or an old offline copy hides new features.
  if (url.origin === location.origin && shellRequest(req, url)) {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) caches.open(CACHE).then(c => c.put(req, res.clone()));
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // versioned scripts: cache first, refresh in background
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(hit => {
        const net = fetch(req).then(res => {
          if (res && res.ok) caches.open(CACHE).then(c => c.put(req, res.clone()));
          return res;
        }).catch(() => hit);
        return hit || net;
      })
    );
    return;
  }

  // fonts: cache opportunistically
  if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url.host)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) caches.open(CACHE).then(c => c.put(req, res.clone()));
        return res;
      }).catch(() => hit))
    );
  }
});
