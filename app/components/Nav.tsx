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
        scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm border-b border-stone-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-medium text-stone-800">
          🇹🇬 <span className="italic">Lomé</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[11px] text-stone-500 hover:text-[#006A4E] transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-stone-600 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-current transition-all origin-center ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span className={`block h-px w-6 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-px w-4 bg-current transition-all origin-center ${
              open ? '-rotate-45 -translate-y-[7px] w-6' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-stone-200 px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-stone-600 hover:text-[#006A4E] transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
