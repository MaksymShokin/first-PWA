self.addEventListener('install', event => {
  console.log('Installing SW', event);
});

self.addEventListener('activate', event => {
  console.log('Activating SW', event);
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('Fetcing SW', event);
});
