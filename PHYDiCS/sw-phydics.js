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