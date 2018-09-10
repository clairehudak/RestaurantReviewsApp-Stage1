var cacheName = 'restaurant-app-v001';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/js/restaurant_info.js',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
      ])
      .catch(error => {
        console.log('Caches open failed: ' + error);
      });
    })
  );
});

self.addEventListener('fetch', event => {
  var requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin) {
    if(requestUrl.pathname ==='/') {
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
      }));
  }
}});
