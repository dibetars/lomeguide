const STAYS = [
  {
    id: 'apt-rooftop',
    badge: 'Guest favorite',
    type: 'Apartment in Lomé',
    name: 'Spacious Apt with Patio & Rooftop in Cité Baguida',
    bedrooms: 3,
    beds: 3,
    baths: 3,
    rating: 4.83,
    reviews: 12,
    priceTotal: 96,
    priceOriginal: null as number | null,
    urlBase: 'https://www.airbnb.com/rooms/1324804420177308934',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyNDgwNDQyMDE3NzMwODkzNA%3D%3D/original/c638a306-b984-4bdd-a76a-207b2707983e.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyNDgwNDQyMDE3NzMwODkzNA%3D%3D/original/1c39fd6c-9cb6-4dc4-8205-0a41285c215c.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyNDgwNDQyMDE3NzMwODkzNA%3D%3D/original/c70a78b7-fffd-4765-a503-53359c04ca5f.jpeg?im_w=720',
    ],
  },
  {
    id: 'apt-garden-pool',
    badge: 'Superhost',
    type: 'Villa in Lomé',
    name: 'Apartment with garden / airport pick-up possible',
    bedrooms: 3,
    beds: 3,
    baths: 3,
    rating: 5.0,
    reviews: 14,
    priceTotal: 118,
    priceOriginal: 133 as number | null,
    urlBase: 'https://www.airbnb.com/rooms/1503609612701944836',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1503609612701944836/original/cbb455f8-41fd-4b1a-bea8-6b61d3041c4f.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1503609612701944836/original/9460960d-dd60-430e-b081-94ec27694b94.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1503609612701944836/original/7aae6346-42f6-432e-9319-db2e900359a9.png?im_w=720',
    ],
  },
  {
    id: 'villa-nina',
    badge: 'New',
    type: 'Villa in Baguida',
    name: 'Villa Nina — Seaside, steps from the beach',
    bedrooms: 4,
    beds: 4,
    baths: 3,
    rating: null as number | null,
    reviews: 0,
    priceTotal: 243 as number | null,
    priceOriginal: 304 as number | null,
    urlBase: 'https://www.airbnb.com/rooms/1792381940307215136',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1792381940307215136/original/ea2945ea-ea2a-4b9e-8510-3595b474ddd9.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1792381940307215136/original/9ec0aa34-c777-42e2-a286-b869b500dac6.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1792381940307215136/original/691a645a-8b2e-4954-a13c-f78e3bbb5fae.jpeg?im_w=720',
    ],
  },
]

interface Props {
  checkIn: string
  checkOut: string
  nights: number
  dateLabel: string
}

export default function BaguidaStays({ checkIn, checkOut, nights, dateLabel }: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 -mx-5 sm:-mx-8 md:-mx-0">

      {/* ── Cards grid ── */}
      <div className="flex-1 min-w-0 px-5 sm:px-8 md:px-0">
        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8">
          {STAYS.map(stay => (
            <a
              key={stay.id}
              href={`${stay.urlBase}?check_in=${checkIn}&check_out=${checkOut}&adults=5`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden mb-3" style={{ aspectRatio: '20/13' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stay.photos[0]}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3">
                  {stay.badge === 'Guest favorite' && (
                    <span className="font-body text-[11px] font-semibold text-[#1A1508] bg-white rounded-full px-3 py-1 leading-none">
                      Guest favorite
                    </span>
                  )}
                  {stay.badge === 'Superhost' && (
                    <span className="font-body text-[11px] font-semibold text-white bg-[#1A1508]/80 backdrop-blur-sm rounded-full px-3 py-1 leading-none border border-white/20">
                      Superhost
                    </span>
                  )}
                  {stay.badge === 'New' && (
                    <span className="font-body text-[11px] font-semibold text-white bg-[#1A1508]/70 backdrop-blur-sm rounded-full px-3 py-1 leading-none border border-white/15">
                      New
                    </span>
                  )}
                </div>

                {/* Photo count bottom-right */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity={0.8}>
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <span className="font-body text-[10px] text-white/80">{stay.photos.length}</span>
                </div>
              </div>

              {/* Card details */}
              <div>
                {/* Name + rating row */}
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className="font-body text-sm font-semibold text-white leading-snug flex-1">{stay.name}</p>
                  {stay.rating ? (
                    <span className="font-body text-xs text-white whitespace-nowrap flex-shrink-0 flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      {stay.rating}
                      <span className="text-white/40">({stay.reviews})</span>
                    </span>
                  ) : null}
                </div>

                {/* Type */}
                <p className="font-body text-sm text-white/50 mb-0.5">{stay.type}</p>

                {/* Beds/baths */}
                <p className="font-body text-sm text-white/50 mb-3">
                  {stay.bedrooms} bedrooms · {stay.beds} beds · {stay.baths} baths
                </p>

                {/* Separator */}
                <div className="border-t border-white/10 mb-3" />

                {/* Price row */}
                {stay.priceTotal ? (
                  <p className="font-body text-sm text-white">
                    {stay.priceOriginal && (
                      <span className="line-through text-white/40 mr-1.5">${stay.priceOriginal}</span>
                    )}
                    <span className="font-semibold">${stay.priceTotal}</span>
                    <span className="text-white/50 font-normal"> for {nights} nights</span>
                  </p>
                ) : (
                  <p className="font-body text-sm text-white/40">Check Airbnb for pricing</p>
                )}

                {stay.priceTotal && (
                  <p className="font-body text-xs text-white/40 mt-0.5">
                    Pay $0 today · Free cancellation
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Cashpower note */}
        <div className="flex gap-3 bg-amber-900/20 border-l-4 border-[#C4873A] p-4 rounded-r-xl mt-8">
          <span className="text-base flex-shrink-0">⚡</span>
          <p className="font-body text-xs text-white/60 leading-relaxed">
            <strong className="text-white">Confirm Cashpower before booking.</strong>{' '}
            Ask the host whether electricity is included. The garden/pool villa notes guests must recharge the meter on arrival.
          </p>
        </div>
      </div>

      {/* ── Sticky map ── */}
      <div className="lg:w-[360px] xl:w-[420px] flex-shrink-0 px-5 sm:px-8 md:px-0">
        <div className="lg:sticky lg:top-8 rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-white/5 px-4 py-3 flex items-center gap-2.5 border-b border-white/10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4483C"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <div>
              <p className="font-body text-xs font-semibold text-white">Baguida, Lomé</p>
              <p className="font-body text-[10px] text-white/40">~13 km east of centre · Atlantic coast</p>
            </div>
          </div>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.18%2C6.09%2C1.35%2C6.19&layer=mapnik&marker=6.135%2C1.265"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            title="Baguida, Lomé map"
          />
        </div>
      </div>

    </div>
  )
}
