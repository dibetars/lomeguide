'use client'

import { useState } from 'react'
import SectionHeader from './SectionHeader'

const stays = [
  {
    name: 'Marcelo Beach Club',
    tags: ['Top Pick', 'Beachfront', 'Highly Recommended'],
    emoji: '🏖️',
    highlightBg: '#C5BBEE',
    imageBg: '#3D2A7A',
  },
  {
    name: 'Nomads Hotel',
    tags: ['Top Pick', 'Lifestyle Vibe'],
    emoji: '✨',
    highlightBg: '#B8D4C4',
    imageBg: '#1A4A35',
  },
  {
    name: 'Pure Plage',
    tags: ['Beach Luxury', 'Private Beach'],
    emoji: '🌊',
    highlightBg: '#B8CFE0',
    imageBg: '#1A3A5C',
  },
  {
    name: 'Le Patio',
    tags: ['Boutique', 'Central'],
    emoji: '🌿',
    highlightBg: '#D4C8A8',
    imageBg: '#5A3A1A',
  },
  {
    name: 'ONOMO Hotel Lomé',
    tags: ['Beachfront', 'Business & Comfort'],
    emoji: '🏨',
    highlightBg: '#C0C8D4',
    imageBg: '#2A3A4A',
  },
  {
    name: 'Budget Airbnbs',
    tags: ['Best Value', 'From $10/night'],
    emoji: '🏠',
    highlightBg: '#E0CEAA',
    imageBg: '#7A4A1A',
  },
]

export default function StaySection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="stay"
      className="bg-[#EDE3CF] py-20 md:py-32 overflow-hidden"
    >
      {/* Two-column wrapper */}
      <div className="flex items-start">

        {/* ── Left: full-width accordion ── */}
        <div className="flex-1 min-w-0">

          {/* Header */}
          <div className="max-w-4xl mx-auto px-6 md:px-10 mb-2">
            <SectionHeader
              number="06 — Where to Stay"
              title="A Bed for Every Budget"
              subtitle="From chic beachfront clubs to affordable Airbnbs, Lomé has great options across every price range."
            />
          </div>

          {/* Accordion rows */}
          {stays.map((stay, i) => (
            <div
              key={stay.name}
              className="relative cursor-pointer"
              onMouseEnter={() => setActive(i)}
            >
              {/* Full-width highlight band */}
              <div
                className="absolute inset-y-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  left: '-100vw',
                  right: '-100vw',
                  backgroundColor: stay.highlightBg,
                  opacity: active === i ? 1 : 0,
                }}
              />

              {/* Row content */}
              <div
                className={`relative flex items-center justify-between gap-4 px-6 md:px-10 py-5 md:py-7 ${
                  i < stays.length - 1 ? 'border-b border-[#1A1508]/10' : ''
                }`}
              >
                {/* Emoji + title + pills */}
                <div className="flex items-center gap-3 md:gap-5 min-w-0">
                  {/* Emoji — always visible, pops on active */}
                  <span
                    className="text-xl md:text-2xl flex-shrink-0 transition-all duration-300"
                    style={{
                      opacity: active === i ? 1 : 0.2,
                      transform: active === i ? 'scale(1)' : 'scale(0.75)',
                    }}
                  >
                    {stay.emoji}
                  </span>

                  <div>
                    <h3
                      className="font-hero italic font-black leading-none mb-2 md:mb-3 transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.6rem)',
                        color:
                          active === i
                            ? '#1A1508'
                            : 'rgba(26,21,8,0.30)',
                      }}
                    >
                      {stay.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {stay.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[9px] md:text-[10px] uppercase tracking-widest px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border transition-colors duration-300"
                          style={{
                            borderColor:
                              active === i
                                ? 'rgba(26,21,8,0.45)'
                                : 'rgba(26,21,8,0.18)',
                            color:
                              active === i
                                ? 'rgba(26,21,8,0.75)'
                                : 'rgba(26,21,8,0.30)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow circle */}
                <div
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor:
                      active === i ? '#1A1508' : 'transparent',
                    border:
                      active === i
                        ? '2px solid #1A1508'
                        : '1px solid rgba(26,21,8,0.18)',
                  }}
                >
                  <span
                    className="text-sm font-bold leading-none transition-colors duration-300"
                    style={{
                      color:
                        active === i
                          ? '#EDE3CF'
                          : 'rgba(26,21,8,0.25)',
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Tip */}
          <div className="px-6 md:px-10 mt-8">
            <div className="flex gap-3 bg-amber-100/60 border-l-4 border-[#C4873A] p-4 rounded-r-lg">
              <span className="text-lg flex-shrink-0">💡</span>
              <p className="font-body text-xs md:text-sm text-[#1A1508]/70 leading-relaxed">
                <strong>Crucial Tip:</strong> When booking Airbnbs, always check if electricity
                (Cashpower) is included so you don&apos;t get surprised by an extra utility bill.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: sticky image panel (desktop only) ── */}
        <div className="hidden lg:block w-[380px] xl:w-[420px] flex-shrink-0 self-stretch">
          <div className="sticky top-0 h-screen flex items-center pr-6 xl:pr-10">
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: '480px' }}>
              {stays.map((stay, i) => (
                <div
                  key={stay.name}
                  className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
                  style={{
                    backgroundColor: stay.imageBg,
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? 'scale(1)' : 'scale(1.04)',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    className="select-none"
                    style={{ fontSize: '7.5rem' }}
                  >
                    {stay.emoji}
                  </span>
                  <p
                    className="font-hero italic font-black text-white/70 mt-4 text-center px-6"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                  >
                    {stay.name}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mt-3 px-6">
                    {stay.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/30 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
