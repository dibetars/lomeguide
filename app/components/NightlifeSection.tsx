const venues = [
  {
    name: 'MAD Complexe Lomé',
    desc: 'The legendary Accra nightlife staple from East Legon has touched down in Lomé. Expect high energy, great music, and familiar vibes.',
    icon: '🎉',
    vibe: 'High Energy',
  },
  {
    name: 'Hotel 2 Février Rooftop',
    desc: 'An iconic luxury location. Head here for classy, upscale drinks with a sweeping panoramic view of the entire city skyline.',
    icon: '🥂',
    vibe: 'Rooftop Views',
  },
  {
    name: 'Oya Bar',
    desc: 'Stylish and lively for starting the night with excellent cocktails, cool crowds, and resident DJs.',
    icon: '🎵',
    vibe: 'Pre-Night Cocktails',
  },
  {
    name: 'Le Galion',
    desc: 'A classic, reliable spot with a sophisticated crowd, perfect for drinks, mingling, and frequent live music.',
    icon: '🎸',
    vibe: 'Live Music',
  },
]

export default function NightlifeSection() {
  return (
    <section id="nightlife" className="py-20 md:py-32 px-6 bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#FFCB00] mb-4">
            07 — Nightlife
          </p>
          <h2
            className="font-display font-light italic text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Starts Late, Goes Hard
          </h2>
          <p className="font-body text-stone-400 text-base max-w-xl leading-relaxed">
            Here&apos;s where to grab a cocktail or dance the night away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className="border border-stone-700 p-6 hover:border-[#FFCB00] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{venue.icon}</span>
                <span className="font-body text-[10px] uppercase tracking-widest text-stone-500">
                  {venue.vibe}
                </span>
              </div>
              <h3 className="font-body text-sm font-semibold text-white mb-3">{venue.name}</h3>
              <p className="font-body text-sm text-stone-400 leading-relaxed">{venue.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
