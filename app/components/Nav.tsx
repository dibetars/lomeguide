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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#EDE3CF]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Left: Menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A1508] hover:text-[#006A4E] transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : 'w-3'}`} />
          </div>
          <span className="hidden sm:block">Menu</span>
        </button>

        {/* Center: Brand */}
        <a
          href="#hero"
          className="absolute left-1/2 -translate-x-1/2 font-display font-bold text-[13px] uppercase tracking-[0.25em] text-[#1A1508] whitespace-nowrap"
        >
          🇹🇬 Lomé Guide
        </a>

        {/* Right: CTA */}
        <a
          href="#getting-there"
          className="font-display text-[11px] font-bold uppercase tracking-[0.15em] bg-[#1A1508] text-[#EDE3CF] px-5 py-2.5 hover:bg-[#006A4E] transition-colors whitespace-nowrap"
        >
          Plan Trip →
        </a>
      </div>

      {/* Full-width dropdown */}
      {open && (
        <div className="bg-[#EDE3CF] border-t border-[#1A1508]/10 px-6 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-bold uppercase tracking-widest text-[#1A1508] hover:text-[#006A4E] transition-colors py-3 border-b border-[#1A1508]/10"
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
