import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../../../components/Nav'
import Footer from '../../../../components/Footer'
import CopyMoMo from '../CopyMoMo'
import {
  BLUE_TURTLE,
  COUPLES,
  NOPEGALI_ITEMS,
  PAYEES,
  RATE,
  formatGhs,
  getCouple,
  payoutsForCouple,
  coupleNopeCfa,
  toGhs,
  type CoupleId,
} from '../data'

export function generateStaticParams() {
  return COUPLES.map(c => ({ couple: c.id }))
}

export function generateMetadata({ params }: { params: { couple: string } }) {
  const couple = getCouple(params.couple)
  return {
    title: couple ? `${couple.name} — Motuo Split` : 'Motuo Split',
    description: couple ? `What ${couple.name} owes for the Motuo × Lomé trip.` : 'Motuo expense split',
  }
}

export default function CoupleSplitPage({ params }: { params: { couple: string } }) {
  const couple = getCouple(params.couple)
  if (!couple) notFound()

  const id = couple.id as CoupleId
  const sends = payoutsForCouple(id).filter(p => !(p.from === 'Fiifi' && p.to === 'yaa'))
  const receives: { label: string; ghs: number; note: string }[] = []

  if (id === 'abraham-effiba') {
    receives.push({ label: 'From Clo', ghs: 200, note: 'Fuel → Abraham' })
  }
  if (id === 'yaa-fiifi') {
    receives.push(
      { label: 'Felix + Flora', ghs: Math.round(toGhs(BLUE_TURTLE.eachCfa) * 2 * 100) / 100, note: 'Blue Turtle' },
      { label: 'Abraham + Effiba', ghs: Math.round(toGhs(BLUE_TURTLE.eachCfa) * 2 * 100) / 100, note: 'Blue Turtle' },
      { label: 'Clara', ghs: toGhs(BLUE_TURTLE.eachCfa), note: 'Blue Turtle' },
    )
  }
  if (id === 'dibe-clo-clara') {
    receives.push(
      { label: 'Yaa + Fiifi', ghs: toGhs(18_500), note: 'NopeGali → Clara' },
      { label: 'Felix + Flora', ghs: toGhs(18_500), note: 'NopeGali → Clara' },
      { label: 'Abraham + Effiba', ghs: Math.round((toGhs(16_500) - 130) * 100) / 100, note: 'NopeGali − fuel net' },
    )
  }

  const totalSend = sends.reduce((s, p) => s + p.ghs, 0)
  const totalRecv = receives.reduce((s, r) => s + r.ghs, 0)
  const nopeCfa = coupleNopeCfa(couple)
  const memberItems = NOPEGALI_ITEMS.filter(i => couple.members.includes(i.person))
  const btMembers = couple.members.filter(m => BLUE_TURTLE.drinkers.includes(m))

  return (
    <>
      <Nav />
      <main className="bg-[#1A1508] min-h-screen">
        <section className="relative px-5 sm:px-8 md:px-16 pt-28 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 10% 40%, rgba(0,106,78,0.2) 0%, transparent 55%)' }}
          />
          <div className="relative max-w-2xl">
            <Link
              href="/trips/motuo/split"
              className="font-body text-[10px] uppercase tracking-[0.35em] text-white/40 hover:text-[#FFCB00] transition-colors"
            >
              ← The split
            </Link>
            <h1
              className="font-hero italic font-black text-white leading-[0.9] mt-6 mb-4"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 4.5rem)' }}
            >
              {couple.name}
            </h1>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-8">{couple.blurb}</p>
            <div className="flex flex-wrap gap-6">
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

        {/* What to send */}
        <section className="px-5 sm:px-8 md:px-16 pb-14">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#FFCB00] mb-5">Pay now</p>
          <div className="space-y-4 max-w-xl">
            {sends.length === 0 ? (
              <p className="font-body text-sm text-white/45">Nothing to send from this couple on the shared list.</p>
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

        {/* Receives */}
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
            {id === 'dibe-clo-clara' && (
              <p className="font-body text-xs text-white/40 mt-4 max-w-xl">
                Collect NopeGali on {PAYEES.clara.display}. Clo still sends fuel to Abraham separately above.
              </p>
            )}
            {id === 'yaa-fiifi' && (
              <p className="font-body text-xs text-white/40 mt-4 max-w-xl">
                Fiifi’s own Blue Turtle share ({formatGhs(toGhs(BLUE_TURTLE.eachCfa))}) stays inside the couple.
              </p>
            )}
          </section>
        )}

        {/* Breakdown */}
        <section className="px-5 sm:px-8 md:px-16 py-14 border-t border-white/8">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/35 mb-5">Breakdown</p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-2">NopeGali share</p>
              <p className="font-display font-bold text-white text-2xl">{formatGhs(toGhs(nopeCfa))}</p>
              <p className="font-body text-xs text-white/40 mt-2">
                {id === 'abraham-effiba' ? 'Includes 5th bière · fuel ₵130 netted on payout' : `${nopeCfa.toLocaleString()} CFA`}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mb-2">Blue Turtle</p>
              <p className="font-display font-bold text-white text-2xl">
                {btMembers.length
                  ? formatGhs(Math.round(toGhs(BLUE_TURTLE.eachCfa) * btMembers.length * 100) / 100)
                  : formatGhs(0)}
              </p>
              <p className="font-body text-xs text-white/40 mt-2">
                {btMembers.length ? btMembers.join(' · ') : 'Not on this bill'}
              </p>
            </div>
          </div>

          <div className="max-w-xl divide-y divide-white/8 rounded-2xl border border-white/10 overflow-hidden">
            {memberItems.map((row, i) => (
              <div key={`${row.person}-${i}`} className="flex justify-between gap-4 px-5 py-3">
                <div>
                  <p className="font-body text-sm text-white">{row.person}</p>
                  <p className="font-body text-xs text-white/40">{row.items}</p>
                </div>
                <p className="font-body text-sm text-white/70">{formatGhs(toGhs(row.cfa))}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-[10px] text-white/30 mt-6">Rate {RATE} CFA = ₵1</p>
        </section>

        <section className="px-5 sm:px-8 md:px-16 pb-16">
          <div className="flex flex-wrap gap-3">
            {COUPLES.filter(c => c.id !== id).map(c => (
              <Link
                key={c.id}
                href={`/trips/motuo/split/${c.id}`}
                className="font-body text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/15 text-white/45 hover:border-[#FFCB00]/50 hover:text-[#FFCB00] transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
