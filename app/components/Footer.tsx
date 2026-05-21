export default function Footer() {
  return (
    <footer className="bg-[#1A1508] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {['#D4483C', '#FFCB00', '#006A4E'].map((color) => (
              <div key={color} className="w-3 h-3" style={{ backgroundColor: color }} />
            ))}
          </div>
          <p className="font-body text-xs text-white/30 text-center">
            Copy this guide, share it with the group chat, and have an incredible time. 🇹🇬✨
          </p>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-white/20">
            Accra → Lomé
          </p>
        </div>
      </div>
    </footer>
  )
}
