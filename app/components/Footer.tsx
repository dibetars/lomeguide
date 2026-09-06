export default function Footer() {
  return (
    <footer className="bg-[#1A1508] text-white pt-12 md:pt-16 px-5 md:px-12 pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
          <div>
            <p
              className="font-display font-extrabold uppercase text-white leading-none mb-2"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              Have an
            </p>
            <p
              className="font-serif italic font-light text-[#FFCB00] leading-none mb-2"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              incredible time
            </p>
            <p
              className="font-display font-extrabold uppercase text-[#006A4E] leading-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              in Togo 🇹🇬
            </p>
          </div>
          <div>
            <p className="font-body text-[10px] text-white/30 uppercase tracking-widest mb-3">
              Key Resources
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://voyage.gouv.tg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  voyage.gouv.tg — Visas &amp; Declarations
                </a>
              </li>
              <li>
                <a
                  href="https://gozem.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  gozem.co — Ride App
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8" />
      </div>
    </footer>
  )
}
