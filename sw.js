// Neon Arcade moved to https://optimusgrok.github.io/galactic-arcade/ : this worker clears the old caches, unregisters itself
// and sends any open page to the new address.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll({type:'window'})).then(cs=>cs.forEach(c=>{try{const u=new URL(c.url);c.navigate('https://optimusgrok.github.io/galactic-arcade/'+u.search+u.hash);}catch(e){}})));});
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(Response.redirect('https://optimusgrok.github.io/galactic-arcade/',302));});
