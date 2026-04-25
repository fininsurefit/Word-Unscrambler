const CACHE = 'word-unscrambler-v1';
const FILES = ['/Word-Unscrambler/', '/Word-Unscrambler/index.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
