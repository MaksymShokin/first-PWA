self.addEventListener('install', event => {
  console.log('Installing SW', event);
  event.waitUntil(
    caches.open('static').then(cache => {
      cache.add('/src/js/app.js');
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating SW', event);
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response ? response : fetch(event.request);
    })
  );
});
