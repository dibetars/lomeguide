import { eachNight } from './dates'
import type { DayPlan, KpalimePlan, TripDraft } from './types'

const KEY = 'lome-stay-trip-v1'

export function emptyDraft(): TripDraft {
  return {
    step: 0,
    checkin: '',
    checkout: '',
    adults: 2,
    passport: null,
    crossing: null,
    gozemAck: false,
    lomeStayId: null,
    eats: [],
    nightlife: [],
    kpalime: 'skip',
    kpalimeStayId: null,
    days: [],
  }
}

export function loadDraft(): TripDraft {
  if (typeof window === 'undefined') return emptyDraft()
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyDraft()
    return { ...emptyDraft(), ...JSON.parse(raw) }
  } catch {
    return emptyDraft()
  }
}

export function saveDraft(draft: TripDraft) {
  if (typeof window === 'undefined') return
  localStorage.setItem(KEY, JSON.stringify(draft))
}

export function syncDays(
  checkin: string,
  checkout: string,
  kpalime: KpalimePlan,
  existing: DayPlan[],
): DayPlan[] {
  const dates = eachNight(checkin, checkout)
  if (dates.length === 0) return []

  const kpalimeDate =
    kpalime === 'skip'
      ? null
      : kpalime === 'daytrip'
        ? dates[Math.min(1, dates.length - 1)]
        : dates[dates.length - 1]

  return dates.map(date => {
    const prev = existing.find(d => d.date === date)
    const kind: DayPlan['kind'] = kpalimeDate === date ? 'kpalime' : 'lome'
    const next: DayPlan = {
      date,
      kind,
      daytime: prev?.daytime ?? (kind === 'kpalime' ? 'cascade' : null),
      dinner: prev?.dinner ?? null,
      night: prev?.night ?? null,
    }
    if (kind === 'kpalime' && !next.daytime) next.daytime = 'cascade'
    return next
  })
}

export function canProceed(draft: TripDraft, step: number) {
  switch (step) {
    case 0:
      return Boolean(draft.checkin && draft.checkout && draft.checkout > draft.checkin && draft.adults >= 1)
    case 1:
      return draft.passport !== null
    case 2:
      return draft.crossing !== null
    case 3:
      return draft.lomeStayId !== null
    case 4:
      return draft.gozemAck
    case 5:
      return draft.eats.length >= 1
    case 6:
      return true
    case 7:
      if (draft.kpalime === 'overnight') return draft.kpalimeStayId !== null
      return true
    case 8:
      return draft.days.length > 0
    default:
      return true
  }
}
