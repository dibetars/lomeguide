export type Passport = 'african' | 'non-african'
export type Crossing = 'bus' | 'sedan' | 'skip'
export type KpalimePlan = 'skip' | 'daytrip' | 'overnight'

export type DayPlan = {
  date: string
  kind: 'lome' | 'kpalime'
  daytime: string | null
  dinner: string | null
  night: string | null
}

export type TripDraft = {
  step: number
  checkin: string
  checkout: string
  adults: number
  passport: Passport | null
  crossing: Crossing | null
  gozemAck: boolean
  lomeStayId: string | null
  eats: string[]
  nightlife: string[]
  kpalime: KpalimePlan
  kpalimeStayId: string | null
  days: DayPlan[]
}

export type CostLine = {
  label: string
  low: number
  high: number
}

export type CostEstimate = {
  low: number
  high: number
  lines: CostLine[]
}
