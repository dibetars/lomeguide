import SectionHeader from './SectionHeader'

const featured = {
  name: 'Marcelo Beach Club',
  tags: ['Top Pick', 'Beachfront', 'Highly Recommended'],
  emoji: '🏖️',
}

const stays = [
  {
    name: 'Nomads Hotel',
    tags: ['Top Pick', 'Lifestyle Vibe'],
  },
  {
    name: 'Pure Plage',
    tags: ['Beach Luxury', 'Private Beach'],
  },
  {
    name: 'Le Patio',
    tags: ['Boutique', 'Central'],
  },
  {
    name: 'ONOMO Hotel Lomé',
    tags: ['Beachfront', 'Business & Comfort'],
  },
  {
    name: 'Budget Airbnbs',
    tags: ['Best Value', 'From $10/night'],
  },
]

export default function StaySection() {
  return (
    <section id="stay" className="py-20 md:py-32 bg-[#EDE3CF]">

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <SectionHeader
          number="05 — Where to Stay"
          title="A Bed for Every Budget"
          subtitle="From chic beachfront clubs to affordable Airbnbs, Lomé has great options across every price range."
        />
      </div>

      {/* ── Featured card ── */}
      <div className="max-w-5xl mx-auto px-6 mb-0">
        <div className="bg-[#E8756A] flex items-stretch overflow-hidden min-h-[200px] md:min-h-[220px]">

          {/* Left: title + pills */}
          <div className="flex-1 px-8 py-8 flex flex-col justify-center gap-5">
            <h3
              className="font-hero italic font-black text-[#1A1508] leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              {featured.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1A1508] text-[#1A1508] font-body text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div className="hidden md:flex w-[38%] bg-[#1A1508]/20 items-center justify-center flex-shrink-0">
            <span className="text-7xl select-none">{featured.emoji}</span>
          </div>

          {/* Arrow */}
          <div className="flex items-center px-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-[#1A1508]/25 flex items-center justify-center">
              <span className="text-[#1A1508] text-base font-bold leading-none">↗</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── List rows ── */}
      <div className="max-w-5xl mx-auto px-6">
        {stays.map((stay, i) => (
          <div
            key={stay.name}
            className={`flex items-center justify-between py-7 gap-4 ${
              i < stays.length - 1 ? 'border-b border-[#1A1508]/10' : ''
            }`}
          >
            <div className="flex flex-col gap-3">
              <h3
                className="font-hero italic font-black text-[#1A1508]/35 leading-none"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                {stay.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stay.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#1A1508]/25 text-[#1A1508]/45 font-body text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow circle */}
            <div className="w-10 h-10 rounded-full border border-[#1A1508]/15 flex items-center justify-center flex-shrink-0">
              <span className="text-[#1A1508]/30 text-base font-bold leading-none">↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tip */}
      <div className="max-w-5xl mx-auto px-6 mt-6">
        <div className="flex gap-4 bg-amber-100/60 border-l-4 border-[#C4873A] p-5">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="font-body text-sm text-[#1A1508]/70 leading-relaxed">
            <strong>Crucial Tip:</strong> When booking Airbnbs, always check if electricity
            (Cashpower) is included so you don&apos;t get surprised by an extra utility bill.
          </p>
        </div>
      </div>
    </section>
  )
}
