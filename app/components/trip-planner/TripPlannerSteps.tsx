'use client'

import { DAYTIME, EATS, KPALIME_STAYS, LOME_STAYS, NIGHTLIFE } from './data'
import { addDays, formatDay, todayISO } from './dates'
import type { Crossing, DayPlan, KpalimePlan, Passport, TripDraft } from './types'

function Card({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-xl p-4 border transition-all ${
        selected
          ? 'bg-white border-[#006A4E] shadow-sm ring-1 ring-[#006A4E]'
          : 'bg-white/70 border-stone-200 hover:border-stone-400'
      }`}
    >
      {children}
    </button>
  )
}

export function DatesStep({ draft, onChange }: { draft: TripDraft; onChange: (p: Partial<TripDraft>) => void }) {
  const min = todayISO()
  const minOut = draft.checkin ? addDays(draft.checkin, 1) : addDays(min, 1)

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="font-body text-[10px] uppercase tracking-widest text-stone-500 block mb-1.5">Check-in</span>
          <input
            type="date"
            min={min}
            value={draft.checkin}
            onChange={e => {
              const checkin = e.target.value
              const checkout = draft.checkout && draft.checkout > checkin ? draft.checkout : checkin ? addDays(checkin, 2) : ''
              onChange({ checkin, checkout })
            }}
            className="w-full border border-stone-300 bg-white rounded-lg px-3 py-3 font-body text-base sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="font-body text-[10px] uppercase tracking-widest text-stone-500 block mb-1.5">Check-out</span>
          <input
            type="date"
            min={minOut}
            value={draft.checkout}
            onChange={e => onChange({ checkout: e.target.value })}
            className="w-full border border-stone-300 bg-white rounded-lg px-3 py-3 font-body text-base sm:text-sm"
          />
        </label>
      </div>
      <label className="block max-w-[10rem]">
        <span className="font-body text-[10px] uppercase tracking-widest text-stone-500 block mb-1.5">Adults</span>
        <input
          type="number"
          min={1}
          max={8}
          value={draft.adults}
          onChange={e => onChange({ adults: Math.max(1, Number(e.target.value) || 1) })}
          className="w-full border border-stone-300 bg-white rounded-lg px-3 py-3 font-body text-base sm:text-sm"
        />
      </label>
    </div>
  )
}

export function PassportStep({ draft, onChange }: { draft: TripDraft; onChange: (p: Partial<TripDraft>) => void }) {
  const options: { id: Passport; title: string; note: string }[] = [
    { id: 'african', title: 'African passport', note: 'Visa-free up to 30 days. Still complete voyage.gouv.tg and bring your yellow card.' },
    { id: 'non-african', title: 'Non-African passport', note: 'E-visa before you travel. Some nationalities need an embassy appointment in Accra.' },
  ]
  return (
    <div className="grid gap-3">
      {options.map(o => (
        <Card key={o.id} selected={draft.passport === o.id} onClick={() => onChange({ passport: o.id })}>
          <p className="font-body text-sm font-semibold text-stone-800 mb-1">{o.title}</p>
          <p className="font-body text-sm text-stone-500 leading-relaxed">{o.note}</p>
        </Card>
      ))}
    </div>
  )
}

export function CrossingStep({ draft, onChange }: { draft: TripDraft; onChange: (p: Partial<TripDraft>) => void }) {
  const options: { id: Crossing; title: string; detail: string }[] = [
    { id: 'bus', title: '12-seater bus · 80 GHS / person', detail: 'Leaves Tudu when full. Cheap, slower.' },
    { id: 'sedan', title: '4-seater sedan · 200 GHS / car', detail: 'Faster, more legroom, fewer stops.' },
    { id: 'skip', title: 'I’ll sort this myself', detail: 'Skip the estimate for the border run.' },
  ]
  return (
    <div className="grid gap-3">
      {options.map(o => (
        <Card key={o.id} selected={draft.crossing === o.id} onClick={() => onChange({ crossing: o.id })}>
          <p className="font-body text-sm font-semibold text-stone-800 mb-1">{o.title}</p>
          <p className="font-body text-sm text-stone-500">{o.detail}</p>
        </Card>
      ))}
    </div>
  )
}

export function StayStep({
  items,
  selectedId,
  onSelect,
}: {
  items: readonly { id: string; name: string; tags: string[]; emoji: string }[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map(s => (
        <Card key={s.id} selected={selectedId === s.id} onClick={() => onSelect(s.id)}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="text-2xl">{s.emoji}</span>
          </div>
          <p className="font-body text-sm font-semibold text-stone-800 mb-2">{s.name}</p>
          <div className="flex flex-wrap gap-1.5">
            {s.tags.map(tag => (
              <span key={tag} className="font-body text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-stone-200 text-stone-400">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

export function GozemStep({ draft, onChange }: { draft: TripDraft; onChange: (p: Partial<TripDraft>) => void }) {
  return (
    <div className="space-y-4">
      <p className="font-body text-sm text-stone-600 leading-relaxed">
        Download Gozem on your Ghanaian number <strong>before</strong> you cross, so you can request a ride the second you leave immigration.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="https://apps.apple.com/app/gozem/id1455218097" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white rounded-xl border border-stone-200 px-4 py-3 font-body text-sm font-medium hover:border-stone-400">
          App Store ↗
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.gozem.passenger" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white rounded-xl border border-stone-200 px-4 py-3 font-body text-sm font-medium hover:border-stone-400">
          Google Play ↗
        </a>
      </div>
      <Card selected={draft.gozemAck} onClick={() => onChange({ gozemAck: !draft.gozemAck })}>
        <p className="font-body text-sm font-semibold text-stone-800 mb-1">Got it — Gozem is on my phone</p>
        <p className="font-body text-sm text-stone-500">Tap to continue. You’ll still want it installed before Aflao.</p>
      </Card>
    </div>
  )
}

export function MultiPick({
  items,
  selected,
  onToggle,
}: {
  items: { id: string; name: string; emoji: string; category?: string; vibe?: string }[]
  selected: string[]
  onToggle: (id: string) => void
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map(item => (
        <Card key={item.id} selected={selected.includes(item.id)} onClick={() => onToggle(item.id)}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xl">{item.emoji}</span>
            <span className="font-body text-[9px] uppercase tracking-widest text-stone-400">{item.category || item.vibe}</span>
          </div>
          <p className="font-body text-sm font-semibold text-stone-800">{item.name}</p>
        </Card>
      ))}
    </div>
  )
}

export function KpalimeStep({ draft, onChange }: { draft: TripDraft; onChange: (p: Partial<TripDraft>) => void }) {
  const modes: { id: KpalimePlan; title: string; detail: string }[] = [
    { id: 'skip', title: 'Stay in Lomé', detail: 'No Kpalimé on this trip.' },
    { id: 'daytrip', title: 'Day trip', detail: 'Cascade de Kpimé, sleep back in Lomé.' },
    { id: 'overnight', title: 'Overnight in Kpalimé', detail: 'One night in the hills. Pick a stay below.' },
  ]
  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {modes.map(m => (
          <Card
            key={m.id}
            selected={draft.kpalime === m.id}
            onClick={() => onChange({ kpalime: m.id, kpalimeStayId: m.id === 'overnight' ? draft.kpalimeStayId : null })}
          >
            <p className="font-body text-sm font-semibold text-stone-800 mb-1">{m.title}</p>
            <p className="font-body text-sm text-stone-500">{m.detail}</p>
          </Card>
        ))}
      </div>
      {draft.kpalime === 'overnight' && (
        <StayStep items={KPALIME_STAYS} selectedId={draft.kpalimeStayId} onSelect={id => onChange({ kpalimeStayId: id })} />
      )}
    </div>
  )
}

function SlotSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string | null
  options: { id: string; name: string }[]
  onChange: (id: string | null) => void
}) {
  return (
    <label className="block">
      <span className="font-body text-[10px] uppercase tracking-widest text-stone-500 block mb-1">{label}</span>
      <select
        value={value ?? ''}
        onChange={e => onChange(e.target.value || null)}
        className="w-full border border-stone-300 bg-white rounded-lg px-3 py-2.5 font-body text-base sm:text-sm"
      >
        <option value="">—</option>
        {options.map(o => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export function DaysStep({
  draft,
  onDays,
}: {
  draft: TripDraft
  onDays: (days: DayPlan[]) => void
}) {
  const dinners = EATS.filter(e => draft.eats.includes(e.id))
  const nights = NIGHTLIFE.filter(n => draft.nightlife.includes(n.id))

  function patch(i: number, partial: Partial<DayPlan>) {
    onDays(draft.days.map((d, idx) => (idx === i ? { ...d, ...partial } : d)))
  }

  return (
    <div className="space-y-4">
      {draft.days.map((day, i) => {
        const daytimeOpts = DAYTIME.filter(o =>
          day.kind === 'kpalime' ? o.id === 'cascade' || o.id === 'markets' : o.id !== 'cascade' && o.id !== 'markets',
        )
        return (
          <div key={day.date} className="bg-white rounded-xl border border-stone-200 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-body text-sm font-semibold text-stone-800">{formatDay(day.date)}</p>
              {day.kind === 'kpalime' && (
                <span className="font-body text-[9px] uppercase tracking-widest text-[#006A4E]">Kpalimé</span>
              )}
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <SlotSelect
                label="Daytime"
                value={day.daytime}
                options={daytimeOpts}
                onChange={daytime => patch(i, { daytime })}
              />
              <SlotSelect
                label="Dinner"
                value={day.dinner}
                options={dinners}
                onChange={dinner => patch(i, { dinner })}
              />
              <SlotSelect
                label="Night"
                value={day.night}
                options={nights}
                onChange={night => patch(i, { night })}
              />
            </div>
          </div>
        )
      })}
      {draft.days.length === 0 && (
        <p className="font-body text-sm text-stone-500">Set your dates first so we can lay out each night.</p>
      )}
    </div>
  )
}

export function ReviewStep({
  draft,
  nameOf,
}: {
  draft: TripDraft
  nameOf: (kind: 'stay' | 'eat' | 'night' | 'day', id: string | null) => string
}) {
  const stay = LOME_STAYS.find(s => s.id === draft.lomeStayId)
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border border-stone-200 p-4 space-y-2 font-body text-sm text-stone-600">
        <p>
          <strong className="text-stone-800">{draft.adults} adult{draft.adults === 1 ? '' : 's'}</strong>
          {draft.checkin && draft.checkout ? ` · ${formatDay(draft.checkin)} → ${formatDay(draft.checkout)}` : ''}
        </p>
        <p>{draft.passport === 'african' ? 'African passport' : draft.passport === 'non-african' ? 'Non-African passport' : 'Passport unset'}</p>
        <p>
          {draft.crossing === 'bus' ? '12-seater from Tudu' : draft.crossing === 'sedan' ? 'Sedan from Tudu' : 'Crossing TBD'}
          {stay ? ` · ${stay.name}` : ''}
        </p>
        {draft.kpalime !== 'skip' && (
          <p>
            Kpalimé {draft.kpalime === 'daytrip' ? 'day trip' : 'overnight'}
            {draft.kpalimeStayId ? ` · ${nameOf('stay', draft.kpalimeStayId)}` : ''}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {draft.days.map(day => (
          <div key={day.date} className="bg-white rounded-xl border border-stone-200 p-4">
            <p className="font-body text-sm font-semibold text-stone-800 mb-2">
              {formatDay(day.date)}
              {day.kind === 'kpalime' ? ' · Kpalimé' : ''}
            </p>
            <ul className="space-y-1 font-body text-sm text-stone-600">
              <li>Day — {nameOf('day', day.daytime)}</li>
              <li>Dinner — {nameOf('eat', day.dinner)}</li>
              <li>Night — {nameOf('night', day.night)}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border-l-4 border-[#C4873A] p-4 rounded-r-lg font-body text-xs text-stone-600 leading-relaxed space-y-1">
        <p className="font-semibold text-stone-800 uppercase tracking-widest text-[10px] mb-2">Don’t forget</p>
        <p>Yellow fever card + passport at both borders.</p>
        <p>voyage.gouv.tg before you travel. No photos at the checkpoint. No dashes.</p>
        {stay?.id === 'airbnb' && <p>Airbnb: confirm Cashpower / electricity is included.</p>}
        <p>Change Cedis at Aflao, not Tudu, when you can.</p>
      </div>

      <p className="font-body text-xs text-stone-400">
        PDF export comes next. This review is your itinerary draft.
      </p>
    </div>
  )
}
