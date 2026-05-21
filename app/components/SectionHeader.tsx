interface Props {
  number: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ number, title, subtitle }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#006A4E] mb-4">
        {number}
      </p>
      <h2
        className="font-display font-extrabold uppercase text-[#1A1508] leading-none mb-5"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[#1A1508]/60 text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
