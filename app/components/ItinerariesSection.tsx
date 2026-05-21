import SectionHeader from './SectionHeader'

const experiences = [
  {
    number: '01',
    title: 'The Chill & Coastal Vibe',
    steps: [
      'Settle in at Marcelo Beach Club',
      'Spend the afternoon on the beachfront',
      'Dinner at Picasso Togo',
      'Oceanfront nightcaps at ZanziBar',
    ],
    mood: '🌊 Beach & Chill',
    bg: 'bg-[#006A4E]',
  },
  {
    number: '02',
    title: 'City Explorer & High Energy',
    steps: [
      'Explore the Lomé town center',
      'Quick lunch at Mr. Burger',
      'Unwind at La Sunset Beach Lounge',
      'Dinner & hookah at La Huqqa',
      'Dive into nightlife at MAD Complexe',
    ],
    mood: '🎉 Explore & Party',
    bg: 'bg-[#D4483C]',
  },
  {
    number: '03',
    title: 'Ultimate Lifestyle Blend',
    steps: [
      'Premium brunch at Le Patio',
      'Hot afternoon at Pure Plage',
      'Breezy open-air dinner at Le Hangar',
      'Upscale drink on the 2 Février Rooftop',
    ],
    mood: '✨ Luxury & Lifestyle',
    bg: 'bg-[#C4873A]',
  },
]

export default function ItinerariesSection() {
  return (
    <section id="itineraries" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="09 — Curated Itineraries"
          title="Pick Your Weekend"
          subtitle="Three curated experiences for different travel moods. Mix and match as you see fit."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {experiences.map((exp) => (
            <div key={exp.number} className={`${exp.bg} text-white p-6 min-h-[320px] flex flex-col justify-between`}>
              <div>
                <p className="font-display font-extrabold text-white/20 leading-none mb-4" style={{ fontSize: '4rem' }}>
                  {exp.number}
                </p>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  {exp.mood}
                </p>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white mb-5">
                  {exp.title}
                </h3>
              </div>
              <ol className="space-y-3">
                {exp.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm text-white/80">
                    <span className="font-display font-bold text-white/30 flex-shrink-0 w-4">{i + 1}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
