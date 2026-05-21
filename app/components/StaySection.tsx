import SectionHeader from './SectionHeader'

const stays = [
  {
    name: 'Marcelo Beach Club',
    badge: 'Top Pick',
    bg: 'bg-[#006A4E]',
    desc: 'Quiet, chic, and highly aesthetic beachfront escape with excellent service. The community favourite.',
    icon: '🏖️',
  },
  {
    name: 'Nomads Hotel',
    badge: 'Top Pick',
    bg: 'bg-[#1A1508]',
    desc: 'Modern creative energy hotel with an amazing on-site lifestyle vibe. Great for the design-conscious traveller.',
    icon: '✨',
  },
  {
    name: 'Pure Plage',
    badge: 'Beach Luxury',
    bg: 'bg-[#2D6A8F]',
    desc: 'Elegant stay with a private beach and ultimate beach-resort relaxation energy right on the coast.',
    icon: '🌊',
  },
  {
    name: 'Le Patio',
    badge: 'Boutique',
    bg: 'bg-[#7A5C3A]',
    desc: 'Central, cozy boutique hotel that beautifully couples premium accommodation with fantastic dining.',
    icon: '🌿',
  },
  {
    name: 'ONOMO Hotel Lomé',
    badge: 'Business & Comfort',
    bg: 'bg-[#3A4A5C]',
    desc: 'Reliable, modern, beachfront and secure. Favoured by business travellers, creatives, and comfort seekers.',
    icon: '🏨',
  },
  {
    name: 'Budget Airbnbs',
    badge: 'Best Value · From $10/night',
    bg: 'bg-[#C4873A]',
    desc: 'Fully-furnished apartments across the city. Check if electricity (Cashpower) is included in the price.',
    icon: '🏠',
  },
]

export default function StaySection() {
  return (
    <section id="stay" className="py-20 md:py-32 px-6 bg-[#EDE3CF]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="05 — Where to Stay"
          title="A Bed for Every Budget"
          subtitle="From chic beachfront clubs to affordable Airbnbs, Lomé has great options across every price range."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stays.map((stay) => (
            <div
              key={stay.name}
              className={`${stay.bg} text-white p-6 min-h-[200px] flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{stay.icon}</span>
                <span className="font-body text-[9px] uppercase tracking-widest text-white/60 text-right leading-tight">
                  {stay.badge}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-2">
                  {stay.name}
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">{stay.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4 bg-amber-100 border-l-4 border-[#C4873A] p-5">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="font-body text-sm text-[#1A1508]/80 leading-relaxed">
            <strong>Crucial Tip:</strong> When booking Airbnbs, always check if electricity
            (Cashpower) is included so you don&apos;t get surprised by an extra utility bill.
          </p>
        </div>
      </div>
    </section>
  )
}
