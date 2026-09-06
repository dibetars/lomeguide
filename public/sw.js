const CACHE = 'lome-stay-v1'

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll(['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png']).catch(() => undefined),
    ),
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', event => {
  const req = event.request
  if (req.method !== 'GET') return

  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.endsWith('.mp4')) return
  if (url.pathname.startsWith('/_next/webpack-hmr')) return

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone()
          caches.open(CACHE).then(cache => cache.put('/', copy))
          return res
        })
        .catch(() => caches.match('/') || caches.match(req)),
    )
    return
  }

  event.respondWith(
    caches.match(req).then(cached => {
      const fetched = fetch(req)
        .then(res => {
          if (res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then(cache => cache.put(req, copy))
          }
          return res
        })
        .catch(() => cached)
      return cached || fetched
    }),
  )
})
