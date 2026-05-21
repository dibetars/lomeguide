'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Getting There', href: '#getting-there' },
  { label: 'Visa', href: '#visa' },
  { label: 'Money', href: '#currency' },
  { label: 'Stay', href: '#stay' },
  { label: 'Eat & Drink', href: '#eat' },
  { label: 'Nightlife', href: '#nightlife' },
  { label: 'Itineraries', href: '#itineraries' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)

  useEffect(() => {
    const handler = () => setOverHero(window.scrollY < window.innerHeight * 0.85)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500">
      {/* Main bar */}
      <div
        className={`transition-colors duration-500 ${
          overHero ? 'bg-transparent' : 'bg-[#EDE3CF] shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          {/* Left: dot-grid button + Menu label */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 group"
            aria-label="Toggle menu"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
                overHero ? 'bg-white' : 'bg-[#1A1508]'
              }`}
            >
              <div className="grid grid-cols-2 gap-[5px]">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className={`block w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                      overHero ? 'bg-[#1A1508]' : 'bg-[#EDE3CF]'
                    }`}
                  />
                ))}
              </div>
            </div>
            <span
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-500 ${
                overHero ? 'text-white' : 'text-[#1A1508]'
              }`}
            >
              Menu
            </span>
          </button>

          {/* Center: brand */}
          <a
            href="#hero"
            className={`absolute left-1/2 -translate-x-1/2 font-display font-bold text-[13px] uppercase tracking-[0.25em] whitespace-nowrap transition-colors duration-500 ${
              overHero ? 'text-white' : 'text-[#1A1508]'
            }`}
          >
            🇹🇬 Lomé Guide
          </a>

          {/* Right: pill + circle arrow */}
          <div className="flex items-center gap-2">
            <a
              href="#getting-there"
              className={`px-6 py-2.5 rounded-full font-body text-sm font-medium transition-colors duration-500 whitespace-nowrap ${
                overHero
                  ? 'bg-white text-[#1A1508] hover:bg-[#EDE3CF]'
                  : 'bg-[#1A1508] text-[#EDE3CF] hover:bg-[#006A4E]'
              }`}
            >
              View Guide
            </a>
            <a
              href="#getting-there"
              className="w-10 h-10 bg-[#D4483C] rounded-full flex items-center justify-center text-white text-base font-bold hover:bg-[#b53a2e] transition-colors"
              aria-label="Go to guide"
            >
              ↗
            </a>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          className={`border-t px-6 py-8 transition-colors duration-500 ${
            overHero
              ? 'bg-black/60 backdrop-blur-md border-white/10'
              : 'bg-[#EDE3CF] border-[#1A1508]/10'
          }`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display text-sm font-bold uppercase tracking-widest transition-colors py-3 border-b ${
                  overHero
                    ? 'text-white hover:text-[#FFCB00] border-white/10'
                    : 'text-[#1A1508] hover:text-[#006A4E] border-[#1A1508]/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
