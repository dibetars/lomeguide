import SectionHeader from './SectionHeader'

const exchangeSpots = [
  {
    icon: '📍',
    title: 'Tudu Station',
    label: 'Before You Board',
    desc: "Informal changers at Tudu are convenient for emergency border cash but often don't offer the best rates.",
  },
  {
    icon: '🏁',
    title: 'Aflao Border',
    label: 'Recommended for Cash',
    desc: 'Many changers on both sides. Ask 2–3 for rates first. Always count your CFA carefully before handing over your Cedis.',
  },
  {
    icon: '🏦',
    title: 'Lomé Forex Bureaus',
    label: 'Structured Environment',
    desc: 'Official Bureaux de Change in the city center, though hours are more restrictive than the 24/7 border market.',
  },
]

export default function CurrencySection() {
  return (
    <section id="currency" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04 — Currency & Money"
          title="GHS to CFA"
          subtitle="Togo uses the West African CFA Franc (XOF) — a completely different currency from the Ghanaian Cedi. Togo is largely cash-dominant, so handling your money correctly is a major key."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {exchangeSpots.map((item) => (
            <div key={item.title} className="border border-stone-100 p-6 hover:border-stone-300 transition-colors">
              <span className="text-3xl block mb-4">{item.icon}</span>
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                {item.label}
              </p>
              <p className="font-body text-sm font-semibold text-stone-800 mb-3">{item.title}</p>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#FFCB00]/10 border border-[#FFCB00]/40 p-6">
            <p className="font-body text-[10px] uppercase tracking-widest text-stone-500 mb-2">
              Exchange Rate Benchmark
            </p>
            <p className="font-display text-5xl font-light text-stone-800 mb-1">45–50 XOF</p>
            <p className="font-body text-sm text-stone-500 mb-4">per 1 GHS</p>
            <p className="font-body text-xs text-stone-500 leading-relaxed">
              Rates fluctuate daily. Check <strong>Xe</strong> or <strong>Wise</strong> on the
              morning of your trip so you can spot a bad deal immediately.
            </p>
          </div>

          <div className="bg-[#FAF7F2] border border-stone-100 p-6">
            <p className="font-body text-[10px] uppercase tracking-widest text-stone-500 mb-2">
              ATMs &amp; Card Payments
            </p>
            <p className="font-body text-sm font-semibold text-stone-800 mb-1">
              Ecobank · Atlantic Bank · Orabank
            </p>
            <p className="font-body text-xs text-stone-400 mb-4">Withdraw CFA directly</p>
            <p className="font-body text-xs text-stone-500 leading-relaxed">
              Alert your Ghanaian bank before traveling. High-end spots accept cards, but street
              food, taxis, and smaller bars are strictly <strong>cash-only</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
