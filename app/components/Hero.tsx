const floaters = [
  { emoji: '🇹🇬', style: { top: '18%', left: '6%', transform: 'rotate(-12deg)', fontSize: '3.5rem' } },
  { emoji: '🏖️', style: { top: '28%', right: '7%', transform: 'rotate(8deg)', fontSize: '3rem' } },
  { emoji: '✈️', style: { top: '52%', left: '4%', transform: 'rotate(-22deg)', fontSize: '2.2rem' } },
  { emoji: '🌴', style: { top: '62%', right: '5%', transform: 'rotate(14deg)', fontSize: '2.8rem' } },
  { emoji: '🍽️', style: { top: '44%', right: '13%', transform: 'rotate(-6deg)', fontSize: '2rem' } },
  { emoji: '🥂', style: { top: '20%', right: '20%', transform: 'rotate(18deg)', fontSize: '1.8rem' } },
  { emoji: '🛵', style: { top: '70%', left: '10%', transform: 'rotate(5deg)', fontSize: '2rem' } },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 overflow-hidden"
    >
      {/* Floating sticker decorations */}
      {floaters.map((f, i) => (
        <span
          key={i}
          className="absolute hidden lg:block select-none pointer-events-none opacity-80"
          style={f.style}
        >
          {f.emoji}
        </span>
      ))}

      {/* Eyebrow label */}
      <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#006A4E] mb-8">
        Accra → Lomé · Your Complete Weekend Guide
      </p>

      {/* Giant stacked headline */}
      <div className="leading-none mb-8 select-none">
        <div
          className="font-display font-extrabold uppercase text-[#1A1508] block"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 9.5rem)' }}
        >
          The Quick
        </div>
        <div
          className="font-serif italic font-light text-[#006A4E] block"
          style={{ fontSize: 'clamp(3rem, 11vw, 8rem)' }}
        >
          &amp; Dirty
        </div>
        <div
          className="font-display font-extrabold uppercase text-[#1A1508] block"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 9.5rem)' }}
        >
          Guide to
        </div>
        <div
          className="font-display font-extrabold uppercase text-[#D4483C] block"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 9.5rem)' }}
        >
          Lomé
        </div>
      </div>

      {/* Tagline */}
      <p className="font-body text-[#1A1508]/60 max-w-sm text-base leading-relaxed mb-10">
        One of the easiest, most vibrant weekend getaways from Ghana — incredible food, a
        laid-back French-West African vibe, and great beaches.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-14">
        <a
          href="#getting-there"
          className="bg-[#1A1508] text-[#EDE3CF] px-10 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-[#006A4E] transition-colors"
        >
          Plan Your Trip
        </a>
        <a
          href="#eat"
          className="border-2 border-[#1A1508] text-[#1A1508] px-10 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-[#1A1508] hover:text-[#EDE3CF] transition-all"
        >
          Eat &amp; Drink
        </a>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-8 md:gap-20 border-t-2 border-[#1A1508]/10 pt-8 max-w-lg w-full">
        {[
          { value: '80 GHS', label: 'Budget Bus' },
          { value: '30 Days', label: 'Visa-Free' },
          { value: '~47 XOF', label: 'Per 1 GHS' },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-xl md:text-2xl font-bold text-[#1A1508]">{s.value}</p>
            <p className="font-body text-[10px] text-[#1A1508]/40 uppercase tracking-widest mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
