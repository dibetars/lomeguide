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
    wrapperClass: 'border-[#006A4E]/20 bg-[#006A4E]/5',
    numClass: 'text-[#006A4E]',
    dotClass: 'text-[#006A4E]',
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
    wrapperClass: 'border-[#D21034]/20 bg-[#D21034]/5',
    numClass: 'text-[#D21034]',
    dotClass: 'text-[#D21034]',
  },
  {
    number: '03',
    title: 'The Ultimate Lifestyle Blend',
    steps: [
      'Premium brunch at Le Patio',
      'Hot afternoon sunbathing at Pure Plage',
      'Breezy open-air dinner at Le Hangar',
      'Upscale drink on the 2 Février Rooftop',
    ],
    mood: '✨ Luxury & Lifestyle',
    wrapperClass: 'border-amber-200 bg-amber-50',
    numClass: 'text-amber-600',
    dotClass: 'text-amber-500',
  },
]

export default function ItinerariesSection() {
  return (
    <section id="itineraries" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="08 — Curated Itineraries"
          title="Pick Your Weekend"
          subtitle="Three curated experiences for different travel moods. Mix and match as you see fit."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div key={exp.number} className={`border p-6 ${exp.wrapperClass}`}>
              <p className={`font-display text-5xl font-light mb-4 ${exp.numClass}`}>
                {exp.number}
              </p>
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                {exp.mood}
              </p>
              <h3 className="font-body text-sm font-semibold text-stone-800 mb-5">{exp.title}</h3>
              <ol className="space-y-3">
                {exp.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm text-stone-600">
                    <span className={`font-display text-lg font-light flex-shrink-0 leading-tight ${exp.dotClass}`}>
                      {i + 1}
                    </span>
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
