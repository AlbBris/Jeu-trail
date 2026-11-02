const CACHE='trail-chaos-v45-20261102';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./explorer-v3.html','./runner-v28.html','./side-v31.html','./side-v35.html','./side-v36.html','./side-v37.html','./side-v38.html','./side-v39.html','./side-v40.html','./side-v41.html','./side-v42.html','./side-v43.html','./side-v44.html'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 const isDocument=request.mode==='navigate'||new URL(request.url).pathname.endsWith('.html');
 if(isDocument){event.respondWith(fetch(request,{cache:'no-store'}).then(response=>{
   if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy)).catch(()=>{});}return response;
 }).catch(()=>caches.match(request).then(cached=>cached||caches.match('./index.html'))));return;}
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{
   if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy)).catch(()=>{});}return response;
 })));
});