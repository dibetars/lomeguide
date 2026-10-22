import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import BaguidaStays from '../../components/BaguidaStays'

export const metadata = {
  title: 'Motuo × Lomé — Your Trip Guide',
  description: 'A curated Lomé trip for the Motuo crew. 4 Ghanaians, driving in, Baguida base, beach and nightlife.',
}

export default function MoutoTrip() {
  return (
    <>
      <Nav />
      <main className="bg-[#1A1508] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative px-5 sm:px-8 md:px-16 pt-28 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(0,106,78,0.18) 0%, transparent 60%)' }}
          />
          <div className="relative">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#006A4E] mb-4">Private Trip</p>
            <h1
              className="font-hero italic font-black text-white leading-[0.88] mb-6"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
            >
              Motuo<br />
              <span style={{ color: '#FFCB00' }}>× Lomé</span>
            </h1>
            <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
              Four Ghanaians. First time in Lomé. Driving in through Aflao, base in Baguida, and the full run — beach, food, nightlife, maybe Kpalimé. Nov 20–23.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['4 Ghanaian Nationals', 'Nov 20–23', 'Driving In', 'Baguida Base', 'Beach + Nightlife', 'Kpalimé Option'].map(tag => (
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
              You're Visa-Free
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#006A4E] rounded-xl p-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#FFCB00] mb-3">Ghanaian Passport</p>
                <p className="font-display text-2xl font-light italic text-white mb-3">Free entry, up to 30 days</p>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  All African nationals enter Togo visa-free. No application needed — just your passport and the two items below.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: '🌐', title: 'voyage.gouv.tg', desc: 'Complete the mandatory online declaration before you travel. Print your slip — officials check it at the gate.' },
                  { icon: '💉', title: 'Yellow Fever Card', desc: 'Your physical yellow card (vaccination certificate) is non-negotiable at the Togolese checkpoint.' },
                  { icon: '🚫', title: 'No Photos at the Border', desc: "Don't take any photos or videos at the checkpoints. Keep your phone in your pocket." },
                ].map(item => (
                  <div key={item.title} className="bg-white/5 rounded-xl p-4 flex gap-4">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-white mb-1">{item.title}</p>
                      <p className="font-body text-xs text-white/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Getting There ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#FFCB00] mb-2">02 — Getting There</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              Accra → Aflao → Lomé
            </h2>
            <div className="bg-[#C4873A] rounded-xl p-6 sm:p-8 mb-4">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-3">Since You're Driving</p>
              <p className="font-display text-2xl font-light italic text-white mb-4">You have the best deal already</p>
              <p className="font-body text-sm text-white/80 leading-relaxed max-w-lg">
                Four of you in a car is the move. No waiting for a bus to fill, no shared sedan. Head straight down the N1 to Aflao. The drive from Accra is roughly 2.5–3 hours depending on traffic at Tema.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { step: '01', title: 'Ghana Checkpoint', desc: 'Queue at the Ghana Immigration building. Have your passports ready.' },
                { step: '02', title: 'No-Man\'s Land', desc: 'Short walk or drive between the two checkpoints. Keep bags close.' },
                { step: '03', title: 'Togo Checkpoint', desc: 'Present passport, printed voyage.gouv.tg slip, and yellow fever cards. You\'re in.' },
              ].map(s => (
                <div key={s.step} className="bg-white/5 rounded-xl p-5">
                  <p className="font-body text-[10px] uppercase tracking-widest text-[#C4873A] mb-2">{s.step}</p>
                  <p className="font-body text-sm font-semibold text-white mb-2">{s.title}</p>
                  <p className="font-body text-xs text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4 bg-[#D4483C]/15 border-l-4 border-[#D4483C] p-4 rounded-r-xl">
              <span className="text-lg flex-shrink-0">⚠️</span>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                <strong className="text-white">No dashes.</strong> If anyone approaches offering to carry bags or fast-track the process — firmly say no and walk to the official immigration building.
              </p>
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
            Baguida is east of Lomé city center, right on the beach strip. Quieter than the city, cheaper than the hotel zone, and perfect for a group. With 4 of you splitting the bill, you get a full house to yourselves.
          </p>
          <BaguidaStays checkIn="2026-11-20" checkOut="2026-11-23" nights={3} dateLabel="Nov 20–23" />
        </section>

        {/* ── The Plan ── */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#006A4E] mb-2">04 — The Plan</p>
            <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
              How to Run It
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  day: 'Nov 20',
                  label: 'Thursday',
                  title: 'Cross & Settle',
                  color: '#006A4E',
                  steps: [
                    'Drive Accra → Aflao, cross into Togo',
                    'Drive or Gozem to Baguida, check in',
                    'Evening: Nomads for dinner',
                    'Night: Oya Bar → MAD Complexe',
                  ],
                },
                {
                  day: 'Nov 21',
                  label: 'Friday',
                  title: 'Beach Day',
                  color: '#C4873A',
                  steps: [
                    'Marcelo Beach Club or Pure Plage',
                    'Lunch at La Sunset Beach Lounge',
                    'Afternoon swim and hang',
                    'Night: Hotel 2 Février Rooftop',
                  ],
                },
                {
                  day: 'Nov 22',
                  label: 'Saturday',
                  title: 'Kpalimé Run',
                  color: '#D4483C',
                  steps: [
                    'Leave early (~8am) — 2hrs inland',
                    'Hike Cascade de Kpimé',
                    'Explore the markets, local lunch',
                    'Back to Lomé for Le Galion live music',
                  ],
                },
                {
                  day: 'Nov 23',
                  label: 'Sunday · Departure',
                  title: 'Head Back',
                  color: '#FFCB00',
                  steps: [
                    'Late checkout if possible',
                    'Chef Komi for a last pastry run',
                    'Settle up — CFA → Cedis at Aflao',
                    'Drive home to Accra',
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
                    { name: 'Nomads', tag: 'Dinner / Brunch', desc: 'Strong vibes, great menu. First-night spot.' },
                    { name: 'Le Hangar', tag: 'Outdoor Bar', desc: 'Cool evening energy, outdoor setting.' },
                    { name: 'La Sunset Beach Lounge', tag: 'Beach Lunch', desc: 'Right by the water, easy afternoon.' },
                    { name: 'Chef Komi', tag: 'Pâtisserie', desc: 'Best pastries and ice cream in the city.' },
                    { name: 'Lomé Street Kitchen', tag: 'Street Food', desc: 'Elevated local flavors, affordable.' },
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
                    { name: 'MAD Complexe Lomé', tag: 'High Energy', desc: 'You know MAD. Same energy, Lomé edition.' },
                    { name: 'Oya Bar', tag: 'Start Here', desc: 'Pre-night cocktails, stylish crowd.' },
                    { name: 'Hotel 2 Février Rooftop', tag: 'Rooftop Views', desc: 'City panoramic. Take the picture.' },
                    { name: 'Le Galion', tag: 'Live Music', desc: 'Laid back, live sets, good crowd.' },
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
                { icon: '📋', item: 'voyage.gouv.tg', detail: 'All 4 of you complete it separately before you leave.' },
                { icon: '💉', item: 'Yellow fever cards', detail: 'Physical card, for every person in the car.' },
                { icon: '🚗', item: 'Car documents', detail: 'Your papers, insurance, and Ghana licence for the border.' },
                { icon: '📱', item: 'Gozem installed', detail: 'For nights out when you don\'t want to park the car.' },
                { icon: '💵', item: 'CFA at Aflao', detail: 'Change Cedis at the border, not Tudu.' },
                { icon: '🔌', item: 'Cashpower confirmed', detail: 'Ask the Airbnb host before you book.' },
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
