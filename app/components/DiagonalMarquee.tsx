// Togo flag colors: green, yellow, red
const bands = [
  {
    id: 'band-1',
    words: ['BEACHES', 'LOMÉ', 'TOGO', 'WEEKEND', 'ACCRA', 'VIBES'],
    bg: '#006A4E',
    textColor: '#FFCB00',
    reverse: false,
  },
  {
    id: 'band-2',
    words: ['FOOD', 'DRINKS', 'NIGHTLIFE', 'MUSIC', 'CULTURE', 'CUISINE'],
    bg: '#FFCB00',
    textColor: '#1A1508',
    reverse: true,
  },
  {
    id: 'band-3',
    words: ['GOZEM', 'BEACHES', 'BORDER', 'EXPLORE', 'STAY', 'ENJOY'],
    bg: '#D4483C',
    textColor: '#FFCB00',
    reverse: false,
  },
]

export default function DiagonalMarquee() {
  const FONT_SIZE = 'clamp(5rem, 11vw, 9rem)'
  const PY = '12px'

  return (
    <section
      className="relative overflow-hidden bg-[#EDE3CF]"
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
    >
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
                className={band.reverse ? 'animate-marquee-reverse' : 'animate-marquee'}
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
                    className="font-hero font-black flex-shrink-0"
                    style={{
                      fontSize: FONT_SIZE,
                      lineHeight: '1',
                      paddingLeft: '2.5rem',
                      paddingRight: '2.5rem',
                      color: band.textColor,
                    }}
                  >
                    {word}
                    <span className="opacity-40 mx-2">·</span>
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
