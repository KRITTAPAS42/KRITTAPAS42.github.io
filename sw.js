const CACHE_NAME = 'phy-dics-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './home.html',
  './search.html',
  './info.html',
  './permean.html',
  './image/iconsm.png',
  './image/iconla.png',
  './image/chapterbtn.png',
  './image/homebtn.png',
  './image/infobtn.png',
  './image/lightlogo.png',
  './image/logo.png',
  './image/search.png',
];

// Install the Service Worker and cache essential files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache).catch(err => {
                console.error("Cache addAll failed:", err);
            });
        })
    );
});

// Serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
  );
});

// Activate the Service Worker and clean up old caches if necessary
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
