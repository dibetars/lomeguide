import type { Metadata } from 'next'
import { Syne, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Lomé Guide — The Quick & Dirty Guide from Accra',
  description:
    'Your complete curated travel guide to Lomé, Togo from Accra, Ghana. Transportation, visas, currency, food, nightlife and itineraries.',
  openGraph: {
    title: 'Lomé Guide — The Quick & Dirty Guide from Accra',
    description: 'Incredible food, French-West African vibes, and great beaches.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#EDE3CF] text-[#1A1508]">{children}</body>
    </html>
  )
}
