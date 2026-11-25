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
  personCalcSteps,
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
  const calcSteps = personCalcSteps(person.id)
  const household =
    person.name === 'Dibe' || person.name === 'Clo' || person.name === 'Clara'
  const nopeSettledAgreement = person.name === 'Abraham' || person.name === 'Effiba'

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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
            {sends.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:col-span-2 xl:col-span-3">
                <p className="font-body text-sm text-white/55 leading-relaxed max-w-2xl">
                  {person.name === 'Clara'
                    ? 'Your Blue Turtle to Yaa cancels her NopeGali to you — nothing to send.'
                    : household
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
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
              <p className="font-body text-xs text-white/40 mt-4">
                Collect on {PAYEES.clara.display}. Yaa’s NopeGali cancels your Blue Turtle. Abraham + Effiba
                settled via border + snacks. Dibe & Clo’s lunch is already in your bill.
              </p>
            )}
            {person.id === 'yaa' && (
              <p className="font-body text-xs text-white/40 mt-4">
                Collect on {PAYEES.yaa.display} · {PAYEES.yaa.via}. Clara cancelled. Felix’s Blue Turtle is
                netted off your road send. Fiifi’s share can stay inside the couple.
              </p>
            )}
          </section>
        )}

        {person.id === 'felix' && (
          <section className="px-5 sm:px-8 md:px-16 pb-6">
            <p className="font-body text-xs text-white/40 max-w-2xl">
              Yaa + Fiifi’s road half is settled (Fiifi ₵500 MoMo + ₵100 misc snacks). Nothing left to
              collect from them — only send NopeGali to Clara above.
            </p>
          </section>
        )}

        {(person.id === 'abraham' || person.id === 'effiba') && (
          <section className="px-5 sm:px-8 md:px-16 pb-6">
            <p className="font-body text-xs text-white/40 max-w-2xl">
              NopeGali to Clara is settled via your border + snacks agreement — nothing to send her. Clo’s
              fuel to Abraham is paid (₵280). Only Blue Turtle to Yaa remains.
            </p>
          </section>
        )}

        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8 pb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/35 mb-2">Your breakdown</p>
          <h2 className="font-display font-extrabold uppercase text-white mb-8" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
            The calcs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-2">NopeGali</p>
              <p className="font-display font-bold text-white text-2xl">{formatGhs(toGhs(nopeCfa))}</p>
              <p className="font-body text-xs text-white/40 mt-2">
                {household
                  ? 'Covered by Clara’s bill'
                  : nopeSettledAgreement
                    ? 'Settled via border + snacks · no MoMo'
                    : `${nopeCfa.toLocaleString()} CFA ÷ ${RATE}`}
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
                    ? `You paid 49,000 CFA · ${BLUE_TURTLE.eachCfa.toLocaleString()} CFA ÷ ${RATE}`
                    : `49,000 ÷ 7 = ${BLUE_TURTLE.eachCfa.toLocaleString()} CFA ÷ ${RATE}`
                  : 'Not on this bill'}
              </p>
            </div>
          </div>

          {items.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full mb-8">
              {items.map((row, i) => (
                <div
                  key={`${row.items}-${i}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-body text-sm text-white/80">{row.items}</p>
                    <p className="font-body text-[10px] text-white/35 mt-0.5">
                      {row.cfa.toLocaleString()} CFA ÷ {RATE}
                    </p>
                  </div>
                  <p className="font-body text-sm text-white/70 whitespace-nowrap">{formatGhs(toGhs(row.cfa))}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
            {calcSteps.map((step, i) => (
              <div
                key={`${step.label}-${i}`}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
              >
                <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-1">{step.label}</p>
                <p className="font-body text-sm text-white/60 leading-relaxed">{step.formula}</p>
                <p className="font-display font-bold text-white text-lg mt-2">{step.result}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
