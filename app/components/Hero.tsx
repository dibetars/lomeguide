export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden bg-[#060E0A]"
      style={{ minHeight: 'calc(72vh + 144px)' }}
    >
      {/* ── Background video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/togo.mov" type="video/mp4" />
        <source src="/togo.mov" type="video/quicktime" />
      </video>

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(6,20,10,0.72) 0%, rgba(8,14,26,0.65) 50%, rgba(2,5,9,0.80) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Togo green glow right ── */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 40%, rgba(0,106,78,0.18) 0%, transparent 65%)',
          zIndex: 2,
        }}
      />

      {/* ── Red glow bottom-left ── */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, rgba(212,72,60,0.12) 0%, transparent 60%)',
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-8 md:px-12"
        style={{ zIndex: 3 }}
      >
        {/* Push to bottom */}
        <div className="flex-1 flex flex-col justify-end pb-14 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* Left: headline */}
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
              <p className="font-body text-white/60 text-base leading-relaxed mb-7">
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

        </div>
      </div>
    </section>
  )
}
