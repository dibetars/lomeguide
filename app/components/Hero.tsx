export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10"
    >
      <span className="text-6xl md:text-7xl mb-8 block">🇹🇬</span>

      <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#006A4E] mb-7">
        Accra → Lomé · Your Complete Weekend Guide
      </p>

      <h1
        className="font-display font-light italic text-stone-900 leading-none mb-3"
        style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
      >
        The Quick &amp; Dirty
      </h1>
      <h1
        className="font-display font-light text-stone-900 leading-none mb-8"
        style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
      >
        Guide to Lomé
      </h1>

      <p className="font-body text-stone-500 max-w-md text-base leading-relaxed mb-12">
        One of the easiest, most vibrant weekend getaways from Ghana — incredible food, a
        laid-back French-West African vibe, and great beaches.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <a
          href="#getting-there"
          className="bg-[#006A4E] text-white px-8 py-3.5 font-body text-xs uppercase tracking-widest hover:bg-[#005a42] transition-colors"
        >
          Plan Your Trip
        </a>
        <a
          href="#eat"
          className="border border-stone-300 text-stone-600 px-8 py-3.5 font-body text-xs uppercase tracking-widest hover:border-[#006A4E] hover:text-[#006A4E] transition-colors"
        >
          Eat &amp; Drink
        </a>
      </div>

      <div className="grid grid-cols-3 gap-6 md:gap-16 border-t border-stone-200 pt-8 max-w-xl w-full mb-12">
        {[
          { value: '80 GHS', label: 'Budget Bus' },
          { value: '30 Days', label: 'Visa-Free (Africa)' },
          { value: '~47 XOF', label: 'Per 1 GHS' },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl md:text-3xl font-light text-stone-800">{s.value}</p>
            <p className="font-body text-[10px] text-stone-400 uppercase tracking-widest mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-stone-300 mx-auto"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
