/* ══════════════════════════════════════
   PRE ICFES — Service Worker
   Versión: 1.0
   Cambia 'preicfes-v1' por 'preicfes-v2'
   cada vez que actualices la app.
══════════════════════════════════════ */

const CACHE_NAME = 'preicfes-v1';

const ARCHIVOS_A_CACHEAR = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-192.png',
  '/logo-512.png'
];

/* ── INSTALAR: guarda los archivos en caché ── */
self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Archivos guardados en caché');
        return cache.addAll(ARCHIVOS_A_CACHEAR);
      })
      .then(() => self.skipWaiting())
  );
});

/* ── ACTIVAR: elimina cachés viejos ── */
self.addEventListener('activate', event => {
  console.log('[SW] Activando...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Eliminando caché viejo:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: sirve desde caché, si no hay va a internet ── */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(respuestaCache => {
        if (respuestaCache) {
          return respuestaCache;
        }
        return fetch(event.request)
          .catch(() => {
            /* Si no hay internet y no está en caché,
               devuelve el index.html como fallback */
            return caches.match('/index.html');
          });
      })
  );
});
