import SectionHeader from './SectionHeader'

export default function GettingThere() {
  return (
    <section id="getting-there" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="02 — Getting There"
          title="Accra to the Border"
          subtitle="All public transport leaves from Tudu in central Accra, dropping you directly at the Aflao border. Walk through immigration and step right into Lomé."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Budget card */}
          <div className="bg-[#C4873A] text-white p-8 min-h-[240px] flex flex-col justify-between">
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-3">
                Budget Option
              </p>
              <p className="font-display font-extrabold text-white leading-none" style={{ fontSize: '5rem' }}>
                80
              </p>
              <p className="font-display font-bold text-xl text-white">GHS</p>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-white mb-2">🚌 12-Seater Bus</p>
              <p className="font-body text-sm text-white/75 leading-relaxed">
                Cheap and cheerful, but you&apos;ll wait for the bus to fill up before departing Tudu.
              </p>
            </div>
          </div>

          {/* Comfort card */}
          <div className="bg-[#006A4E] text-white p-8 min-h-[240px] flex flex-col justify-between">
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-3">
                Comfort Option
              </p>
              <p className="font-display font-extrabold text-white leading-none" style={{ fontSize: '5rem' }}>
                200
              </p>
              <p className="font-display font-bold text-xl text-white">GHS</p>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-white mb-2">🚗 4-Seater Sedan</p>
              <p className="font-body text-sm text-white/75 leading-relaxed">
                Faster, more legroom, and gets you to the border with fewer stops along the way.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 bg-[#006A4E]/8 border-l-4 border-[#006A4E] p-5">
          <span className="text-xl flex-shrink-0">💡</span>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-[#1A1508] mb-1">
              Health Pro-Tip
            </p>
            <p className="font-body text-sm text-[#1A1508]/70 leading-relaxed">
              Everyone must bring their valid <strong>Passport</strong> and physical{' '}
              <strong>Yellow Card</strong> (Yellow Fever vaccination card). Border officials on both
              sides check this strictly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
