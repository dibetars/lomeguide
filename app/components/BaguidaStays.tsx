const STAYS = [
  {
    id: 'apt-rooftop',
    name: 'Spacious Apt with Patio & Rooftop',
    subtitle: 'Cité Baguida',
    guests: 6,
    beds: 3,
    baths: 3,
    rating: 4.83,
    reviews: 12,
    tags: ['Rooftop terrace', 'Patio', 'AC + WiFi', '5–10 min to beach', 'Self check-in'],
    highlight: '100% of guests rated the location 5 stars',
    url: 'https://www.airbnb.com/rooms/1324804420177308934?check_in=2026-11-20&check_out=2026-11-22&adults=5',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyNDgwNDQyMDE3NzMwODkzNA%3D%3D/original/c638a306-b984-4bdd-a76a-207b2707983e.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyNDgwNDQyMDE3NzMwODkzNA%3D%3D/original/1c39fd6c-9cb6-4dc4-8205-0a41285c215c.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyNDgwNDQyMDE3NzMwODkzNA%3D%3D/original/c70a78b7-fffd-4765-a503-53359c04ca5f.jpeg?im_w=720',
    ],
  },
  {
    id: 'apt-garden-pool',
    name: 'Apartment with Garden & Pool',
    subtitle: 'Airport pickup available · Superhost',
    guests: 6,
    beds: 3,
    baths: 3,
    rating: 5.0,
    reviews: 14,
    tags: ['Pool', 'Garden & balcony', 'AC + WiFi', 'Smart TV', 'Free parking', 'Airport pickup'],
    highlight: '5.0 stars · Superhost. Note: recharge electricity meter on arrival.',
    url: 'https://www.airbnb.com/rooms/1503609612701944836?check_in=2026-11-20&check_out=2026-11-22&adults=5',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1503609612701944836/original/cbb455f8-41fd-4b1a-bea8-6b61d3041c4f.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1503609612701944836/original/9460960d-dd60-430e-b081-94ec27694b94.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1503609612701944836/original/7aae6346-42f6-432e-9319-db2e900359a9.png?im_w=720',
    ],
  },
  {
    id: 'villa-nina',
    name: 'Villa Nina — Seaside',
    subtitle: 'Steps from the beach · Baguida',
    guests: 6,
    beds: 4,
    baths: 3,
    rating: null,
    reviews: 0,
    tags: ['Beach access', 'Tropical garden', 'AC + WiFi', 'Free parking', 'African art decor'],
    highlight: 'New listing. Beach is just steps away — garden with bougainvillea and palms.',
    url: 'https://www.airbnb.com/rooms/1792381940307215136?check_in=2026-11-20&check_out=2026-11-22&adults=5',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1792381940307215136/original/ea2945ea-ea2a-4b9e-8510-3595b474ddd9.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1792381940307215136/original/9ec0aa34-c777-42e2-a286-b869b500dac6.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1792381940307215136/original/691a645a-8b2e-4954-a13c-f78e3bbb5fae.jpeg?im_w=720',
    ],
  },
  {
    id: 'm-prestige',
    name: 'M "Prestige" Residence',
    subtitle: 'Quiet neighborhood · Lomé',
    guests: 6,
    beds: 4,
    baths: 1,
    rating: null,
    reviews: 0,
    tags: ['Pool', 'Garden view', 'AC + WiFi', 'Workspace', 'Free parking', 'Self check-in'],
    highlight: 'New listing. Host has 9 verified reviews on other properties.',
    url: 'https://www.airbnb.com/rooms/1741312483915239777?check_in=2026-11-20&check_out=2026-11-22&adults=5',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1741312483915239777/original/04b6e197-65c3-4a8e-a372-3497f2ba4b3d.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1741312483915239777/original/9b5759a0-7126-47ad-b553-d029c8a2c2ac.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1741312483915239777/original/eb4cd907-c14d-41f3-923b-2507478bb7f4.jpeg?im_w=720',
    ],
  },
]

export default function BaguidaStays() {
  return (
    <div className="space-y-10">

      {/* ── Map ── */}
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="bg-white/5 px-5 py-3 flex items-center gap-3 border-b border-white/10">
          <span className="text-base">📍</span>
          <div>
            <p className="font-body text-xs font-semibold text-white">Baguida, Lomé</p>
            <p className="font-body text-[10px] text-white/40 uppercase tracking-widest">~13 km east of central Lomé · Atlantic coast</p>
          </div>
        </div>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=1.18%2C6.09%2C1.35%2C6.19&layer=mapnik&marker=6.135%2C1.265"
          width="100%"
          height="300"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          title="Baguida, Lomé map"
        />
      </div>

      {/* ── Listing cards ── */}
      <div className="grid sm:grid-cols-2 gap-5">
        {STAYS.map(stay => (
          <a
            key={stay.id}
            href={stay.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/25 transition-all"
          >
            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-0.5 h-44">
              <div className="col-span-2 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stay.photos[0]}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-rows-2 gap-0.5">
                {stay.photos.slice(1, 3).map((photo, i) => (
                  <div key={i} className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-body text-sm font-semibold text-white leading-snug">{stay.name}</h3>
                {stay.rating ? (
                  <span className="font-body text-xs text-[#FFCB00] whitespace-nowrap flex-shrink-0">
                    ★ {stay.rating} <span className="text-white/30">({stay.reviews})</span>
                  </span>
                ) : (
                  <span className="font-body text-[9px] uppercase tracking-widest text-white/30 flex-shrink-0">New</span>
                )}
              </div>
              <p className="font-body text-[10px] uppercase tracking-widest text-[#006A4E] mb-3">{stay.subtitle}</p>

              {/* Stats row */}
              <div className="flex gap-4 mb-3 font-body text-xs text-white/50">
                <span>{stay.guests} guests</span>
                <span>{stay.beds} beds</span>
                <span>{stay.baths} baths</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {stay.tags.map(tag => (
                  <span key={tag} className="font-body text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-body text-xs text-white/45 leading-relaxed mb-4">{stay.highlight}</p>

              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-white/30">Nov 20–22 · 2 nights</span>
                <span className="font-body text-xs font-semibold text-[#006A4E] group-hover:text-[#FFCB00] transition-colors">
                  Book on Airbnb ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ── Cashpower reminder ── */}
      <div className="flex gap-3 bg-amber-900/25 border-l-4 border-[#C4873A] p-4 rounded-r-xl">
        <span className="text-lg flex-shrink-0">⚡</span>
        <p className="font-body text-xs text-white/65 leading-relaxed">
          <strong className="text-white">Always confirm Cashpower:</strong> Ask before booking whether electricity is included in the nightly rate. The garden/pool villa specifically notes guests must recharge the meter on arrival.
        </p>
      </div>

    </div>
  )
}
