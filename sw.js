var C="lessonplan-v323",F=["./","index.html","icon-192.png","icon-512.png","apple-touch-icon.png","manifest.webmanifest"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F);}));self.skipWaiting();});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));}));self.clients.claim();});
self.addEventListener("fetch",function(e){var r=e.request,u=new URL(r.url);
 if(r.method!=="GET")return;
 var ok=u.origin===location.origin||u.hostname==="cdnjs.cloudflare.com"||u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com";
 if(!ok)return;
 e.respondWith(fetch(r).then(function(res){if(res&&res.ok){var c2=res.clone();caches.open(C).then(function(c){c.put(r,c2);});}return res;}).catch(function(){return caches.match(r).then(function(m){return m||(r.mode==="navigate"?caches.match("index.html"):Response.error());});}));});
