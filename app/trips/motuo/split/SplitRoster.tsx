'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  COUPLES,
  PAYEES,
  PEOPLE,
  formatGhs,
  payoutsForCouple,
  personPayouts,
  type CoupleId,
  type PersonId,
} from './data'

type Mode = 'people' | 'couples'

export default function SplitRoster() {
  const [mode, setMode] = useState<Mode>('people')

  return (
    <section className="px-5 sm:px-8 md:px-16 pb-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 w-full">
        <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/35">
          {mode === 'people' ? 'Everyone' : 'By couple'}
        </p>
        <div
          role="tablist"
          aria-label="Split view"
          className="inline-flex self-start rounded-full border border-white/15 bg-white/[0.04] p-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'people'}
            onClick={() => setMode('people')}
            className={`font-body text-xs font-semibold px-4 py-2 rounded-full transition-colors ${
              mode === 'people'
                ? 'bg-[#FFCB00] text-[#1A1508]'
                : 'text-white/55 hover:text-white'
            }`}
          >
            People
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'couples'}
            onClick={() => setMode('couples')}
            className={`font-body text-xs font-semibold px-4 py-2 rounded-full transition-colors ${
              mode === 'couples'
                ? 'bg-[#FFCB00] text-[#1A1508]'
                : 'text-white/55 hover:text-white'
            }`}
          >
            Couples
          </button>
        </div>
      </div>

      {mode === 'people' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {PEOPLE.map(p => {
            const sends = personPayouts(p.id as PersonId).filter(
              x => !(x.from === 'Fiifi' && x.to === 'yaa'),
            )
            const totalOut = sends.reduce((s, x) => s + x.ghs, 0)
            return (
              <Link
                key={p.id}
                href={`/trips/motuo/split/person/${p.id}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 hover:border-[#FFCB00]/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <p className="font-display font-bold text-white text-lg group-hover:text-[#FFCB00] transition-colors">
                    {p.name}
                  </p>
                  <span className="text-white/25 group-hover:text-[#FFCB00]">→</span>
                </div>
                <p className="font-hero italic font-black text-white text-3xl">{formatGhs(totalOut)}</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mt-1 mb-4">to send</p>
                {sends.length === 0 ? (
                  <p className="font-body text-xs text-white/40">Nothing to send</p>
                ) : (
                  <ul className="space-y-1.5">
                    {sends.map(s => (
                      <li key={`${s.to}-${s.note}`} className="flex items-baseline justify-between gap-2">
                        <span className="font-body text-xs text-white/55">
                          → <span className="text-[#FFCB00]">{PAYEES[s.to].label}</span>
                        </span>
                        <span className="font-body text-xs text-white/80">{formatGhs(s.ghs)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {COUPLES.map(c => {
            const sends = payoutsForCouple(c.id as CoupleId).filter(
              x => !(x.from === 'Fiifi' && x.to === 'yaa'),
            )
            const totalOut = sends.reduce((s, x) => s + x.ghs, 0)
            return (
              <Link
                key={c.id}
                href={`/trips/motuo/split/${c.id}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 hover:border-[#FFCB00]/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-display font-bold text-white text-lg group-hover:text-[#FFCB00] transition-colors">
                      {c.name}
                    </p>
                    <p className="font-body text-xs text-white/40 mt-1">{c.members.join(' · ')}</p>
                  </div>
                  <span className="text-white/25 group-hover:text-[#FFCB00]">→</span>
                </div>
                <p className="font-hero italic font-black text-white text-3xl mt-3">{formatGhs(totalOut)}</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/35 mt-1 mb-4">to send</p>
                {sends.length === 0 ? (
                  <p className="font-body text-xs text-white/40">Nothing to send</p>
                ) : (
                  <ul className="space-y-1.5">
                    {sends.map(s => (
                      <li key={`${s.to}-${s.note}`} className="flex items-baseline justify-between gap-2">
                        <span className="font-body text-xs text-white/55">
                          → <span className="text-[#FFCB00]">{PAYEES[s.to].label}</span>
                        </span>
                        <span className="font-body text-xs text-white/80">{formatGhs(s.ghs)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}
