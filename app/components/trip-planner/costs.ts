import { EATS, KPALIME_STAYS, LOME_STAYS, NIGHTLIFE } from './data'
import { nightsBetween } from './dates'
import type { CostEstimate, CostLine, TripDraft } from './types'

export const GHS_TO_XOF = 47

const USD_TO_GHS = 610 / 47

const STAY_USD: Record<string, { low: number; high: number }> = {
  budget: { low: 10, high: 30 },
  mid: { low: 70, high: 140 },
  beach: { low: 100, high: 190 },
}

const MEAL_GHS = {
  street: { low: 40, high: 90 },
  casual: { low: 50, high: 120 },
  mid: { low: 120, high: 250 },
  fine: { low: 200, high: 400 },
}

const NIGHT_GHS = {
  bar: { low: 80, high: 180 },
  upscale: { low: 120, high: 300 },
  club: { low: 150, high: 400 },
}

function usdNight(tier: string, nights: number, adults: number) {
  const band = STAY_USD[tier] ?? STAY_USD.mid
  const rooms = Math.max(1, Math.ceil(adults / 2))
  return {
    low: Math.round(band.low * USD_TO_GHS * nights * rooms),
    high: Math.round(band.high * USD_TO_GHS * nights * rooms),
  }
}

export function formatGhs(n: number) {
  return `₵${Math.round(n).toLocaleString('en-GH')}`
}

export function formatXof(ghs: number) {
  return `${Math.round(ghs * GHS_TO_XOF).toLocaleString('fr-FR')} F`
}

export function estimateTrip(draft: TripDraft): CostEstimate {
  const lines: CostLine[] = []
  const adults = Math.max(1, draft.adults || 1)
  const totalNights = nightsBetween(draft.checkin, draft.checkout)
  const kpalimeNights = draft.kpalime === 'overnight' ? Math.min(1, totalNights) : 0
  const lomeNights = Math.max(0, totalNights - kpalimeNights)

  if (draft.crossing === 'bus') {
    lines.push({ label: 'Accra → Aflao (bus)', low: 80 * adults, high: 80 * adults })
  } else if (draft.crossing === 'sedan') {
    lines.push({ label: 'Accra → Aflao (sedan)', low: 200, high: 200 })
  }

  const lome = LOME_STAYS.find(s => s.id === draft.lomeStayId)
  if (lome && lomeNights > 0) {
    const stay = usdNight(lome.tier, lomeNights, adults)
    lines.push({ label: `${lome.name} × ${lomeNights}n`, ...stay })
  }

  if (draft.kpalime === 'daytrip' || draft.kpalime === 'overnight') {
    lines.push({ label: 'Lomé ↔ Kpalimé road', low: 250, high: 450 })
  }
  if (draft.kpalime === 'overnight' && draft.kpalimeStayId && kpalimeNights > 0) {
    const kStay = KPALIME_STAYS.find(s => s.id === draft.kpalimeStayId)
    if (kStay) {
      const stay = usdNight(kStay.tier, kpalimeNights, adults)
      lines.push({ label: `${kStay.name} × ${kpalimeNights}n`, ...stay })
    }
  }

  for (const id of draft.eats) {
    const eat = EATS.find(e => e.id === id)
    if (!eat) continue
    const band = MEAL_GHS[eat.band]
    lines.push({
      label: eat.name,
      low: band.low * adults,
      high: band.high * adults,
    })
  }

  for (const id of draft.nightlife) {
    const venue = NIGHTLIFE.find(n => n.id === id)
    if (!venue) continue
    const band = NIGHT_GHS[venue.band]
    lines.push({
      label: venue.name,
      low: band.low * adults,
      high: band.high * adults,
    })
  }

  const daysOnGround = totalNights > 0 ? totalNights + 1 : 0
  if (daysOnGround > 0) {
    lines.push({
      label: 'Gozem / local rides',
      low: 40 * adults * daysOnGround,
      high: 80 * adults * daysOnGround,
    })
  }

  if (draft.passport === 'non-african') {
    lines.push({
      label: 'E-visa (indicative)',
      low: Math.round(25000 / GHS_TO_XOF),
      high: Math.round(45000 / GHS_TO_XOF),
    })
  }

  const low = lines.reduce((s, l) => s + l.low, 0)
  const high = lines.reduce((s, l) => s + l.high, 0)
  return { low, high, lines }
}
