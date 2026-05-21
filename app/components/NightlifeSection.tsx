const venues = [
  {
    name: 'MAD Complexe Lomé',
    desc: 'The legendary Accra nightlife staple from East Legon has touched down in Lomé. Expect high energy, great music, and familiar vibes.',
    icon: '🎉',
    vibe: 'High Energy',
    bg: 'bg-[#D4483C]',
  },
  {
    name: 'Hotel 2 Février Rooftop',
    desc: 'An iconic luxury location. Head here for classy, upscale drinks with a sweeping panoramic view of the entire city skyline.',
    icon: '🥂',
    vibe: 'Rooftop Views',
    bg: 'bg-[#2D3A4A]',
  },
  {
    name: 'Oya Bar',
    desc: 'Stylish and lively for starting the night with excellent cocktails, cool crowds, and resident DJs.',
    icon: '🎵',
    vibe: 'Pre-Night Cocktails',
    bg: 'bg-[#4A2D5C]',
  },
  {
    name: 'Le Galion',
    desc: 'A classic, reliable spot with a sophisticated crowd, perfect for drinks, mingling, and frequent live music.',
    icon: '🎸',
    vibe: 'Live Music',
    bg: 'bg-[#2D4A3A]',
  },
]

export default function NightlifeSection() {
  return (
    <section id="nightlife" className="py-20 md:py-32 px-6 bg-[#1A1508]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#FFCB00] mb-4">
            08 — Nightlife
          </p>
          <h2
            className="font-display font-extrabold uppercase text-white leading-none mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Starts Late,
            <br />
            <span className="font-serif italic font-light text-[#FFCB00]">Goes Hard</span>
          </h2>
          <p className="font-body text-white/40 text-base max-w-xl leading-relaxed">
            Here&apos;s where to grab a cocktail or dance the night away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {venues.map((venue) => (
            <div key={venue.name} className={`${venue.bg} p-6 min-h-[180px] flex flex-col justify-between`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{venue.icon}</span>
                <span className="font-body text-[9px] uppercase tracking-widest text-white/50">
                  {venue.vibe}
                </span>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white mb-2">
                  {venue.name}
                </h3>
                <p className="font-body text-sm text-white/65 leading-relaxed">{venue.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
