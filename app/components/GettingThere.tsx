import SectionHeader from './SectionHeader'

export default function GettingThere() {
  return (
    <section id="getting-there" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="01 — Getting There"
          title="Accra to the Border"
          subtitle="All public transport leaves from Tudu in central Accra, dropping you directly at the Aflao border. Walk through immigration and step right into Lomé — the city sits directly on the border line."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="border border-stone-200 p-8 hover:border-[#006A4E] transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🚌</span>
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-400">
                Budget Option
              </p>
            </div>
            <p className="font-display text-5xl font-light text-stone-800 mb-2">80 GHS</p>
            <p className="font-body text-sm font-semibold text-stone-700 mb-4">12-Seater Bus</p>
            <p className="font-body text-sm text-stone-500 leading-relaxed">
              Cheap and cheerful, but you'll wait for the bus to fill up with passengers before
              departing Tudu.
            </p>
          </div>

          <div className="border border-stone-200 p-8 hover:border-[#006A4E] transition-colors bg-[#FAF7F2]">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🚗</span>
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-400">
                Comfort Option
              </p>
            </div>
            <p className="font-display text-5xl font-light text-stone-800 mb-2">200 GHS</p>
            <p className="font-body text-sm font-semibold text-stone-700 mb-4">4-Seater Sedan</p>
            <p className="font-body text-sm text-stone-500 leading-relaxed">
              Faster, more legroom, and gets you to the border with fewer stops along the way.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#006A4E]/5 border-l-2 border-[#006A4E] p-5 rounded-r">
          <span className="text-xl flex-shrink-0">💡</span>
          <div>
            <p className="font-body text-sm font-semibold text-stone-800 mb-1">Health Pro-Tip</p>
            <p className="font-body text-sm text-stone-600 leading-relaxed">
              Everyone — regardless of nationality — must bring their valid{' '}
              <strong>Passport</strong> and physical <strong>Yellow Card</strong> (Yellow Fever
              vaccination card). Border officials on both sides check this strictly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
