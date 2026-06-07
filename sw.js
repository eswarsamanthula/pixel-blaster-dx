const CACHE='pixel-blaster-dx-'+(self.registration?.active?.installedTimestamp||Date.now());
const URLS=['./','./index.html','./manifest.json','https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js'];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
