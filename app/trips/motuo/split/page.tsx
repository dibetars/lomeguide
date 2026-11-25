import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CopyMoMo from './CopyMoMo'
import SplitRoster from './SplitRoster'
import {
  BLUE_TURTLE,
  FELIX_ROAD,
  NOPEGALI_ITEMS,
  PAYEES,
  PEOPLE,
  RATE,
  blueTurtleGhs,
  formatGhs,
  personPayouts,
  toGhs,
  yaaToFelixNettedGhs,
} from './data'

export const metadata = {
  title: 'Motuo Split — Who Owes What',
  description: 'Expense split for the Motuo × Lomé trip: Blue Turtle, NopeGali, and fuel.',
}

function individualPayouts() {
  return PEOPLE.flatMap(p =>
    personPayouts(p.id).filter(x => !(x.from === 'Fiifi' && x.to === 'yaa')),
  )
}

export default function MotuoSplitPage() {
  const payouts = individualPayouts()
  const btEach = toGhs(BLUE_TURTLE.eachCfa)

  return (
    <>
      <Nav />
      <main className="bg-[#1A1508] min-h-screen">
        <section className="relative px-5 sm:px-8 md:px-16 pt-28 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(212,72,60,0.16) 0%, transparent 55%)' }}
          />
          <div className="relative max-w-3xl">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#D4483C] mb-4">Motuo × Lomé</p>
            <h1
              className="font-hero italic font-black text-white leading-[0.9] mb-4"
              style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)' }}
            >
              The split
            </h1>
            <p className="font-body text-white/55 text-base leading-relaxed max-w-xl">
              Blue Turtle, NopeGali, fuel, and road — converted at {RATE} CFA = ₵1. Tap your name to pay.
            </p>
          </div>
        </section>

        <SplitRoster />

        {/* Payout summary */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#FFCB00] mb-2">Send list</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            Payouts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
            {payouts.map(p => {
              const payee = PAYEES[p.to]
              return (
                <div
                  key={`${p.from}-${p.to}-${p.note}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 flex flex-col justify-between gap-3"
                >
                  <div>
                    <p className="font-body text-sm text-white">
                      <span className="font-semibold">{p.from}</span>
                      <span className="text-white/35 mx-2">→</span>
                      <span className="text-[#FFCB00]">{payee.label}</span>
                    </p>
                    <p className="font-body text-xs text-white/40 mt-1">{p.note}</p>
                    {payee.via && (
                      <p className="font-body text-xs text-white/35 mt-0.5">
                        {payee.via} · {payee.network}
                      </p>
                    )}
                    <CopyMoMo number={payee.number} display={payee.display} />
                  </div>
                  <p className="font-display font-bold text-white text-2xl">{formatGhs(p.ghs)}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Blue Turtle */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#006A4E] mb-2">Receipt 01</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            Blue Turtle
          </h2>
          <p className="font-body text-sm text-white/45 mb-8">
            49,000 CFA paid by Yaa · split 7 ways · Dibe & Clo excluded · {formatGhs(btEach)} each
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 w-full">
            {BLUE_TURTLE.drinkers.map(name => (
              <div key={name} className="rounded-xl bg-[#006A4E]/25 border border-[#006A4E]/40 px-4 py-3">
                <p className="font-body text-xs text-white/60 mb-1">{name}</p>
                <p className="font-display font-bold text-white">{formatGhs(btEach)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NopeGali */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#D4483C] mb-2">Receipt 02</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            NopeGali
          </h2>
          <p className="font-body text-sm text-white/45 mb-8">
            73,500 CFA paid by Clara · itemized by person
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
            {NOPEGALI_ITEMS.map((row, i) => (
              <div
                key={`${row.person}-${row.items}-${i}`}
                className="rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 px-5 py-4"
              >
                <div>
                  <p className="font-body text-sm text-white">{row.person}</p>
                  <p className="font-body text-xs text-white/40">{row.items}</p>
                </div>
                <p className="font-body text-sm text-white/70 whitespace-nowrap">{formatGhs(toGhs(row.cfa))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Road — Felix */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/35 mb-2">Road</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            Felix paid
          </h2>
          <p className="font-body text-sm text-white/45 mb-8">
            Fuel ₵{FELIX_ROAD.fuelGhs} + border ₵{FELIX_ROAD.borderGhs} = ₵{FELIX_ROAD.totalGhs.toLocaleString()} · Fiifi & Yaa cover half
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-body text-xs text-white/45 mb-2">Fiifi → Felix</p>
              <p className="font-hero italic font-black text-white text-4xl">{formatGhs(FELIX_ROAD.eachGhs)}</p>
              <p className="font-body text-xs text-white/40 mt-3">{PAYEES.felix.display}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-body text-xs text-white/45 mb-2">Yaa → Felix (netted)</p>
              <p className="font-hero italic font-black text-white text-4xl">{formatGhs(yaaToFelixNettedGhs())}</p>
              <p className="font-body text-xs text-[#FFCB00] mt-3">
                ₵{FELIX_ROAD.eachGhs} road − ₵{blueTurtleGhs().toFixed(2)} Felix Blue Turtle
              </p>
            </div>
          </div>
        </section>

        {/* Fuel — Abraham */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/35 mb-2">Fuel</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            To Abraham
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-body text-xs text-white/45 mb-2">Clo → Abraham</p>
              <p className="font-hero italic font-black text-white/35 text-4xl line-through">{formatGhs(200)}</p>
              <p className="font-body text-xs text-[#FFCB00] mt-3">Paid ₵280 · settled</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-body text-xs text-white/45 mb-2">Clara → Abraham</p>
              <p className="font-hero italic font-black text-white/35 text-4xl line-through">{formatGhs(130)}</p>
              <p className="font-body text-xs text-[#FFCB00] mt-3">Settled with NopeGali via border + snacks</p>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 md:px-16 py-10 border-t border-white/8">
          <p className="font-body text-xs text-white/30">
            Rate {RATE} CFA / GHS · Nets applied: Yaa↔Clara cancel · Felix Blue Turtle nets into Yaa→Felix road ·
            Fiifi→Yaa Blue Turtle same-couple omitted · Abraham + Effiba NopeGali settled via border + snacks.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
