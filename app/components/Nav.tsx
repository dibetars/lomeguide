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
    const handler = () => setOverHero(window.scrollY < window.innerHeight * 0.35)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500 pt-[env(safe-area-inset-top)]">
      {/* Main bar */}
      <div
        className={`transition-colors duration-500 ${
          overHero ? 'bg-transparent' : 'bg-[#EDE3CF] shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between relative">

          {/* Left: Togo map icon button + Menu label */}
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
              {/* Togo country outline SVG */}
              <svg
                viewBox="0 0 60 100"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={`M30 4 C36 4 44 7 48 13 C52 19 54 26 53 34
                      C52 40 50 44 51 50 C52 56 55 60 54 66
                      C53 72 49 77 45 81 C41 85 36 88 32 92
                      C30 94 28 96 26 94 C22 90 18 85 15 80
                      C11 74 8 68 7 62 C6 56 8 50 9 44
                      C10 38 10 32 8 26 C6 20 8 13 13 9
                      C18 5 24 4 30 4 Z`}
                  className={`transition-colors duration-500 ${
                    overHero ? 'fill-[#1A1508]' : 'fill-[#EDE3CF]'
                  }`}
                />
                {/* Star dot for Lomé (southern coast) */}
                <circle
                  cx="28"
                  cy="78"
                  r="4"
                  className={`transition-colors duration-500 ${
                    overHero ? 'fill-white' : 'fill-[#D4483C]'
                  }`}
                />
              </svg>
            </div>
            <span
              className={`hidden min-[380px]:inline font-body text-sm font-medium tracking-wide transition-colors duration-500 ${
                overHero ? 'text-white' : 'text-[#1A1508]'
              }`}
            >
              Menu
            </span>
          </button>

          {/* Center: brand */}
          <a
            href="#hero"
            className={`absolute left-1/2 -translate-x-1/2 font-display font-bold text-[12px] sm:text-[13px] uppercase tracking-[0.14em] sm:tracking-[0.25em] whitespace-nowrap transition-colors duration-500 ${
              overHero ? 'text-white' : 'text-[#1A1508]'
            }`}
          >
            lome.stay
          </a>

          {/* Right: pill + circle arrow */}
          <div className="flex items-center gap-2">
            <a
              href="#getting-there"
              className={`hidden md:block px-6 py-2.5 rounded-full font-body text-sm font-medium transition-colors duration-500 whitespace-nowrap ${
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
          className={`border-t px-4 sm:px-6 py-6 md:py-8 transition-colors duration-500 ${
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
