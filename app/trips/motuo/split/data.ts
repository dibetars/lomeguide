export const RATE = 51 // CFA per 1 GHS

export function toGhs(cfa: number): number {
  return Math.round((cfa / RATE) * 100) / 100
}

export function formatGhs(n: number): string {
  return `₵${n.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export type Person =
  | 'Abraham'
  | 'Effiba'
  | 'Felix'
  | 'Flora'
  | 'Fiifi'
  | 'Yaa'
  | 'Clo'
  | 'Clara'
  | 'Dibe'

export type CoupleId = 'yaa-fiifi' | 'felix-flora' | 'abraham-effiba' | 'dibe-clo-clara'

export type PersonId =
  | 'abraham'
  | 'effiba'
  | 'felix'
  | 'flora'
  | 'fiifi'
  | 'yaa'
  | 'clo'
  | 'clara'
  | 'dibe'

export const PAYEES = {
  clara: {
    label: 'Clara',
    via: 'Dibe Fabrice Laba',
    network: 'MTN',
    number: '0240542879',
    display: '024 054 2879',
  },
  abraham: {
    label: 'Abraham',
    via: 'Abraham Tometey',
    network: 'MTN',
    number: '0557137383',
    display: '055 713 7383',
  },
  yaa: {
    label: 'Yaa',
    via: 'Lusa Gyamfua Harris',
    network: 'MTN',
    number: '0559040724',
    display: '055 904 0724',
  },
} as const

/** Base NopeGali food/drink shares in CFA (5th beer tracked separately on Abraham) */
export const NOPEGALI_SHARES_CFA: Record<Person, number> = {
  Fiifi: 11_500,
  Clara: 9_000,
  Effiba: 6_500,
  Felix: 10_500,
  Abraham: 8_000,
  Dibe: 6_000,
  Clo: 5_000,
  Yaa: 7_000,
  Flora: 8_000,
}

/** Abraham + Effiba couple beer assigned to Abraham's line for individual pages */
export const ABRAHAM_COUPLE_BEER_CFA = 2_000

export const NOPEGALI_ITEMS: { person: Person; items: string; cfa: number }[] = [
  { person: 'Fiifi', items: 'Jus + Poisson Braisé', cfa: 11_500 },
  { person: 'Yaa', items: 'Soupe de Légume + 1 Bière', cfa: 7_000 },
  { person: 'Felix', items: 'Special Gombo + 2 Bières', cfa: 10_500 },
  { person: 'Flora', items: 'Poulet Braisé + 2 Eaux', cfa: 8_000 },
  { person: 'Abraham', items: 'Poisson Braisé', cfa: 8_000 },
  { person: 'Effiba', items: 'Special Gombo', cfa: 6_500 },
  { person: 'Abraham', items: '1 Bière (couple)', cfa: 2_000 },
  { person: 'Clara', items: 'Poulet Yassa + 1 Bière', cfa: 9_000 },
  { person: 'Dibe', items: 'Poulet Braisé', cfa: 6_000 },
  { person: 'Clo', items: 'Sauce Gombo', cfa: 5_000 },
]

export const BLUE_TURTLE = {
  totalCfa: 49_000,
  paidBy: 'Yaa' as Person,
  excluded: ['Dibe', 'Clo'] as Person[],
  drinkers: ['Abraham', 'Effiba', 'Felix', 'Flora', 'Fiifi', 'Yaa', 'Clara'] as Person[],
  eachCfa: 7_000,
}

export const FUEL_GHS: { from: Person; to: Person; ghs: number; netted?: boolean }[] = [
  { from: 'Clo', to: 'Abraham', ghs: 200 },
  { from: 'Clara', to: 'Abraham', ghs: 130, netted: true },
]

export type Couple = {
  id: CoupleId
  name: string
  members: Person[]
  blurb: string
}

export const COUPLES: Couple[] = [
  {
    id: 'yaa-fiifi',
    name: 'Yaa + Fiifi',
    members: ['Yaa', 'Fiifi'],
    blurb: 'Yaa paid Blue Turtle. Together on NopeGali.',
  },
  {
    id: 'felix-flora',
    name: 'Felix + Flora',
    members: ['Felix', 'Flora'],
    blurb: 'Blue Turtle drinkers + NopeGali lunch.',
  },
  {
    id: 'abraham-effiba',
    name: 'Abraham + Effiba',
    members: ['Abraham', 'Effiba'],
    blurb: 'NopeGali netted with Clara’s fuel. Abraham collects Clo’s fuel.',
  },
  {
    id: 'dibe-clo-clara',
    name: 'Dibe + Clo + Clara',
    members: ['Dibe', 'Clo', 'Clara'],
    blurb: 'Clara paid NopeGali. Clo still owes Abraham fuel.',
  },
]

export type PersonProfile = {
  id: PersonId
  name: Person
  coupleId: CoupleId
}

export const PEOPLE: PersonProfile[] = [
  { id: 'abraham', name: 'Abraham', coupleId: 'abraham-effiba' },
  { id: 'effiba', name: 'Effiba', coupleId: 'abraham-effiba' },
  { id: 'felix', name: 'Felix', coupleId: 'felix-flora' },
  { id: 'flora', name: 'Flora', coupleId: 'felix-flora' },
  { id: 'fiifi', name: 'Fiifi', coupleId: 'yaa-fiifi' },
  { id: 'yaa', name: 'Yaa', coupleId: 'yaa-fiifi' },
  { id: 'clo', name: 'Clo', coupleId: 'dibe-clo-clara' },
  { id: 'clara', name: 'Clara', coupleId: 'dibe-clo-clara' },
  { id: 'dibe', name: 'Dibe', coupleId: 'dibe-clo-clara' },
]

export function coupleNopeCfa(couple: Couple): number {
  if (couple.id === 'abraham-effiba') return 16_500
  return couple.members.reduce((s, m) => s + NOPEGALI_SHARES_CFA[m], 0)
}

export function personNopeCfa(person: Person): number {
  const base = NOPEGALI_SHARES_CFA[person]
  if (person === 'Abraham') return base + ABRAHAM_COUPLE_BEER_CFA
  return base
}

export type Payout = {
  from: string
  to: keyof typeof PAYEES
  ghs: number
  note: string
  coupleId?: CoupleId
  personId?: PersonId
}

export function allPayouts(): Payout[] {
  const bt = toGhs(BLUE_TURTLE.eachCfa)
  return [
    {
      from: 'Yaa + Fiifi',
      to: 'clara',
      ghs: toGhs(18_500),
      note: 'NopeGali lunch',
      coupleId: 'yaa-fiifi',
    },
    {
      from: 'Felix + Flora',
      to: 'clara',
      ghs: toGhs(18_500),
      note: 'NopeGali lunch',
      coupleId: 'felix-flora',
    },
    {
      from: 'Abraham + Effiba',
      to: 'clara',
      ghs: Math.round((toGhs(16_500) - 130) * 100) / 100,
      note: 'NopeGali − Clara fuel ₵130',
      coupleId: 'abraham-effiba',
    },
    {
      from: 'Clo',
      to: 'abraham',
      ghs: 200,
      note: 'Fuel',
      coupleId: 'dibe-clo-clara',
      personId: 'clo',
    },
    {
      from: 'Felix + Flora',
      to: 'yaa',
      ghs: Math.round(bt * 2 * 100) / 100,
      note: 'Blue Turtle (2 × share)',
      coupleId: 'felix-flora',
    },
    {
      from: 'Abraham + Effiba',
      to: 'yaa',
      ghs: Math.round(bt * 2 * 100) / 100,
      note: 'Blue Turtle (2 × share)',
      coupleId: 'abraham-effiba',
    },
    {
      from: 'Clara',
      to: 'yaa',
      ghs: bt,
      note: 'Blue Turtle',
      coupleId: 'dibe-clo-clara',
      personId: 'clara',
    },
    {
      from: 'Fiifi',
      to: 'yaa',
      ghs: bt,
      note: 'Blue Turtle (same couple — optional)',
      coupleId: 'yaa-fiifi',
      personId: 'fiifi',
    },
  ]
}

/** Individual send obligations (what each person pays out) */
export function personPayouts(personId: PersonId): Payout[] {
  const person = PEOPLE.find(p => p.id === personId)
  if (!person) return []
  const name = person.name
  const bt = toGhs(BLUE_TURTLE.eachCfa)
  const out: Payout[] = []

  // NopeGali → Clara (trio members already covered by Clara paying)
  if (name !== 'Clara' && name !== 'Dibe' && name !== 'Clo') {
    let nope = toGhs(personNopeCfa(name))
    if (name === 'Abraham') {
      // Apply Clara's ₵130 fuel credit to Abraham's NopeGali share
      nope = Math.round((nope - 130) * 100) / 100
      out.push({
        from: name,
        to: 'clara',
        ghs: nope,
        note: 'NopeGali − Clara fuel ₵130',
        personId,
        coupleId: person.coupleId,
      })
    } else {
      out.push({
        from: name,
        to: 'clara',
        ghs: nope,
        note: 'NopeGali lunch',
        personId,
        coupleId: person.coupleId,
      })
    }
  }

  // For Dibe & Clo — NopeGali is within Clara's household (already paid). Optional show as 0.
  // Clo fuel
  if (name === 'Clo') {
    out.push({
      from: 'Clo',
      to: 'abraham',
      ghs: 200,
      note: 'Fuel',
      personId: 'clo',
      coupleId: 'dibe-clo-clara',
    })
  }

  // Blue Turtle → Yaa
  if (BLUE_TURTLE.drinkers.includes(name) && name !== 'Yaa') {
    out.push({
      from: name,
      to: 'yaa',
      ghs: bt,
      note: name === 'Fiifi' ? 'Blue Turtle (same couple — optional)' : 'Blue Turtle',
      personId,
      coupleId: person.coupleId,
    })
  }

  return out
}

export function personReceives(personId: PersonId): { label: string; ghs: number; note: string }[] {
  const bt = toGhs(BLUE_TURTLE.eachCfa)
  if (personId === 'abraham') {
    return [{ label: 'From Clo', ghs: 200, note: 'Fuel' }]
  }
  if (personId === 'yaa') {
    return [
      { label: 'Abraham', ghs: bt, note: 'Blue Turtle' },
      { label: 'Effiba', ghs: bt, note: 'Blue Turtle' },
      { label: 'Felix', ghs: bt, note: 'Blue Turtle' },
      { label: 'Flora', ghs: bt, note: 'Blue Turtle' },
      { label: 'Clara', ghs: bt, note: 'Blue Turtle' },
      { label: 'Fiifi', ghs: bt, note: 'Blue Turtle (same couple)' },
    ]
  }
  if (personId === 'clara') {
    return [
      { label: 'Fiifi', ghs: toGhs(11_500), note: 'NopeGali' },
      { label: 'Yaa', ghs: toGhs(7_000), note: 'NopeGali' },
      { label: 'Felix', ghs: toGhs(10_500), note: 'NopeGali' },
      { label: 'Flora', ghs: toGhs(8_000), note: 'NopeGali' },
      { label: 'Abraham', ghs: Math.round((toGhs(10_000) - 130) * 100) / 100, note: 'NopeGali − fuel net' },
      { label: 'Effiba', ghs: toGhs(6_500), note: 'NopeGali' },
    ]
  }
  return []
}

export function payoutsForCouple(id: CoupleId): Payout[] {
  return allPayouts().filter(p => p.coupleId === id)
}

export function getCouple(id: string): Couple | undefined {
  return COUPLES.find(c => c.id === id)
}

export function getPerson(id: string): PersonProfile | undefined {
  return PEOPLE.find(p => p.id === id)
}
