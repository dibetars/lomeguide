export function todayISO() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function toISODate(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDays(iso: string, days: number) {
  const d = new Date(`${iso}T00:00:00`)
  d.setDate(d.getDate() + days)
  return toISODate(d)
}

export function nightsBetween(checkin: string, checkout: string) {
  if (!checkin || !checkout) return 0
  const ms = new Date(`${checkout}T00:00:00`).getTime() - new Date(`${checkin}T00:00:00`).getTime()
  return Math.max(0, Math.round(ms / 86_400_000))
}

export function eachNight(checkin: string, checkout: string) {
  const nights = nightsBetween(checkin, checkout)
  return Array.from({ length: nights }, (_, i) => addDays(checkin, i))
}

export function formatDay(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
}
