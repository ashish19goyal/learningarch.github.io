'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "91f50bc1c13392e128a50c28ca7d3530",
"main.dart.js": "1f9f9203e8f787055a4b3079a35e43bc",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/AssetManifest.json": "e3ee6ff05c809de60c912c5091cd0710",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/2.0x/logo.jpg": "3042314cbbd80e61ec3dbd7d4b569d83",
"assets/assets/images/4.0x/logo.jpg": "5f4247e1c22881f7109b547be4057c2e",
"assets/assets/images/5.0x/logo.jpg": "72f9403398e4b945f57b6aba4fbd9ee4",
"assets/assets/images/logo.jpg": "3042314cbbd80e61ec3dbd7d4b569d83",
"assets/assets/images/1.0x/logo.jpg": "221597a300b57213a3ff3d4c6ba32274",
"assets/assets/images/3.0x/logo.jpg": "bb3eb182b6fac6fab8f11757d0da5330",
"assets/LICENSE": "da693755d0b91d2f1168bf441c806a50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"icons/Icon-300.png": "077107d4288b0d2fd6e8189ac99ea058",
"index.html": "94028219e6fb121d74e68ed6e94b5888",
"/": "94028219e6fb121d74e68ed6e94b5888",
"favicon.png": "0edfdfdde6f2b0a981efbd5023eef979"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
