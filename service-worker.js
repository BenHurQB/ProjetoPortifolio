var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './about.html',

        './Style2.css',

        './Asset/image/1.webp',
        './Asset/image/16.png',
        './Asset/image/20.png',
        './Asset/image/29.png',
        './Asset/image/32.png',
        './Asset/image/57.png',
        './Asset/image/58.png',
        './Asset/image/92.png',
        './Asset/image/102.png',
        './Asset/image/128.png',
        './Asset/image/512.png',
        './Asset/image/github.webp',
        './Asset/image/linkedin.webp',
        './Asset/image/twitch.webp'

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});