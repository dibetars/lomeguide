const bands = [
  {
    id: 'band-1',
    words: ['BEACHES', 'LOMÉ', 'TOGO', 'WEEKEND', 'ACCRA', 'VIBES'],
    bg: '#7ED4D4',
    reverse: false,
  },
  {
    id: 'band-2',
    words: ['FOOD', 'DRINKS', 'NIGHTLIFE', 'MUSIC', 'CULTURE', 'CUISINE'],
    bg: '#C5BBEE',
    reverse: true,
  },
  {
    id: 'band-3',
    words: ['GOZEM', 'BEACHES', 'BORDER', 'EXPLORE', 'STAY', 'ENJOY'],
    bg: '#E8756A',
    reverse: false,
  },
]

const stickers = [
  { emoji: '🌴', bg: '#FFCB00', size: 130, top: '12%', left: '36%' },
  { emoji: '🥂', bg: '#EDE3CF', size: 150, top: '46%', left: '60%' },
  { emoji: '🍽️', bg: '#F5D0B0', size: 138, top: '78%', left: '22%' },
]

export default function DiagonalMarquee() {
  const FONT_SIZE = 'clamp(5rem, 11vw, 9rem)'
  const LINE_HEIGHT = '1'
  const PY = '12px'

  return (
    <section
      className="relative overflow-hidden bg-[#EDE3CF]"
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
    >
      {/* ── Floating sticker circles ── */}
      {stickers.map((s) => (
        <div
          key={s.emoji}
          className="absolute rounded-full flex items-center justify-center shadow-xl z-20"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            backgroundColor: s.bg,
            fontSize: s.size * 0.42,
            transform: 'translate(-50%, -50%)',
            border: '5px solid rgba(255,255,255,0.55)',
          }}
        >
          {s.emoji}
        </div>
      ))}

      {/* ── Diagonal bands ── */}
      <div className="flex flex-col" style={{ gap: '-1px' }}>
        {bands.map((band) => {
          const repeated = [
            ...band.words,
            ...band.words,
            ...band.words,
            ...band.words,
            ...band.words,
          ]

          return (
            <div
              key={band.id}
              className="overflow-hidden"
              style={{
                backgroundColor: band.bg,
                transform: 'rotate(-3.5deg)',
                marginLeft: '-10%',
                width: '120%',
                marginBottom: '-18px',
              }}
            >
              <div
                className={
                  band.reverse ? 'animate-marquee-reverse' : 'animate-marquee'
                }
                style={{
                  display: 'flex',
                  whiteSpace: 'nowrap',
                  paddingTop: PY,
                  paddingBottom: PY,
                }}
              >
                {repeated.map((word, i) => (
                  <span
                    key={i}
                    className="font-hero font-black text-[#1A1508] flex-shrink-0"
                    style={{
                      fontSize: FONT_SIZE,
                      lineHeight: LINE_HEIGHT,
                      paddingLeft: '2.5rem',
                      paddingRight: '2.5rem',
                    }}
                  >
                    {word}
                    <span className="opacity-30 mx-2">·</span>
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
