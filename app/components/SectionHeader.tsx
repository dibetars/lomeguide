interface Props {
  number: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ number, title, subtitle }: Props) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#006A4E] mb-3">
        {number}
      </p>
      <h2
        className="font-display font-extrabold uppercase text-[#1A1508] leading-none mb-4"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[#1A1508]/55 text-sm md:text-base max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
