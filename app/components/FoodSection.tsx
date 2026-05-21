import SectionHeader from './SectionHeader'

const spots = [
  { name: 'Le Patio', what: 'Upscale European/African fusion in a gorgeous, romantic setting. Highly recommended for classy meals.' },
  { name: 'Nomads', what: 'Trendy aesthetics and a fantastic menu — perfect for brunch or a stylish dinner.' },
  { name: 'Le Hangar', what: 'Stylish outdoor evening favorite with a lively, cool atmosphere and great food.' },
  { name: 'La Sunset Beach Lounge', what: 'Highly recommended chill spot for drinks, meals, and seaside relaxing.' },
  { name: 'Lomé Street Kitchen', what: 'The go-to spot for authentic, elevated street food flavors.' },
  { name: 'Songhai', what: 'Delicious, hearty local and regional delicacies done right.' },
  { name: 'Ci Gusta', what: 'Premium pizza, pasta, and gelato — the Italian fix in Lomé.' },
  { name: 'Mr. Burger', what: "Widely known for serving up Togo's best burger." },
  { name: 'Picasso Togo', what: 'Artful ambiance paired with good fusion food.' },
  { name: 'La Huqqa', what: 'Food, drinks, hookah, and a solid lounge vibe all in one.' },
  { name: 'ZanziBar Lomé', what: 'Widely recommended, laid-back spot for catching premium cocktails.' },
]

export default function FoodSection() {
  return (
    <section id="eat" className="py-20 md:py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="07 — Where to Eat & Drink"
          title="The Food Scene is Elite"
          subtitle="A mix of French culinary standards, fresh seafood, local Togolese flavors, and international staples."
        />

        <div className="bg-white overflow-hidden border border-stone-100">
          <div className="grid grid-cols-[1fr_2fr] border-b border-stone-100 px-6 py-3 bg-stone-50">
            <p className="font-body text-[10px] uppercase tracking-widest text-stone-400">Spot</p>
            <p className="font-body text-[10px] uppercase tracking-widest text-stone-400">
              What to Expect
            </p>
          </div>
          {spots.map((spot, i) => (
            <div
              key={spot.name}
              className={`grid grid-cols-[1fr_2fr] px-6 py-4 gap-4 hover:bg-[#FAF7F2] transition-colors ${
                i < spots.length - 1 ? 'border-b border-stone-50' : ''
              }`}
            >
              <p className="font-body text-sm font-medium text-stone-800">{spot.name}</p>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{spot.what}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
