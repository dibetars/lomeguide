import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'lome.stay',
    short_name: 'lome.stay',
    description:
      'Your complete curated travel guide to Lomé, Togo from Accra, Ghana. Transportation, visas, currency, food, nightlife and itineraries.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#1A1508',
    theme_color: '#1A1508',
    lang: 'en',
    categories: ['travel', 'lifestyle'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
