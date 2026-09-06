'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { estimateTrip, formatGhs, formatXof } from './costs'
import { DAYTIME, EATS, KPALIME_STAYS, LOME_STAYS, NIGHTLIFE, STEPS } from './data'
import { addDays } from './dates'
import { canProceed, emptyDraft, loadDraft, saveDraft, syncDays } from './storage'
import {
  CrossingStep,
  DatesStep,
  DaysStep,
  GozemStep,
  KpalimeStep,
  MultiPick,
  PassportStep,
  ReviewStep,
  StayStep,
} from './TripPlannerSteps'
import type { TripDraft } from './types'

export default function TripPlannerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [draft, setDraft] = useState<TripDraft>(() => loadDraft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDraft(loadDraft())
  }, [])

  useEffect(() => {
    if (!open) return
    setDraft(current => {
      const next = loadDraft()
      return next.checkin ? next : current
    })
  }, [open])

  useEffect(() => {
    if (!mounted) return
    saveDraft(draft)
  }, [draft, mounted])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  function patch(partial: Partial<TripDraft>) {
    setDraft(d => {
      const next = { ...d, ...partial }
      if (
        partial.checkin !== undefined ||
        partial.checkout !== undefined ||
        partial.kpalime !== undefined
      ) {
        next.days = syncDays(next.checkin, next.checkout, next.kpalime, next.days)
      }
      return next
    })
  }

  const step = draft.step
  const meta = STEPS[step]
  const ready = canProceed(draft, step)
  const estimate = estimateTrip(draft)

  function next() {
    if (!ready) return
    setDraft(d => {
      const nextDraft = { ...d }
      if (d.step === 0 && d.checkin && (!d.checkout || d.checkout <= d.checkin)) {
        nextDraft.checkout = addDays(d.checkin, 2)
      }
      if (d.step === 0 || d.step === 7) {
        nextDraft.days = syncDays(nextDraft.checkin, nextDraft.checkout, nextDraft.kpalime, nextDraft.days)
      }
      nextDraft.step = Math.min(STEPS.length - 1, d.step + 1)
      return nextDraft
    })
  }

  function back() {
    setDraft(d => ({ ...d, step: Math.max(0, d.step - 1) }))
  }

  function startOver() {
    setDraft(emptyDraft())
  }

  function toggle(list: 'eats' | 'nightlife', id: string) {
    setDraft(d => ({
      ...d,
      [list]: d[list].includes(id) ? d[list].filter(x => x !== id) : [...d[list], id],
    }))
  }

  function nameOf(kind: 'stay' | 'eat' | 'night' | 'day', id: string | null) {
    if (!id) return 'Open'
    if (kind === 'stay') {
      return [...LOME_STAYS, ...KPALIME_STAYS].find(s => s.id === id)?.name ?? id
    }
    if (kind === 'eat') return EATS.find(e => e.id === id)?.name ?? id
    if (kind === 'night') return NIGHTLIFE.find(n => n.id === id)?.name ?? id
    return DAYTIME.find(d => d.id === id)?.name ?? id
  }

  if (!mounted || !open) return null

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="trip-planner-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full sm:max-w-2xl max-h-[100dvh] sm:max-h-[90vh] bg-[#EDE3CF] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pt-[env(safe-area-inset-top)]">
        <header className="flex-shrink-0 px-5 sm:px-8 pt-5 pb-4 border-b border-[#1A1508]/10">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-[#006A4E] mb-1">
                {meta.number} — {meta.label}
              </p>
              <h2 id="trip-planner-title" className="font-display font-extrabold uppercase text-[#1A1508] leading-tight" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)' }}>
                Build your trip
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-11 h-11 rounded-full bg-[#1A1508] text-[#EDE3CF] flex items-center justify-center text-lg font-bold hover:bg-[#006A4E] transition-colors flex-shrink-0"
              aria-label="Exit trip planner"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap -mx-1.5">
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => i <= step && setDraft(d => ({ ...d, step: i }))}
                  className="w-8 h-8 flex items-center justify-center"
                  aria-label={s.label}
                >
                  <span className={`block w-2 h-2 rounded-full ${i === step ? 'bg-[#D4483C]' : i < step ? 'bg-[#006A4E]' : 'bg-[#1A1508]/20'}`} />
                </button>
              ))}
            </div>
            <p className="font-body text-xs text-[#1A1508]/70 sm:whitespace-nowrap">
              {estimate.high > 0 ? (
                <>
                  Est. {formatGhs(estimate.low)}–{formatGhs(estimate.high)}
                  <span className="hidden sm:inline text-[#1A1508]/40"> · {formatXof(estimate.low)}–{formatXof(estimate.high)}</span>
                </>
              ) : (
                'Est. —'
              )}
            </p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6">
          {step === 0 && <DatesStep draft={draft} onChange={patch} />}
          {step === 1 && <PassportStep draft={draft} onChange={patch} />}
          {step === 2 && <CrossingStep draft={draft} onChange={patch} />}
          {step === 3 && <StayStep items={LOME_STAYS} selectedId={draft.lomeStayId} onSelect={id => patch({ lomeStayId: id })} />}
          {step === 4 && <GozemStep draft={draft} onChange={patch} />}
          {step === 5 && <MultiPick items={EATS} selected={draft.eats} onToggle={id => toggle('eats', id)} />}
          {step === 6 && <MultiPick items={NIGHTLIFE} selected={draft.nightlife} onToggle={id => toggle('nightlife', id)} />}
          {step === 7 && <KpalimeStep draft={draft} onChange={patch} />}
          {step === 8 && <DaysStep draft={draft} onDays={days => patch({ days })} />}
          {step === 9 && <ReviewStep draft={draft} nameOf={nameOf} />}
        </div>

        {step === 9 && estimate.lines.length > 0 && (
          <div className="flex-shrink-0 px-5 sm:px-8 pb-2">
            <div className="bg-white rounded-xl border border-stone-200 p-4">
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-400 mb-2">Indicative cost</p>
              <ul className="space-y-1 mb-3">
                {estimate.lines.map(line => (
                  <li key={line.label} className="flex justify-between gap-3 font-body text-xs text-stone-600">
                    <span>{line.label}</span>
                    <span className="whitespace-nowrap">
                      {line.low === line.high ? formatGhs(line.low) : `${formatGhs(line.low)}–${formatGhs(line.high)}`}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm font-semibold text-stone-800">
                {formatGhs(estimate.low)}–{formatGhs(estimate.high)}
                <span className="font-normal text-stone-400 text-xs ml-2">hotels fluctuate</span>
              </p>
            </div>
          </div>
        )}

        <footer className="flex-shrink-0 px-5 sm:px-8 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-[#1A1508]/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={step === 0 ? onClose : back}
              className="font-body text-sm font-medium text-[#1A1508]/60 hover:text-[#1A1508]"
            >
              {step === 0 ? 'Exit' : 'Back'}
            </button>
            <button
              type="button"
              onClick={startOver}
              className="font-body text-sm font-medium text-[#D4483C] hover:text-[#1A1508]"
            >
              Start over
            </button>
          </div>
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              disabled={!ready}
              className="inline-flex items-center gap-2 bg-[#1A1508] disabled:opacity-40 text-[#EDE3CF] pl-5 pr-1.5 py-1.5 rounded-full font-body text-sm font-medium hover:bg-[#006A4E] transition-colors"
            >
              Continue
              <span className="w-8 h-8 bg-[#D4483C] rounded-full flex items-center justify-center text-white font-bold">↗</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-[#1A1508] text-[#EDE3CF] pl-5 pr-1.5 py-1.5 rounded-full font-body text-sm font-medium hover:bg-[#006A4E] transition-colors"
            >
              Done
              <span className="w-8 h-8 bg-[#006A4E] rounded-full flex items-center justify-center text-white font-bold">✓</span>
            </button>
          )}
        </footer>
      </div>
    </div>,
    document.body,
  )
}
