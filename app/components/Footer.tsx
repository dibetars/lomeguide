export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="font-display text-4xl md:text-5xl font-light italic text-white mb-2">
              Have an incredible time
            </p>
            <p className="font-display text-4xl md:text-5xl font-light text-[#006A4E]">
              in Togo 🇹🇬
            </p>
          </div>
          <div>
            <p className="font-body text-[10px] text-stone-500 uppercase tracking-widest mb-3">
              Key Resources
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://voyage.gouv.tg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-stone-400 hover:text-white transition-colors"
                >
                  voyage.gouv.tg — Visas &amp; Declarations
                </a>
              </li>
              <li>
                <a
                  href="https://gozem.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-stone-400 hover:text-white transition-colors"
                >
                  gozem.co — Ride App
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {['#D21034', '#FFCB00', '#006A4E'].map((color) => (
              <div
                key={color}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="font-body text-xs text-stone-600 text-center">
            Copy this guide, share it with the group chat, and have an incredible time. 🇹🇬✨
          </p>
          <p className="font-body text-xs text-stone-700">Accra → Lomé</p>
        </div>
      </div>
    </footer>
  )
}
