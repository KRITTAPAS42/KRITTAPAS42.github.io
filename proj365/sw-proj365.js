const CACHE_NAME = 'proj365-v1';

const FILES = [
  '/proj365/home.html',
  '/proj365/ani.html',
  '/proj365/bts.html',
  '/proj365/proj_365.mp4'
];

// Install → cache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch → serve from cache first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});