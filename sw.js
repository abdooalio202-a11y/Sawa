self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("push",function(e){var d={};try{d=e.data?e.data.json():{}}catch(x){}
e.waitUntil(self.registration.showNotification(d.title||"طلب جديد في سوا",{body:d.body||"",tag:d.tag||undefined,icon:"/icon-192.png",badge:"/icon-192.png",dir:"rtl",lang:"ar",data:{url:d.url||"/#admin"}}))});
self.addEventListener("notificationclick",function(e){e.notification.close();var u=(e.notification.data&&e.notification.data.url)||"/#admin";
e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if("focus" in l[i]){l[i].navigate&&l[i].navigate(u);return l[i].focus()}}return self.clients.openWindow(u)}))});
