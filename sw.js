self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fire-kids').then(cache => cache.addAll(['./']))
  );
});
