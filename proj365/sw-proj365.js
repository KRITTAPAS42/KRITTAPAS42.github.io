const CACHE_NAME = 'proj365-v1';

const FILES = [
  '/proj365/home.html',
  '/proj365/ani.html',
  '/proj365/bts.html',
  '/proj365/proj_365.mp4'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});