interface Props {
  items: string[]
  dark?: boolean
}

// Togo flag: green (#006A4E), yellow (#FFCB00), red (#D4483C)
// Five horizontal stripes: green / yellow / red / yellow / green
// Top stripe = green, with red canton + white star on first stripe (decorative only here)
const STRIPE_COLORS = [
  { bg: '#006A4E', text: '#FFCB00' }, // green stripe
  { bg: '#FFCB00', text: '#1A1508' }, // yellow stripe
  { bg: '#D4483C', text: '#FFCB00' }, // red stripe (center)
  { bg: '#FFCB00', text: '#1A1508' }, // yellow stripe
  { bg: '#006A4E', text: '#FFCB00' }, // green stripe
]

export default function Marquee({ items, dark = true }: Props) {
  const repeated = [...items, ...items, ...items, ...items]

  // dark=true → use all 5 flag stripes stacked
  // dark=false → single red stripe (used between food items)
  const stripes = dark ? STRIPE_COLORS : [{ bg: '#D4483C', text: '#FFCB00' }]

  return (
    <div className="overflow-hidden">
      {stripes.map((stripe, si) => (
        <div
          key={si}
          style={{ backgroundColor: stripe.bg }}
          className="overflow-hidden py-3 border-b border-black/10 last:border-b-0"
        >
          <div
            className={`flex whitespace-nowrap ${
              si % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'
            }`}
          >
            {/* Star on first stripe */}
            {si === 0 && (
              <span className="flex-shrink-0 px-6 text-white text-lg self-center">★</span>
            )}
            {repeated.map((item, i) => (
              <span
                key={i}
                className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] px-6 flex-shrink-0"
                style={{ color: stripe.text }}
              >
                {item}
                <span className="opacity-40 ml-6">·</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
