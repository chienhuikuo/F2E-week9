"use strict";var precacheConfig=[["/F2E-week9/index.html","bf1fafc6a5f943766e0e4df22c5f5d20"],["/F2E-week9/static/css/main.04d3b39b.css","c97f824d7955a89b1668ff3000829577"],["/F2E-week9/static/js/main.7ab98d64.js","14ef15ae71319d4af932c38333734861"],["/F2E-week9/static/media/img_axe@2x.06da60b7.png","06da60b7d56952cbdd3c75600bc5176f"],["/F2E-week9/static/media/img_blade-1@2x.eeb4b328.png","eeb4b32858e90819b30575e9ffd7f801"],["/F2E-week9/static/media/img_book@2x.0cd2b441.png","0cd2b441b5a1b73c084fd42352e1ef16"],["/F2E-week9/static/media/img_chest@2x.87ed164d.png","87ed164d7f052bddf3a12b40122728ad"],["/F2E-week9/static/media/img_emblem@2x.8176227d.png","8176227dd24e484cf501ef145419dc5f"],["/F2E-week9/static/media/img_footer@2x.6bc764e8.png","6bc764e848f1de49cd1ec4d23afc8f22"],["/F2E-week9/static/media/img_hammer@2x.53d0aa52.png","53d0aa52d2c8764f3ff1833a9ba60513"],["/F2E-week9/static/media/img_hat@2x.6b5238df.png","6b5238dfe4d08913f874dc2c91bc4e0d"],["/F2E-week9/static/media/img_hexcat@2x.8e51f085.png","8e51f085bd3face8804fe6ca33c59a23"],["/F2E-week9/static/media/img_horn@2x.d64ebdce.png","d64ebdcea7f4f15ad3aeeddf161c94c4"],["/F2E-week9/static/media/img_meat@2x.31352d3b.png","31352d3b46e00d74a5bce314fb731c6b"],["/F2E-week9/static/media/img_monocat@2x.3548412e.png","3548412e1523c534391716b71a810770"],["/F2E-week9/static/media/img_padora@2x.3a4fca11.png","3a4fca1142ab4f5a295f5310a16450b8"],["/F2E-week9/static/media/img_planet@2x.3dfdb55f.png","3dfdb55f6bab552a02b64ceaa3a74b5a"],["/F2E-week9/static/media/img_quill@2x.6f9777c6.png","6f9777c689ede6c93239095d8ef6b450"],["/F2E-week9/static/media/img_red-chest@2x.6ab00b53.png","6ab00b53cc543483bee9b24572a5a094"],["/F2E-week9/static/media/img_red-yellow@2x.68aaa619.png","68aaa61991d9e73e3562c08e9bf2cf94"],["/F2E-week9/static/media/img_rocket@2x.4587245b.png","4587245b7eb298b1d7ae6c9d858af69a"],["/F2E-week9/static/media/img_shield@2x.3f28f32b.png","3f28f32b25f7000ac9043641efe9d325"],["/F2E-week9/static/media/img_sword@2x.da126ba3.png","da126ba3699d43c1e919225afe93ddd4"],["/F2E-week9/static/media/img_text@2x.06f42813.png","06f42813749f2089cdd9003cfb8ab234"],["/F2E-week9/static/media/img_timer@2x.8ea1cc4c.png","8ea1cc4c019ac47af3840f20e641e1e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/F2E-week9/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});