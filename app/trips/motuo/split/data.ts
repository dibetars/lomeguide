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
    number: '0240542879' as string | null,
    display: '024 054 2879',
  },
  abraham: {
    label: 'Abraham',
    via: 'Abraham Tometey',
    network: 'MTN',
    number: '0557137383' as string | null,
    display: '055 713 7383',
  },
  yaa: {
    label: 'Yaa',
    via: 'Lusa Gyamfua Harris',
    network: 'MTN',
    number: '0559040724' as string | null,
    display: '055 904 0724',
  },
  felix: {
    label: 'Felix',
    via: 'Felix',
    network: 'MTN',
    number: '0547635653' as string | null,
    display: '054 763 5653',
  },
} as const

/** Felix paid fuel + border; Fiifi & Yaa cover half — fully settled */
export const FELIX_ROAD = {
  fuelGhs: 800,
  borderGhs: 400,
  totalGhs: 1_200,
  shareGhs: 600, // Fiifi + Yaa couple half
  eachGhs: 300, // per person if split inside the couple
  paidBy: 'Felix' as Person,
  owedBy: ['Fiifi', 'Yaa'] as Person[],
  /** Fiifi paid ₵500 MoMo toward the couple’s ₵600 half */
  fiifiPaidGhs: 500,
  /** Fiifi covered the last ₵100 as miscellaneous snacks */
  fiifiSnacksGhs: 100,
} as const

/** Fiifi still owes Clara this after credits for things he paid on her behalf */
export const FIIFI_CLARA_REMAINING_GHS = 100

/** Base NopeGali food/drink shares in CFA (5th beer tracked separately on Abraham) */
export const NOPEGALI_SHARES_CFA: Record<Person, number> = {
  Fiifi: 11_500,
  Clara: 9_000,
  Effiba: 6_500,
  Felix: 10_500,
  Abraham: 10_000, // Poisson Braisé 8,000 + couple bière 2,000
  Dibe: 6_000,
  Clo: 5_000,
  Yaa: 7_000,
  Flora: 8_000,
}

export const NOPEGALI_ITEMS: { person: Person; items: string; cfa: number }[] = [
  { person: 'Fiifi', items: 'Jus + Poisson Braisé', cfa: 11_500 },
  { person: 'Yaa', items: 'Soupe de Légume + 1 Bière', cfa: 7_000 },
  { person: 'Felix', items: 'Special Gombo + 2 Bières', cfa: 10_500 },
  { person: 'Flora', items: 'Poulet Braisé + 2 Eaux', cfa: 8_000 },
  { person: 'Abraham', items: 'Poisson Braisé + 1 Bière (couple)', cfa: 10_000 },
  { person: 'Effiba', items: 'Special Gombo', cfa: 6_500 },
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

export const FUEL_GHS: {
  from: Person
  to: Person
  ghs: number
  netted?: boolean
  paid?: boolean
  paidGhs?: number
}[] = [
  { from: 'Clo', to: 'Abraham', ghs: 200, paid: true, paidGhs: 280 },
  // Clara’s ₵130 fuel settled with Abraham/Effiba via border + snacks agreement (no MoMo)
  { from: 'Clara', to: 'Abraham', ghs: 130, paid: true, paidGhs: 0 },
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
    blurb: 'Yaa paid Blue Turtle. Fiifi settled Felix road (₵500 + ₵100 snacks).',
  },
  {
    id: 'felix-flora',
    name: 'Felix + Flora',
    members: ['Felix', 'Flora'],
    blurb: 'Felix paid ₵1,200 road — Yaa + Fiifi half settled by Fiifi (₵500 + snacks).',
  },
  {
    id: 'abraham-effiba',
    name: 'Abraham + Effiba',
    members: ['Abraham', 'Effiba'],
    blurb: 'NopeGali covered by border + snacks agreement. Only Blue Turtle left.',
  },
  {
    id: 'dibe-clo-clara',
    name: 'Dibe + Clo + Clara',
    members: ['Dibe', 'Clo', 'Clara'],
    blurb: 'Clara paid NopeGali. Abraham/Effiba settled separately (border + snacks).',
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
  return NOPEGALI_SHARES_CFA[person]
}

export type Payout = {
  from: string
  to: keyof typeof PAYEES
  ghs: number
  note: string
  coupleId?: CoupleId
  personId?: PersonId
}

/** Blue Turtle share in GHS */
export function blueTurtleGhs(): number {
  return toGhs(BLUE_TURTLE.eachCfa)
}

/** Couple road to Felix is fully settled (Fiifi ₵500 MoMo + ₵100 misc snacks). */
export function yaaToFelixNettedGhs(): number {
  return 0
}

export function allPayouts(): Payout[] {
  const bt = blueTurtleGhs()
  return [
    {
      from: 'Yaa + Fiifi',
      to: 'clara',
      ghs: FIIFI_CLARA_REMAINING_GHS, // Fiifi remaining after credits · Yaa↔Clara cancelled
      note: 'NopeGali (Fiifi remaining) · Yaa↔Clara cancelled',
      coupleId: 'yaa-fiifi',
    },
    {
      from: 'Felix + Flora',
      to: 'clara',
      ghs: toGhs(18_500),
      note: 'NopeGali lunch',
      coupleId: 'felix-flora',
    },
    // Abraham + Effiba → Clara NopeGali settled via border + snacks agreement
    {
      from: 'Felix + Flora',
      to: 'yaa',
      ghs: bt, // Flora only — Felix’s Blue Turtle nets against Yaa’s road
      note: 'Blue Turtle (Flora) · Felix netted vs road',
      coupleId: 'felix-flora',
    },
    {
      from: 'Abraham + Effiba',
      to: 'yaa',
      ghs: Math.round(bt * 2 * 100) / 100,
      note: 'Blue Turtle (2 × share)',
      coupleId: 'abraham-effiba',
    },
    // Clara → Yaa Blue Turtle cancelled against Yaa → Clara NopeGali
    {
      from: 'Fiifi',
      to: 'yaa',
      ghs: bt,
      note: 'Blue Turtle (same couple — optional)',
      coupleId: 'yaa-fiifi',
      personId: 'fiifi',
    },
    // Yaa + Fiifi → Felix road settled: Fiifi ₵500 MoMo + ₵100 misc snacks
  ]
}

/** Individual send obligations (what each person pays out) — after bilateral nets */
export function personPayouts(personId: PersonId): Payout[] {
  const person = PEOPLE.find(p => p.id === personId)
  if (!person) return []
  const name = person.name
  const bt = blueTurtleGhs()
  const out: Payout[] = []

  // NopeGali → Clara
  // Skip household (Clara paid); Yaa cancels vs Blue Turtle; Abraham + Effiba settled via border + snacks
  if (
    name !== 'Clara' &&
    name !== 'Dibe' &&
    name !== 'Clo' &&
    name !== 'Yaa' &&
    name !== 'Abraham' &&
    name !== 'Effiba'
  ) {
    if (name === 'Fiifi') {
      out.push({
        from: name,
        to: 'clara',
        ghs: FIIFI_CLARA_REMAINING_GHS,
        note: 'NopeGali remaining (credits for things paid on Clara’s behalf)',
        personId,
        coupleId: person.coupleId,
      })
    } else {
      out.push({
        from: name,
        to: 'clara',
        ghs: toGhs(personNopeCfa(name)),
        note: 'NopeGali lunch',
        personId,
        coupleId: person.coupleId,
      })
    }
  }

  // Blue Turtle → Yaa
  // Skip Yaa herself; skip Clara (nets vs Yaa NopeGali); skip Felix (nets vs Yaa road)
  if (BLUE_TURTLE.drinkers.includes(name) && name !== 'Yaa' && name !== 'Clara' && name !== 'Felix') {
    out.push({
      from: name,
      to: 'yaa',
      ghs: bt,
      note: name === 'Fiifi' ? 'Blue Turtle (same couple — optional)' : 'Blue Turtle',
      personId,
      coupleId: person.coupleId,
    })
  }

  // Felix road — settled by Fiifi (₵500 MoMo + ₵100 misc snacks); nothing left to send

  return out
}

export function personReceives(personId: PersonId): { label: string; ghs: number; note: string }[] {
  const bt = blueTurtleGhs()
  if (personId === 'abraham') {
    return []
  }
  if (personId === 'felix') {
    // Yaa + Fiifi road half settled (Fiifi ₵500 MoMo + ₵100 misc snacks)
    return []
  }
  if (personId === 'yaa') {
    return [
      { label: 'Abraham', ghs: bt, note: 'Blue Turtle' },
      { label: 'Effiba', ghs: bt, note: 'Blue Turtle' },
      // Felix netted into Yaa → Felix road
      { label: 'Flora', ghs: bt, note: 'Blue Turtle' },
      // Clara cancelled against Yaa → Clara NopeGali
      { label: 'Fiifi', ghs: bt, note: 'Blue Turtle (same couple)' },
    ]
  }
  if (personId === 'clara') {
    return [
      {
        label: 'Fiifi',
        ghs: FIIFI_CLARA_REMAINING_GHS,
        note: 'NopeGali remaining (he paid some on your behalf)',
      },
      // Yaa cancelled against Clara → Yaa Blue Turtle
      { label: 'Felix', ghs: toGhs(10_500), note: 'NopeGali' },
      { label: 'Flora', ghs: toGhs(8_000), note: 'NopeGali' },
      // Abraham + Effiba NopeGali settled via border + snacks agreement
    ]
  }
  return []
}

export type CalcStep = {
  label: string
  formula: string
  result: string
}

/** Explicit arithmetic for each person’s page */
export function personCalcSteps(personId: PersonId): CalcStep[] {
  const person = PEOPLE.find(p => p.id === personId)
  if (!person) return []
  const name = person.name
  const bt = blueTurtleGhs()
  const btCfa = BLUE_TURTLE.eachCfa
  const nopeCfa = personNopeCfa(name)
  const nopeGhs = toGhs(nopeCfa)
  const steps: CalcStep[] = []
  const rateLine = `${RATE} CFA = ₵1`

  steps.push({
    label: 'Exchange rate',
    formula: rateLine,
    result: `÷ ${RATE}`,
  })

  // NopeGali item lines
  const items = NOPEGALI_ITEMS.filter(i => i.person === name)
  for (const item of items) {
    steps.push({
      label: `NopeGali — ${item.items}`,
      formula: `${item.cfa.toLocaleString()} CFA ÷ ${RATE}`,
      result: formatGhs(toGhs(item.cfa)),
    })
  }

  if (items.length > 1) {
    steps.push({
      label: 'NopeGali subtotal',
      formula: items.map(i => formatGhs(toGhs(i.cfa))).join(' + '),
      result: formatGhs(nopeGhs),
    })
  } else if (items.length === 1 && name !== 'Abraham') {
    // single item already shown
  }

  if (name === 'Abraham' || name === 'Effiba') {
    steps.push({
      label: 'NopeGali → Clara',
      formula: `${nopeCfa.toLocaleString()} CFA ÷ ${RATE} = ${formatGhs(nopeGhs)}`,
      result: 'Settled — border + snacks agreement',
    })
  } else if (name === 'Yaa') {
    steps.push({
      label: 'NopeGali → Clara',
      formula: `${nopeCfa.toLocaleString()} CFA ÷ ${RATE} = ${formatGhs(nopeGhs)}`,
      result: 'Cancelled vs Clara Blue Turtle',
    })
  } else if (name === 'Fiifi') {
    steps.push({
      label: 'NopeGali → Clara (gross)',
      formula: `${nopeCfa.toLocaleString()} CFA ÷ ${RATE}`,
      result: formatGhs(nopeGhs),
    })
    steps.push({
      label: 'NopeGali → Clara (remaining)',
      formula: `${formatGhs(nopeGhs)} − credits for things paid on Clara’s behalf`,
      result: formatGhs(FIIFI_CLARA_REMAINING_GHS),
    })
  } else if (name === 'Clara' || name === 'Dibe' || name === 'Clo') {
    steps.push({
      label: 'NopeGali',
      formula: `${nopeCfa.toLocaleString()} CFA ÷ ${RATE} = ${formatGhs(nopeGhs)}`,
      result: 'Covered by Clara’s bill',
    })
  } else if (items.length > 0) {
    steps.push({
      label: 'NopeGali → Clara',
      formula: `${nopeCfa.toLocaleString()} CFA ÷ ${RATE}`,
      result: formatGhs(nopeGhs),
    })
  }

  // Blue Turtle
  if (BLUE_TURTLE.drinkers.includes(name)) {
    const formula = `49,000 CFA ÷ 7 = ${btCfa.toLocaleString()} CFA ÷ ${RATE}`
    if (name === 'Yaa') {
      steps.push({
        label: 'Blue Turtle (you paid)',
        formula,
        result: `${formatGhs(bt)} · others pay you`,
      })
    } else if (name === 'Clara') {
      steps.push({
        label: 'Blue Turtle → Yaa',
        formula,
        result: `${formatGhs(bt)} · cancelled vs Yaa NopeGali`,
      })
    } else if (name === 'Felix') {
      steps.push({
        label: 'Blue Turtle → Yaa',
        formula,
        result: `${formatGhs(bt)} · netted into Yaa’s road`,
      })
    } else if (name === 'Fiifi') {
      steps.push({
        label: 'Blue Turtle → Yaa',
        formula,
        result: `${formatGhs(bt)} · same couple (optional)`,
      })
    } else {
      steps.push({
        label: 'Blue Turtle → Yaa',
        formula,
        result: formatGhs(bt),
      })
    }
  } else {
    steps.push({
      label: 'Blue Turtle',
      formula: 'Not on this bill (Dibe & Clo excluded)',
      result: formatGhs(0),
    })
  }

  // Road / fuel
  if (name === 'Fiifi') {
    steps.push({
      label: 'Road → Felix (couple half)',
      formula: `₵${FELIX_ROAD.shareGhs} couple share of fuel + border`,
      result: formatGhs(FELIX_ROAD.shareGhs),
    })
    steps.push({
      label: 'Road → Felix (MoMo)',
      formula: `Paid ₵${FELIX_ROAD.fiifiPaidGhs} for the couple`,
      result: formatGhs(FELIX_ROAD.fiifiPaidGhs),
    })
    steps.push({
      label: 'Misc snacks → Felix',
      formula: `₵${FELIX_ROAD.fiifiSnacksGhs} miscellaneous snacks (you paid)`,
      result: 'Closes couple road balance',
    })
  }
  if (name === 'Yaa') {
    steps.push({
      label: 'Road → Felix',
      formula: `Couple ₵${FELIX_ROAD.shareGhs} · Fiifi paid ₵${FELIX_ROAD.fiifiPaidGhs} + ₵${FELIX_ROAD.fiifiSnacksGhs} snacks`,
      result: 'Settled — nothing to send',
    })
    steps.push({
      label: 'Yaa ↔ Clara net',
      formula: `NopeGali ${formatGhs(nopeGhs)} − Blue Turtle from Clara ${formatGhs(bt)}`,
      result: formatGhs(0),
    })
  }
  if (name === 'Felix') {
    steps.push({
      label: 'Road you paid',
      formula: `₵${FELIX_ROAD.fuelGhs} fuel + ₵${FELIX_ROAD.borderGhs} border`,
      result: formatGhs(FELIX_ROAD.totalGhs),
    })
    steps.push({
      label: 'From Fiifi (MoMo)',
      formula: `₵${FELIX_ROAD.fiifiPaidGhs} toward couple’s ₵${FELIX_ROAD.shareGhs}`,
      result: 'Received',
    })
    steps.push({
      label: 'From Fiifi (misc snacks)',
      formula: `₵${FELIX_ROAD.fiifiSnacksGhs} miscellaneous snacks`,
      result: 'Couple road closed',
    })
  }
  if (name === 'Clo') {
    steps.push({
      label: 'Fuel → Abraham',
      formula: 'Owed ₵200.00 · sent ₵280.00',
      result: 'Settled',
    })
  }
  if (name === 'Clara') {
    steps.push({
      label: 'Abraham + Effiba NopeGali',
      formula: `${formatGhs(toGhs(16_500))} lunch (+ ₵130 fuel)`,
      result: 'Settled — border + snacks agreement',
    })
    steps.push({
      label: 'Fiifi NopeGali remaining',
      formula: `${formatGhs(toGhs(11_500))} − credits for things he paid on your behalf`,
      result: formatGhs(FIIFI_CLARA_REMAINING_GHS),
    })
    steps.push({
      label: 'Yaa ↔ Clara net',
      formula: `Blue Turtle ${formatGhs(bt)} − Yaa NopeGali ${formatGhs(toGhs(7_000))}`,
      result: formatGhs(0),
    })
  }

  // Final send total
  const sends = personPayouts(personId).filter(p => !(p.from === 'Fiifi' && p.to === 'yaa'))
  const total = sends.reduce((s, p) => s + p.ghs, 0)
  if (sends.length > 1) {
    steps.push({
      label: 'Total to send',
      formula: sends.map(s => formatGhs(s.ghs)).join(' + '),
      result: formatGhs(total),
    })
  } else if (sends.length === 1) {
    steps.push({
      label: 'Total to send',
      formula: sends[0].note,
      result: formatGhs(total),
    })
  } else {
    steps.push({
      label: 'Total to send',
      formula: 'All lines settled or netted',
      result: formatGhs(0),
    })
  }

  return steps
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
