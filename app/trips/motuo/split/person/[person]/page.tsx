import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../../../../components/Nav'
import Footer from '../../../../../components/Footer'
import CopyMoMo from '../../CopyMoMo'
import {
  BLUE_TURTLE,
  NOPEGALI_ITEMS,
  PAYEES,
  PEOPLE,
  RATE,
  formatGhs,
  getPerson,
  personNopeCfa,
  personPayouts,
  personReceives,
  toGhs,
} from '../../data'

export function generateStaticParams() {
  return PEOPLE.map(p => ({ person: p.id }))
}

export function generateMetadata({ params }: { params: { person: string } }) {
  const person = getPerson(params.person)
  return {
    title: person ? `${person.name} — Motuo Split` : 'Motuo Split',
    description: person ? `What ${person.name} owes for the Motuo × Lomé trip.` : 'Motuo expense split',
  }
}

export default function PersonSplitPage({ params }: { params: { person: string } }) {
  const person = getPerson(params.person)
  if (!person) notFound()

  const sends = personPayouts(person.id).filter(p => !(p.from === 'Fiifi' && p.to === 'yaa'))
  const receives = personReceives(person.id).filter(r => !(person.id === 'yaa' && r.label === 'Fiifi'))
  const totalSend = sends.reduce((s, p) => s + p.ghs, 0)
  const totalRecv = receives.reduce((s, r) => s + r.ghs, 0)
  const items = NOPEGALI_ITEMS.filter(i => i.person === person.name)
  const onBlueTurtle = BLUE_TURTLE.drinkers.includes(person.name)
  const nopeCfa = personNopeCfa(person.name)
  const household =
    person.name === 'Dibe' || person.name === 'Clo' || person.name === 'Clara'

  return (
    <>
      <Nav />
      <main className="bg-[#1A1508] min-h-screen">
        <section className="relative px-5 sm:px-8 md:px-16 pt-28 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(212,72,60,0.14) 0%, transparent 55%)' }}
          />
          <div className="relative max-w-2xl">
            <Link
              href="/trips/motuo/split"
              className="font-body text-[10px] uppercase tracking-[0.35em] text-white/40 hover:text-[#FFCB00] transition-colors"
            >
              ← Everyone
            </Link>
            <h1
              className="font-hero italic font-black text-white leading-[0.9] mt-6 mb-3"
              style={{ fontSize: 'clamp(2.6rem, 9vw, 5rem)' }}
            >
              {person.name}
            </h1>
            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-1">You send</p>
                <p className="font-hero italic font-black text-[#FFCB00]" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
                  {formatGhs(totalSend)}
                </p>
              </div>
              {totalRecv > 0 && (
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-1">You receive</p>
                  <p className="font-hero italic font-black text-[#006A4E]" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
                    {formatGhs(totalRecv)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 md:px-16 pb-14">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#FFCB00] mb-5">Pay now</p>
          <div className="space-y-4 max-w-xl">
            {sends.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  {household
                    ? 'NopeGali was paid by Clara for the household. No outgoing transfer on this page.'
                    : 'Nothing to send.'}
                </p>
              </div>
            ) : (
              sends.map(p => {
                const payee = PAYEES[p.to]
                return (
                  <div key={`${p.to}-${p.note}`} className="rounded-2xl bg-[#FFCB00] text-[#1A1508] p-6">
                    <p className="font-body text-[10px] uppercase tracking-widest opacity-60 mb-2">{p.note}</p>
                    <p className="font-display font-extrabold uppercase text-3xl mb-1">{formatGhs(p.ghs)}</p>
                    <p className="font-body text-sm font-semibold mb-1">
                      to {payee.label}
                      {payee.via ? ` · ${payee.via}` : ''}
                      {payee.network ? ` · ${payee.network}` : ''}
                    </p>
                    <CopyMoMo number={payee.number} display={payee.display} tone="dark" />
                  </div>
                )
              })
            )}
          </div>
        </section>

        {receives.length > 0 && (
          <section className="px-5 sm:px-8 md:px-16 pb-14 border-t border-white/8 pt-14">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#006A4E] mb-5">Coming in</p>
            <div className="space-y-3 max-w-xl">
              {receives.map(r => (
                <div
                  key={`${r.label}-${r.note}`}
                  className="rounded-2xl border border-[#006A4E]/35 bg-[#006A4E]/15 px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-body text-sm text-white font-semibold">{r.label}</p>
                    <p className="font-body text-xs text-white/45">{r.note}</p>
                  </div>
                  <p className="font-display font-bold text-white text-xl">{formatGhs(r.ghs)}</p>
                </div>
              ))}
            </div>
            {person.id === 'clara' && (
              <p className="font-body text-xs text-white/40 mt-4 max-w-xl">
                Collect on {PAYEES.clara.display}. Dibe & Clo’s lunch shares are already covered in your payment.
              </p>
            )}
            {person.id === 'yaa' && (
              <p className="font-body text-xs text-white/40 mt-4 max-w-xl">
                Collect on {PAYEES.yaa.display} · {PAYEES.yaa.via}. Fiifi’s share can stay inside the couple.
              </p>
            )}
            {person.id === 'abraham' && (
              <p className="font-body text-xs text-white/40 mt-4 max-w-xl">
                Collect Clo’s fuel on {PAYEES.abraham.display}. Clara’s ₵130 fuel is already netted off your NopeGali send.
              </p>
            )}
          </section>
        )}

        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/35 mb-5">Your breakdown</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-2">NopeGali</p>
              <p className="font-display font-bold text-white text-2xl">{formatGhs(toGhs(nopeCfa))}</p>
              <p className="font-body text-xs text-white/40 mt-2">
                {household ? 'Covered by Clara’s bill' : `${nopeCfa.toLocaleString()} CFA`}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-2">Blue Turtle</p>
              <p className="font-display font-bold text-white text-2xl">
                {onBlueTurtle ? formatGhs(toGhs(BLUE_TURTLE.eachCfa)) : formatGhs(0)}
              </p>
              <p className="font-body text-xs text-white/40 mt-2">
                {onBlueTurtle
                  ? person.name === 'Yaa'
                    ? 'You paid the bill'
                    : 'Your share'
                  : 'Not on this bill'}
              </p>
            </div>
          </div>

          {items.length > 0 && (
            <div className="max-w-xl divide-y divide-white/8 rounded-2xl border border-white/10 overflow-hidden">
              {items.map((row, i) => (
                <div key={`${row.items}-${i}`} className="flex justify-between gap-4 px-5 py-3">
                  <p className="font-body text-sm text-white/80">{row.items}</p>
                  <p className="font-body text-sm text-white/70">{formatGhs(toGhs(row.cfa))}</p>
                </div>
              ))}
            </div>
          )}
          <p className="font-body text-[10px] text-white/30 mt-6">Rate {RATE} CFA = ₵1</p>
        </section>

        <section className="px-5 sm:px-8 md:px-16 pb-16">
          <p className="font-body text-[10px] uppercase tracking-widest text-white/30 mb-3">Others</p>
          <div className="flex flex-wrap gap-2">
            {PEOPLE.filter(p => p.id !== person.id).map(p => (
              <Link
                key={p.id}
                href={`/trips/motuo/split/person/${p.id}`}
                className="font-body text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/12 text-white/40 hover:border-[#FFCB00]/40 hover:text-[#FFCB00] transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
