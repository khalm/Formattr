self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Lar forespørsler passere rett igjennom (oppfyller PWA-kravet til Android Chrome)
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
