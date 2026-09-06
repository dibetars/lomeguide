'use client'

import { useEffect, useId, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'

function todayISO() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function addDays(iso: string, days: number) {
  const d = new Date(`${iso}T00:00:00`)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

function nightsBetween(checkin: string, checkout: string) {
  const ms = new Date(`${checkout}T00:00:00`).getTime() - new Date(`${checkin}T00:00:00`).getTime()
  return Math.max(1, Math.round(ms / 86_400_000))
}

function buildBookingUrl(
  hotelId: string,
  checkin: string,
  checkout: string,
  extras: Record<string, string> = {},
) {
  const params = new URLSearchParams({
    ss: 'Lomé',
    ssne: 'Lomé',
    ssne_untouched: 'Lomé',
    highlighted_hotels: hotelId,
    lang: 'en-gb',
    sb: '1',
    src_elem: 'sb',
    dest_id: '-1497972',
    dest_type: 'city',
    checkin,
    checkout,
    group_adults: '2',
    no_rooms: '1',
    group_children: '0',
    ...extras,
  })
  return `https://www.booking.com/searchresults.en-gb.html?${params.toString()}`
}

function buildOnomoUrl(checkin: string, checkout: string) {
  const params = new URLSearchParams({
    adult: '1',
    arrive: checkin,
    chain: '27746',
    child: '0',
    currency: 'XOF',
    depart: checkout,
    hotel: '34470',
    level: 'hotel',
    locale: 'fr-FR',
    productcurrency: 'XOF',
    rooms: '1',
  })
  return `https://reservations.onomohotels.com/?${params.toString()}`
}

function buildPatioUrl(checkin: string, checkout: string) {
  const params = new URLSearchParams({
    currency: 'ghs',
    checkin,
    checkout,
    adults: '2',
    kids: '0',
  })
  return `https://us2.cloudbeds.com/en/reservation/AG3HEJ?${params.toString()}`
}

function buildAirbnbUrl(checkin: string, checkout: string) {
  const params = new URLSearchParams()
  params.set('place_id', 'ChIJGVQYE8HhIxARHUGvLEK1JDI')
  params.set('search_type', 'unknown')
  params.append('refinement_paths[]', '/homes')
  params.set('date_picker_type', 'calendar')
  params.set('query', 'Lomé, Maritime Region, Togo')
  params.set('search_mode', 'regular_search')
  params.set('price_filter_input_type', '2')
  params.set('price_filter_num_nights', String(nightsBetween(checkin, checkout)))
  params.set('channel', 'EXPLORE')
  params.set('checkin', checkin)
  params.set('checkout', checkout)
  params.set('source', 'structured_search_input_header')
  return `https://www.airbnb.com/s/Lom%C3%A9--Maritime-Region--Togo/homes?${params.toString()}`
}

type BookableStay = {
  id: string
  name: string
  tags: string[]
  emoji: string
  provider: string
  cta: string
  buildUrl: (checkin: string, checkout: string) => string
}

type LinkedStay = {
  id: string
  name: string
  tags: string[]
  emoji: string
  url: string
}

const bookable: BookableStay[] = [
  {
    id: 'marcelo',
    name: 'Marcelo Beach Club',
    tags: ['Top Pick', 'Beachfront'],
    emoji: '🏖️',
    provider: 'Booking.com',
    cta: 'Check Availability',
    buildUrl: (inDate, outDate) =>
      buildBookingUrl('5627015', inDate, outDate, { src: 'searchresults' }),
  },
  {
    id: 'nomads',
    name: 'Nomads Hotel',
    tags: ['Top Pick', 'Lifestyle Vibe'],
    emoji: '✨',
    provider: 'Booking.com',
    cta: 'Check Availability',
    buildUrl: (inDate, outDate) =>
      buildBookingUrl('9458502', inDate, outDate, { src: 'hotel', efdco: '1' }),
  },
  {
    id: 'patio',
    name: 'Le Patio',
    tags: ['Boutique', 'Central'],
    emoji: '🌿',
    provider: 'Direct booking',
    cta: 'Check Availability',
    buildUrl: buildPatioUrl,
  },
  {
    id: 'onomo',
    name: 'ONOMO Hotel Lomé',
    tags: ['Beachfront', 'Business'],
    emoji: '🏨',
    provider: 'Onomo Hotels',
    cta: 'Check Availability',
    buildUrl: buildOnomoUrl,
  },
  {
    id: 'airbnb',
    name: 'Budget Airbnbs',
    tags: ['Best Value', 'From $10/night'],
    emoji: '🏠',
    provider: 'Airbnb · Lomé',
    cta: 'Search Airbnb',
    buildUrl: buildAirbnbUrl,
  },
]

const linked: LinkedStay[] = [
  {
    id: 'pure-plage',
    name: 'Pure Plage',
    tags: ['Beach Luxury', 'Private Beach'],
    emoji: '🌊',
    url: 'https://www.google.com/maps/search/Pure+Plage+Lome+Togo',
  },
]

const cardClass =
  'bg-white p-6 rounded-xl border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all group block text-left w-full'

function StayCardFace({ name, tags, emoji }: { name: string; tags: string[]; emoji: string }) {
  return (
    <>
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{emoji}</span>
        <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-sm">↗</span>
      </div>
      <p className="font-body text-sm font-semibold text-stone-800 mb-3">{name}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="font-body text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-stone-200 text-stone-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}

export default function StayGrid() {
  const formId = useId()
  const [openStay, setOpenStay] = useState<BookableStay | null>(null)
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')

  useEffect(() => {
    if (!openStay) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenStay(null)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [openStay])

  const minCheckin = todayISO()
  const minCheckout = checkin ? addDays(checkin, 1) : addDays(minCheckin, 1)
  const valid = Boolean(checkin && checkout && checkout > checkin)

  function onCheckin(value: string) {
    setCheckin(value)
    if (checkout && checkout <= value) setCheckout(addDays(value, 1))
  }

  function search(e: FormEvent) {
    e.preventDefault()
    if (!openStay || !valid) return
    window.open(openStay.buildUrl(checkin, checkout), '_blank', 'noopener,noreferrer')
    setOpenStay(null)
  }

  const ordered = [
    bookable[0],
    bookable[1],
    linked[0],
    bookable[2],
    bookable[3],
    bookable[4],
  ]

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ordered.map(stay =>
          'url' in stay ? (
            <a
              key={stay.id}
              href={stay.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <StayCardFace name={stay.name} tags={stay.tags} emoji={stay.emoji} />
            </a>
          ) : (
            <button
              key={stay.id}
              type="button"
              onClick={() => setOpenStay(stay)}
              className={cardClass}
            >
              <StayCardFace name={stay.name} tags={stay.tags} emoji={stay.emoji} />
            </button>
          ),
        )}
      </div>

      {openStay &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${formId}-title`}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpenStay(null)} />
            <form
              onSubmit={search}
              className="relative w-full max-w-md bg-[#EDE3CF] rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setOpenStay(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1A1508] text-[#EDE3CF] flex items-center justify-center text-sm font-bold hover:bg-[#006A4E] transition-colors"
                aria-label="Close"
              >
                ×
              </button>

              <p className="font-body text-[10px] uppercase tracking-widest text-[#006A4E] mb-2">
                {openStay.provider} · {openStay.name}
              </p>
              <h3
                id={`${formId}-title`}
                className="font-display font-extrabold uppercase text-[#1A1508] leading-tight mb-2"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)' }}
              >
                When are you going?
              </h3>
              <p className="font-body text-sm text-[#1A1508]/60 leading-relaxed mb-6">
                Pick your proposed travel dates and we&apos;ll open the booking page with those dates already set.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <label
                    htmlFor={`${formId}-checkin`}
                    className="font-body text-[10px] uppercase tracking-widest text-stone-500 block mb-1.5"
                  >
                    Check-in
                  </label>
                  <input
                    id={`${formId}-checkin`}
                    type="date"
                    required
                    min={minCheckin}
                    value={checkin}
                    onChange={e => onCheckin(e.target.value)}
                    className="w-full border border-stone-300 bg-white rounded-lg px-3 py-3 font-body text-base sm:text-sm text-stone-800 focus:outline-none focus:border-[#006A4E] focus:ring-1 focus:ring-[#006A4E]"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`${formId}-checkout`}
                    className="font-body text-[10px] uppercase tracking-widest text-stone-500 block mb-1.5"
                  >
                    Check-out
                  </label>
                  <input
                    id={`${formId}-checkout`}
                    type="date"
                    required
                    min={minCheckout}
                    value={checkout}
                    onChange={e => setCheckout(e.target.value)}
                    className="w-full border border-stone-300 bg-white rounded-lg px-3 py-3 font-body text-base sm:text-sm text-stone-800 focus:outline-none focus:border-[#006A4E] focus:ring-1 focus:ring-[#006A4E]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!valid}
                className="w-full inline-flex items-center justify-between bg-[#1A1508] disabled:opacity-40 disabled:cursor-not-allowed text-[#EDE3CF] pl-5 pr-1.5 py-1.5 rounded-full font-body text-sm font-medium hover:bg-[#006A4E] transition-colors"
              >
                <span>{openStay.cta}</span>
                <span className="w-8 h-8 bg-[#D4483C] rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  ↗
                </span>
              </button>
            </form>
          </div>,
          document.body,
        )}
    </>
  )
}
