export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #0A1F14 0%, #0C1820 40%, #060D18 70%, #020609 100%)',
      }}
    >
      {/* Togo-green glow — right side */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 40%, rgba(0,106,78,0.25) 0%, transparent 65%)',
        }}
      />

      {/* Red glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, rgba(212,72,60,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Large watermark flag */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.06] hidden lg:block"
        style={{ fontSize: '28rem', lineHeight: 1 }}
        aria-hidden
      >
        🇹🇬
      </div>

      {/* Content wrapper — fills full height */}
      <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-8 md:px-12">

        {/* Top eyebrow — sits below the nav */}
        <p className="pt-28 font-body text-[10px] uppercase tracking-[0.5em] text-white/30">
          Accra → Lomé · The Complete Weekend Guide
        </p>

        {/* Push headline to the bottom */}
        <div className="flex-1 flex flex-col justify-end pb-14 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* Left: big Bodoni italic headline */}
            <h1
              className="font-hero italic font-black text-white leading-[0.88]"
              style={{ fontSize: 'clamp(3.8rem, 9vw, 8.5rem)' }}
            >
              Live the Lomé<br />
              you&apos;ve only<br />
              <span style={{ color: '#FFCB00' }}>heard about</span>
            </h1>

            {/* Right: subtext + pill CTA */}
            <div className="lg:mb-2 max-w-xs">
              <p className="font-body text-white/55 text-base leading-relaxed mb-7">
                Created for people who dream of West Africa — and want to live it,
                not just visit.
              </p>

              <a
                href="#getting-there"
                className="inline-flex items-center gap-2 bg-white text-[#1A1508] pl-6 pr-1.5 py-1.5 rounded-full font-body text-sm font-medium hover:bg-[#EDE3CF] transition-colors"
              >
                Plan Your Trip
                <span className="w-8 h-8 bg-[#D4483C] rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 md:gap-16 border-t border-white/10 pt-8 mt-12 max-w-lg">
            {[
              { value: '80 GHS', label: 'Budget Bus' },
              { value: '30 Days', label: 'Visa-Free' },
              { value: '~47 XOF', label: 'Per 1 GHS' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-xl md:text-2xl text-white">{s.value}</p>
                <p className="font-body text-[10px] text-white/30 uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
