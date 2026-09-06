import type { Metadata, Viewport } from 'next'
import { Syne, Cormorant_Garamond, Inter, Bodoni_Moda } from 'next/font/google'
import PwaRegister from './components/PwaRegister'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#1A1508',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'lome.stay — Your Guide to Lomé from Accra',
  description:
    'Your complete curated travel guide to Lomé, Togo from Accra, Ghana. Transportation, visas, currency, food, nightlife and itineraries.',
  applicationName: 'lome.stay',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'lome.stay',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'lome.stay — Your Guide to Lomé from Accra',
    description: 'Incredible food, French-West African vibes, and great beaches.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${syne.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#1A1508] text-[#1A1508]">
        <PwaRegister />
        {children}
      </body>
    </html>
  )
}
