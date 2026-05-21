import SectionHeader from './SectionHeader'

const tips = [
  {
    icon: '🚫',
    title: 'Ignore the "Border Helpers"',
    desc: 'Men will offer to carry bags or fast-track your visa the moment you step out. Firmly say no. Walk directly to official immigration buildings yourself.',
  },
  {
    icon: '👜',
    title: 'Hold On to Your Luggage',
    desc: 'Keep a close eye on your bags while walking between the Ghana and Togo checkpoints.',
  },
  {
    icon: '💸',
    title: 'The "Gate Fee" Scam',
    desc: "Unauthorized individuals may ask for a cash dash to pass through the gate. If your documents are valid, you owe no one money. Ask for an official receipt — they'll back down.",
  },
  {
    icon: '📵',
    title: 'Absolutely No Photography',
    desc: 'Do not take photos or videos at border checkpoints. Officials take this very seriously and will confiscate your device or issue a fine.',
  },
]

export default function BorderTips() {
  return (
    <section id="border-tips" className="py-20 md:py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="03 — Border Tips"
          title="Stay Sharp at the Gates"
          subtitle="Crossing a land border can feel chaotic if you aren't prepared. Keep these safety and sanity rules in mind."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip) => (
            <div key={tip.title} className="bg-white p-6 flex gap-4">
              <span className="text-2xl flex-shrink-0">{tip.icon}</span>
              <div>
                <p className="font-body text-sm font-semibold text-stone-800 mb-2">{tip.title}</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
