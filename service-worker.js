// Service Worker for Hebrew Word Clock PWA
const CACHE_NAME = 'heb-clock-v2';
const urlsToCache = [
  '/heb-clock/',
  '/heb-clock/index.html',
  '/heb-clock/styles.css',
  '/heb-clock/script.js',
  '/heb-clock/icon-192.png',
  '/heb-clock/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['heb-clock-v2'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Only delete caches that belong to this app
          if (cacheName.startsWith('heb-clock-') && cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
