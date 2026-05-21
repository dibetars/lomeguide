import SectionHeader from './SectionHeader'

const stays = [
  {
    name: 'Marcelo Beach Club',
    badge: 'Highly Recommended',
    badgeClass: 'bg-[#006A4E] text-white',
    desc: 'Quiet, chic, and highly aesthetic beachfront escape with excellent service. The community favorite.',
    icon: '🏖️',
  },
  {
    name: 'Nomads Hotel',
    badge: 'Highly Recommended',
    badgeClass: 'bg-[#006A4E] text-white',
    desc: 'Modern creative energy hotel with an amazing on-site lifestyle vibe. Great for the design-conscious traveler.',
    icon: '✨',
  },
  {
    name: 'Pure Plage',
    badge: 'Beach Luxury',
    badgeClass: 'bg-stone-100 text-stone-600',
    desc: 'Elegant stay with a private beach and ultimate beach-resort relaxation energy right on the coast.',
    icon: '🌊',
  },
  {
    name: 'Le Patio',
    badge: 'Boutique',
    badgeClass: 'bg-stone-100 text-stone-600',
    desc: 'Central, cozy boutique hotel that beautifully couples premium accommodation with fantastic dining.',
    icon: '🌿',
  },
  {
    name: 'ONOMO Hotel Lomé',
    badge: 'Business & Comfort',
    badgeClass: 'bg-stone-100 text-stone-600',
    desc: 'Reliable, modern, beachfront and secure. Favored by business travelers, creatives, and comfort seekers.',
    icon: '🏨',
  },
  {
    name: 'Budget Airbnbs',
    badge: 'Best Value',
    badgeClass: 'bg-amber-100 text-amber-700',
    desc: 'Fully-furnished apartments starting at $10–$30/night. Check if electricity (Cashpower) is included in the price.',
    icon: '🏠',
  },
]

export default function StaySection() {
  return (
    <section id="stay" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="05 — Where to Stay"
          title="A Bed for Every Budget"
          subtitle="From chic beachfront clubs to affordable Airbnbs, Lomé has great options across every price range."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stays.map((stay) => (
            <div
              key={stay.name}
              className="border border-stone-100 p-6 hover:border-[#006A4E] transition-all"
            >
              <span className="text-3xl block mb-4">{stay.icon}</span>
              <span
                className={`font-body text-[10px] uppercase tracking-widest px-2 py-0.5 ${stay.badgeClass} inline-block mb-3`}
              >
                {stay.badge}
              </span>
              <h3 className="font-body text-sm font-semibold text-stone-800 mb-3">{stay.name}</h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{stay.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4 bg-amber-50 border-l-2 border-amber-400 p-5 rounded-r">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="font-body text-sm text-stone-600 leading-relaxed">
            <strong>Crucial Tip:</strong> When booking Airbnbs, make sure to check if electricity
            (Cashpower) is included in the booking price so you don&apos;t get surprised by an extra
            utility bill.
          </p>
        </div>
      </div>
    </section>
  )
}
