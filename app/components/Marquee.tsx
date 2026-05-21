interface Props {
  items: string[]
  dark?: boolean
}

export default function Marquee({ items, dark = true }: Props) {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div
      className={`overflow-hidden py-4 border-y-2 ${
        dark
          ? 'bg-[#1A1508] border-[#1A1508]'
          : 'bg-[#D4483C] border-[#D4483C]'
      }`}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] px-8 flex-shrink-0 ${
              dark ? 'text-[#FFCB00]' : 'text-white'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
