'use client'

import { useState } from 'react'
import SectionHeader from './SectionHeader'

const stays = [
  {
    name: 'Marcelo Beach Club',
    tags: ['Top Pick', 'Beachfront', 'Highly Recommended'],
    emoji: '🏖️',
    cardBg: '#E8756A',
    imageBg: '#006A4E',
    featured: true,
  },
  {
    name: 'Nomads Hotel',
    tags: ['Top Pick', 'Lifestyle Vibe'],
    emoji: '✨',
    imageBg: '#1A4A35',
  },
  {
    name: 'Pure Plage',
    tags: ['Beach Luxury', 'Private Beach'],
    emoji: '🌊',
    imageBg: '#2D6A8F',
  },
  {
    name: 'Le Patio',
    tags: ['Boutique', 'Central'],
    emoji: '🌿',
    imageBg: '#7A5C3A',
  },
  {
    name: 'ONOMO Hotel Lomé',
    tags: ['Beachfront', 'Business & Comfort'],
    emoji: '🏨',
    imageBg: '#3A4A5C',
  },
  {
    name: 'Budget Airbnbs',
    tags: ['Best Value', 'From $10/night'],
    emoji: '🏠',
    imageBg: '#C4873A',
  },
]

export default function StaySection() {
  const [active, setActive] = useState(0)

  return (
    <section id="stay" className="bg-[#EDE3CF] py-20 md:py-32 overflow-hidden">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <SectionHeader
          number="05 — Where to Stay"
          title="A Bed for Every Budget"
          subtitle="From chic beachfront clubs to affordable Airbnbs, Lomé has great options across every price range."
        />
      </div>

      {/* Two-column: list left, sticky image right */}
      <div className="max-w-7xl mx-auto px-6 flex gap-8 items-start">

        {/* ── Left: content ── */}
        <div className="flex-1 min-w-0">

          {/* Featured card */}
          <div
            className="flex items-center justify-between px-8 py-8 cursor-pointer mb-0"
            style={{ backgroundColor: stays[0].cardBg }}
            onMouseEnter={() => setActive(0)}
          >
            <div className="flex flex-col gap-4">
              <h3
                className="font-hero italic font-black text-[#1A1508] leading-[0.9]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stays[0].name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stays[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#1A1508] text-[#1A1508] font-body text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#1A1508]/25 flex items-center justify-center flex-shrink-0 ml-6">
              <span className="text-[#1A1508] text-base font-bold leading-none">→</span>
            </div>
          </div>

          {/* List rows */}
          {stays.slice(1).map((stay, i) => (
            <div
              key={stay.name}
              className={`flex items-center justify-between py-7 gap-4 cursor-pointer group transition-opacity duration-200 ${
                active !== i + 1 ? 'opacity-60' : 'opacity-100'
              } ${i < stays.length - 2 ? 'border-b border-[#1A1508]/10' : ''}`}
              onMouseEnter={() => setActive(i + 1)}
              onMouseLeave={() => setActive(0)}
            >
              <div className="flex flex-col gap-3">
                <h3
                  className="font-hero italic font-black text-[#1A1508]/40 group-hover:text-[#1A1508]/80 transition-colors duration-300 leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                >
                  {stay.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stay.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#1A1508]/25 text-[#1A1508]/45 font-body text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full group-hover:border-[#1A1508]/50 group-hover:text-[#1A1508]/70 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#1A1508]/15 group-hover:border-[#1A1508]/40 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <span className="text-[#1A1508]/30 group-hover:text-[#1A1508]/70 text-base font-bold leading-none transition-colors duration-300">
                  ↗
                </span>
              </div>
            </div>
          ))}

          {/* Tip */}
          <div className="mt-6 flex gap-4 bg-amber-100/60 border-l-4 border-[#C4873A] p-5">
            <span className="text-xl flex-shrink-0">💡</span>
            <p className="font-body text-sm text-[#1A1508]/70 leading-relaxed">
              <strong>Crucial Tip:</strong> When booking Airbnbs, always check if electricity
              (Cashpower) is included so you don&apos;t get surprised by an extra utility bill.
            </p>
          </div>
        </div>

        {/* ── Right: sticky image panel ── */}
        <div className="hidden lg:block w-[400px] flex-shrink-0 self-start">
          <div className="sticky top-24" style={{ height: '480px' }}>
            <div className="relative w-full h-full overflow-hidden">
              {stays.map((stay, i) => (
                <div
                  key={stay.name}
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                  style={{
                    backgroundColor: stay.imageBg,
                    opacity: active === i ? 1 : 0,
                  }}
                >
                  <span
                    className="select-none transition-transform duration-500"
                    style={{
                      fontSize: '8rem',
                      transform: active === i ? 'scale(1)' : 'scale(0.85)',
                    }}
                  >
                    {stay.emoji}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
