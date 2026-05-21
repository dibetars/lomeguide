import SectionHeader from './SectionHeader'

export default function VisaSection() {
  return (
    <section id="visa" className="py-20 md:py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="02 — Visa & Entry"
          title="Know Your Passport"
          subtitle="Immigration procedures at Aflao depend on the passport you hold. Handle all digital requirements at least 24 hours before you travel."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-[#006A4E]">
                  African Passport
                </p>
                <p className="font-body text-[10px] text-stone-400">
                  ECOWAS &amp; All African Countries
                </p>
              </div>
            </div>
            <span className="inline-block bg-[#006A4E] text-white font-body text-[10px] uppercase tracking-widest px-3 py-1 mb-4">
              Free &amp; Visa-Exempt
            </span>
            <p className="font-body text-sm text-stone-600 leading-relaxed mb-5">
              Togo allows visa-free entry to all African country nationals for stays of up to 30
              days.
            </p>
            <div className="border-t border-stone-100 pt-5">
              <p className="font-body text-xs font-semibold text-stone-700 mb-3 uppercase tracking-widest">
                Required
              </p>
              <ul className="space-y-3 font-body text-sm text-stone-600">
                <li className="flex gap-2">
                  <span className="text-[#006A4E] flex-shrink-0 mt-0.5">→</span>
                  Complete the mandatory online declaration at{' '}
                  <strong>voyage.gouv.tg</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#006A4E] flex-shrink-0 mt-0.5">→</span>
                  Print your travel slip and present it at the border checkpoint
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-stone-500">
                  Non-African Passport
                </p>
                <p className="font-body text-[10px] text-stone-400">US, UK, Europe, Asia &amp; others</p>
              </div>
            </div>
            <span className="inline-block bg-stone-800 text-white font-body text-[10px] uppercase tracking-widest px-3 py-1 mb-4">
              E-Visa Required
            </span>
            <p className="font-body text-sm text-stone-600 leading-relaxed mb-5">
              Cannot get a visa-on-arrival at the land border. Apply beforehand via the official
              government portal.
            </p>
            <div className="border-t border-stone-100 pt-5">
              <p className="font-body text-xs font-semibold text-stone-700 mb-3 uppercase tracking-widest">
                Required
              </p>
              <ul className="space-y-3 font-body text-sm text-stone-600">
                <li className="flex gap-2">
                  <span className="text-stone-400 flex-shrink-0 mt-0.5">→</span>
                  Apply for E-Visa at <strong>voyage.gouv.tg</strong> before travel
                </li>
                <li className="flex gap-2">
                  <span className="text-stone-400 flex-shrink-0 mt-0.5">→</span>
                  Print approval email &amp; present at the Togolese checkpoint with passport
                </li>
                <li className="flex gap-2">
                  <span className="text-stone-400 flex-shrink-0 mt-0.5">→</span>
                  Fill out the white arrival form at the border
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 bg-red-50 border-l-2 border-[#D21034] p-5 rounded-r">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="font-body text-sm text-stone-600 leading-relaxed">
            <strong>Warning:</strong> Do not pay unauthorized tips or &quot;dashes&quot; to random
            strangers or border handlers trying to bypass the queue — they will rip you off. Stick
            strictly to official immigration counters.
          </p>
        </div>
      </div>
    </section>
  )
}
