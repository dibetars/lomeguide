import SectionHeader from './SectionHeader'

const features = [
  {
    icon: '🚗',
    title: 'Multiple Transport Types',
    desc: 'Book a car, local motorcycle taxi (zemidjan), or tricycle (tuk-tuk) depending on your budget and group size.',
  },
  {
    icon: '💳',
    title: 'Cashless & Convenient',
    desc: 'Link your payment method or pay via mobile money within the app to avoid currency conversion headaches with drivers.',
  },
  {
    icon: '🏷️',
    title: 'No Haggling Needed',
    desc: "Upfront pricing means you won't get targeted with tourist tax prices.",
  },
  {
    icon: '📍',
    title: 'Safety First',
    desc: 'Features verified drivers, in-app GPS tracking, and built-in safety features throughout your ride.',
  },
]

export default function GozemSection() {
  return (
    <section id="getting-around" className="py-20 md:py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="09 — Getting Around"
          title="Download Gozem"
          subtitle="Safe, reliable, and affordable transport around Lomé. Think of it as the Uber of Francophone West Africa."
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {features.map((feat) => (
              <div key={feat.title} className="flex gap-4">
                <span className="text-xl flex-shrink-0">{feat.icon}</span>
                <div>
                  <p className="font-body text-sm font-semibold text-stone-800 mb-1">{feat.title}</p>
                  <p className="font-body text-sm text-stone-500 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#006A4E] text-white p-8">
            <span className="text-4xl block mb-6">📱</span>
            <p className="font-body text-[10px] uppercase tracking-widest text-[#FFCB00] mb-3">
              Pro Tip
            </p>
            <p className="font-display text-2xl font-light italic mb-4">
              Download before you cross
            </p>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              Set up the Gozem app using your Ghanaian phone number{' '}
              <strong className="text-white">before</strong> you cross the border — so
              you&apos;re ready to request a ride the second you step out of immigration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
