const CACHE_NAME = 'chat-online-v1';
const FILES = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
