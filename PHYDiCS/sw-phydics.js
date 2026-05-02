const CACHE_NAME = 'phydics-v1';

const FILES = [
  '/PHYDiCS/phyindex.html',
  '/PHYDiCS/home.html',
  '/PHYDiCS/search.html',
  '/PHYDiCS/info.html',
  '/PHYDiCS/permean.html',
  '/PHYDiCS/image/iconsm.png',
  '/PHYDiCS/image/iconla.png',
  '/PHYDiCS/image/chapterbtn.png',
  '/PHYDiCS/image/homebtn.png',
  '/PHYDiCS/image/infobtn.png',
  '/PHYDiCS/image/lightlogo.png',
  '/PHYDiCS/image/logo.png',
  '/PHYDiCS/image/search.png'
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