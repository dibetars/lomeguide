import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import BaguidaStays from '../../components/BaguidaStays'

export const metadata = {
  title: 'South L.A. × Lomé — Your Trip Guide',
  description: 'A curated Lomé trip for the South L.A. crew. 2 French nationals and 1 Ghanaian, Baguida base, beach and nightlife.',
}

export default function SouthLATrip() {
  return (
    <>
      <Nav />
      <main className="bg-[#1A1508] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative px-5 sm:px-8 md:px-16 pt-28 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 40%, rgba(212,72,60,0.15) 0%, transparent 60%)' }}
          />
          <div className="relative">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#D4483C] mb-4">Private Trip</p>
            <h1
              className="font-hero italic font-black text-white leading-[0.88] mb-6"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
            >
              South L.A.<br />
              <span style={{ color: '#FFCB00' }}>× Lomé</span>
            </h1>
            <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
              Two French nationals, one Ghanaian. First time in Lomé. Crossing through Aflao, Baguida base, beach days and real nightlife. Nov 21–23.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['2 French Nationals', '1 Ghanaian', 'Nov 21–23', 'Baguida Base', 'Beach + Nightlife', 'Car Hire for Kpalimé'].map(tag => (
                <span key={tag} className="font-body text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/15 text-white/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Visa & Entry ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#006A4E] mb-2">01 — Before You Go</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              Visas: Split Situation
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#006A4E] rounded-xl p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#FFCB00] mb-3">Ghanaian Passport</p>
                <p className="font-display text-2xl font-light italic text-white mb-3">Visa-free, 30 days</p>
                <p className="font-body text-sm text-white/75 leading-relaxed mb-4">
                  African nationals enter Togo visa-free. Just complete voyage.gouv.tg before you travel and bring your yellow card.
                </p>
                <ul className="space-y-2">
                  {['Complete voyage.gouv.tg', 'Print your travel slip', 'Physical yellow fever card'].map(r => (
                    <li key={r} className="flex gap-2 font-body text-xs text-white/65">
                      <span className="text-[#FFCB00] flex-shrink-0">→</span>{r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/8 rounded-xl p-6 border border-white/10">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#D4483C] mb-3">French Passport</p>
                <p className="font-display text-2xl font-light italic text-white mb-3">E-Visa required</p>
                <p className="font-body text-sm text-white/65 leading-relaxed mb-4">
                  French nationals cannot get a visa on arrival at the land border. Apply online before travelling — and do it early, at least a week out.
                </p>
                <ul className="space-y-2">
                  {[
                    'Apply at voyage.gouv.tg',
                    'Download and print the approval',
                    'Present at the Togo checkpoint',
                    'Fill in the white arrival form at the border',
                    'Physical yellow fever card required',
                  ].map(r => (
                    <li key={r} className="flex gap-2 font-body text-xs text-white/65">
                      <span className="text-[#D4483C] flex-shrink-0">→</span>{r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#D4483C]/15 border-l-4 border-[#D4483C] p-4 rounded-r-xl flex gap-4">
              <span className="text-lg flex-shrink-0">📅</span>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                <strong className="text-white">Trip is Nov 21.</strong> The two French nationals need to apply for their E-visas now — the earlier the better to avoid processing delays.
              </p>
            </div>
          </div>
        </section>

        {/* ── Currency note for French nationals ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#FFCB00] mb-2">01b — Currency</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-6" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              EUR → XOF
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#FFCB00] mb-3">Good news for the French crew</p>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  Togo uses the West African CFA franc (XOF), which is <strong className="text-white">pegged to the Euro at a fixed rate</strong> — 1 EUR = 655.96 XOF. No exchange rate risk. You can exchange at the border or any Lomé bureau de change.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-white/30 mb-3">Where to change</p>
                <ul className="space-y-2">
                  {[
                    { place: 'Aflao border', note: 'Most convenient. Ask 2–3 changers for rates first.' },
                    { place: 'Lomé forex bureaus', note: 'Structured, receipts available. Good for larger amounts.' },
                    { place: 'Avoid Accra / Tudu', note: 'Rates are worse before the border.' },
                  ].map(c => (
                    <li key={c.place} className="font-body text-xs text-white/65">
                      <span className="text-white font-semibold">{c.place}</span> — {c.note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Getting There ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#C4873A] mb-2">02 — Getting There</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              Accra → Aflao → Lomé
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#C4873A] rounded-xl p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-2">Budget</p>
                <p className="font-display font-extrabold text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>80</p>
                <p className="font-display font-bold text-white text-lg mb-3">GHS / person</p>
                <p className="font-body text-sm text-white/75">12-seater from Tudu. Cheap, waits to fill up. Fine for the group.</p>
              </div>
              <div className="bg-[#006A4E] rounded-xl p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-2">Comfort</p>
                <p className="font-display font-extrabold text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>200</p>
                <p className="font-display font-bold text-white text-lg mb-3">GHS / car</p>
                <p className="font-body text-sm text-white/75">4-seater sedan, faster and more direct. Split 3 ways it's easy.</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/30 mb-3">At the border</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { step: '01', title: 'Ghana Checkpoint', desc: 'Passports stamped. Standard queue.' },
                  { step: '02', title: 'No-Man\'s Land', desc: 'Short walk. Keep bags close, ignore helpers.' },
                  { step: '03', title: 'Togo Checkpoint', desc: 'French nationals: present printed E-visa. Ghanaian: voyage.gouv.tg slip + yellow card.' },
                ].map(s => (
                  <div key={s.step}>
                    <p className="font-body text-[10px] uppercase tracking-widest text-[#C4873A] mb-1">{s.step}</p>
                    <p className="font-body text-sm font-semibold text-white mb-1">{s.title}</p>
                    <p className="font-body text-xs text-white/50 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Where to Stay ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#D4483C] mb-2">03 — Where to Stay</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
            Airbnbs
          </h2>
          <p className="font-body text-white/60 text-sm leading-relaxed mb-8 max-w-xl">
            Baguida sits east of central Lomé, right on the coast. Quieter, more affordable, and great for a small group. Three of you can split a full house and have a proper base for the weekend.
          </p>
          <BaguidaStays checkIn="2026-11-21" checkOut="2026-11-23" nights={2} dateLabel="Nov 21–23" />
        </section>

        {/* ── The Plan ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#006A4E] mb-2">04 — The Plan</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              Nov 21–23
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  day: 'Nov 21',
                  label: 'Friday',
                  title: 'Arrive & Explore',
                  color: '#006A4E',
                  steps: [
                    'Cross Aflao — French nationals: E-visas ready',
                    'Gozem or taxi to Baguida Airbnb',
                    'Settle in, freshen up',
                    'Dinner: Nomads',
                    'Night: Oya Bar → MAD Complexe',
                  ],
                },
                {
                  day: 'Nov 22',
                  label: 'Saturday',
                  title: 'Beach Day',
                  color: '#C4873A',
                  steps: [
                    'Chef Komi pastries for breakfast',
                    'Marcelo Beach Club or Pure Plage',
                    'La Sunset Beach Lounge for lunch',
                    'Evening: Le Hangar open-air dinner',
                    'Night: Hotel 2 Février Rooftop',
                  ],
                },
                {
                  day: 'Nov 23',
                  label: 'Sunday · Departure',
                  title: 'Lite & Head Back',
                  color: '#FFCB00',
                  steps: [
                    'Late checkout if possible',
                    'Le Patio for a slow brunch',
                    'Final walk on the beach',
                    'Settle up — CFA → EUR or Cedis at Aflao',
                    'Bus or sedan back to Accra',
                  ],
                },
              ].map(d => (
                <div key={d.day} className="rounded-xl p-5" style={{ backgroundColor: `${d.color}12`, borderTop: `3px solid ${d.color}` }}>
                  <p className="font-body text-[10px] uppercase tracking-widest mb-0.5" style={{ color: d.color }}>{d.day}</p>
                  <p className="font-body text-[9px] uppercase tracking-widest text-white/30 mb-3">{d.label}</p>
                  <h3 className="font-body text-sm font-semibold text-white mb-4">{d.title}</h3>
                  <ol className="space-y-2.5">
                    {d.steps.map((step, i) => (
                      <li key={i} className="flex gap-2.5 font-body text-xs text-white/60">
                        <span className="font-display font-bold flex-shrink-0" style={{ color: `${d.color}90` }}>{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kpalimé car note ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#FFCB00] mb-2">04b — Kpalimé</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-6" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              Booking the Car
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🚗', title: 'Gozem Car', desc: 'Book a Gozem car from the app for a full-day hire. Tell the driver Kpalimé. Agree on a price upfront — expect 800–1,500 XOF range.' },
                { icon: '🤝', title: 'Private Driver', desc: 'Ask your Airbnb host to recommend a trusted driver. Better for a day trip — they know the road and can wait at the cascade.' },
                { icon: '⏰', title: 'Leave Early', desc: 'Go by 8am to get the best of Kpalimé. The drive is about 2 hours. Gives you a full day there and back by evening.' },
              ].map(c => (
                <div key={c.title} className="bg-white/5 rounded-xl p-5">
                  <span className="text-2xl block mb-3">{c.icon}</span>
                  <p className="font-body text-sm font-semibold text-white mb-2">{c.title}</p>
                  <p className="font-body text-xs text-white/55 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Food & Nightlife ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#FFCB00] mb-2">05 — Eat & Go Out</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              The Shortlist
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/30 mb-4">Food</p>
                <div className="space-y-3">
                  {[
                    { name: 'Nomads', tag: 'Dinner / Brunch', desc: 'First-night pick. Solid all-round menu, great energy.' },
                    { name: 'Le Patio', tag: 'Fine Dining', desc: 'For a nicer sit-down. European-African fusion.' },
                    { name: 'La Sunset Beach Lounge', tag: 'Beach Lunch', desc: 'Easy beachside afternoon.' },
                    { name: 'Chef Komi', tag: 'Pâtisserie', desc: 'Best pastries in the city. Morning stop.' },
                    { name: 'Le Hangar', tag: 'Outdoor Bar', desc: 'Evening drinks and dinner, open-air.' },
                  ].map(r => (
                    <div key={r.name} className="flex gap-4 bg-white/5 rounded-xl p-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-body text-sm font-semibold text-white">{r.name}</p>
                          <span className="font-body text-[9px] uppercase tracking-widest text-white/30">{r.tag}</span>
                        </div>
                        <p className="font-body text-xs text-white/50 leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/30 mb-4">Nightlife</p>
                <div className="space-y-3">
                  {[
                    { name: 'MAD Complexe Lomé', tag: 'High Energy', desc: 'The main event. Goes late, goes hard.' },
                    { name: 'Oya Bar', tag: 'Start Here', desc: 'Cocktails before the night kicks off.' },
                    { name: 'Hotel 2 Février Rooftop', tag: 'Rooftop Views', desc: 'Best city view in Lomé. Worth going up.' },
                    { name: 'Le Galion', tag: 'Live Music', desc: 'Relaxed, live sets, mixed crowd.' },
                  ].map(v => (
                    <div key={v.name} className="flex gap-4 bg-white/5 rounded-xl p-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-body text-sm font-semibold text-white">{v.name}</p>
                          <span className="font-body text-[9px] uppercase tracking-widest text-white/30">{v.tag}</span>
                        </div>
                        <p className="font-body text-xs text-white/50 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Don't Forget ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#D4483C] mb-2">06 — Checklist</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              Don't Leave Without
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: '🇫🇷', item: 'E-visa (×2)', detail: 'Both French nationals apply at voyage.gouv.tg before Nov 20. Print the approvals.' },
                { icon: '📋', item: 'voyage.gouv.tg (×1)', detail: 'The Ghanaian national completes the online declaration too.' },
                { icon: '💉', item: 'Yellow fever cards', detail: 'All three need the physical card. No exceptions at the border.' },
                { icon: '📱', item: 'Gozem installed', detail: 'Set up on everyone\'s phone using Ghanaian or Togolese numbers.' },
                { icon: '💶', item: 'EUR → XOF at Aflao', detail: 'Fixed rate — no rush. Change what you need at the border changers.' },
                { icon: '🔌', item: 'Cashpower confirmed', detail: 'Ask the Airbnb host before you book.' },
                { icon: '🚗', item: 'Car for Kpalimé', detail: 'If going, book the night before via Gozem or your host\'s driver.' },
              ].map(c => (
                <div key={c.item} className="flex gap-4 bg-white/5 rounded-xl p-4">
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-body text-sm font-semibold text-white mb-1">{c.item}</p>
                    <p className="font-body text-xs text-white/50 leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
