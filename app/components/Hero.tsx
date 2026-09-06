import PlanTripButton from './PlanTripButton'

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
        <source src="/togo.mp4" type="video/mp4" />
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
        className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-5 md:px-12"
        style={{ zIndex: 3 }}
      >
        {/* Push to bottom — extra mobile pad so the marquee does not cover the CTA */}
        <div className="flex-1 flex flex-col justify-end pb-36 sm:pb-28 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">

            {/* Left: headline */}
            <h1
              className="font-hero italic font-black text-white leading-[0.88]"
              style={{ fontSize: 'clamp(2.7rem, 11vw, 8.5rem)' }}
            >
              Live the Lomé<br />
              you&apos;ve only<br />
              <span style={{ color: '#FFCB00' }}>heard about</span>
            </h1>

            {/* Right: subtext + pill CTA */}
            <div className="lg:mb-2 max-w-xs">
              <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed mb-5 sm:mb-7">
                Created for people who dream of West Africa — and want to live it,
                not just visit.
              </p>
              <PlanTripButton />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
