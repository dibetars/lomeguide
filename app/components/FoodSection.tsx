import SectionHeader from './SectionHeader'

const spots = [
  { name: 'Le Patio', category: 'Fine Dining', emoji: '🍽️', what: 'Upscale European/African fusion in a gorgeous, romantic setting. Highly recommended for classy meals.' },
  { name: 'Nomads', category: 'Brunch & Dinner', emoji: '✨', what: 'Trendy aesthetics and a fantastic menu — perfect for brunch or a stylish dinner.' },
  { name: 'Le Hangar', category: 'Outdoor Bar', emoji: '🌙', what: 'Stylish outdoor evening favorite with a lively, cool atmosphere and great food.' },
  { name: 'La Sunset Beach Lounge', category: 'Beach & Drinks', emoji: '🌅', what: 'Highly recommended chill spot for drinks, meals, and seaside relaxing.' },
  { name: 'Lomé Street Kitchen', category: 'Street Food', emoji: '🥘', what: 'The go-to spot for authentic, elevated street food flavors.' },
  { name: 'Songhai', category: 'Local Cuisine', emoji: '🫙', what: 'Delicious, hearty local and regional delicacies done right.' },
  { name: 'Ci Gusta', category: 'Italian', emoji: '🍕', what: 'Premium pizza, pasta, and gelato — the Italian fix in Lomé.' },
  { name: 'Mr. Burger', category: 'Burgers', emoji: '🍔', what: "Widely known for serving up Togo's best burger." },
  { name: 'Picasso Togo', category: 'Fusion', emoji: '🎨', what: 'Artful ambiance paired with good fusion food.' },
  { name: 'La Huqqa', category: 'Lounge', emoji: '💨', what: 'Food, drinks, hookah, and a solid lounge vibe all in one.' },
  { name: 'ZanziBar Lomé', category: 'Cocktail Bar', emoji: '🍹', what: 'Widely recommended, laid-back spot for catching premium cocktails.' },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spots.map((spot) => (
            <div
              key={spot.name}
              className="bg-white p-6 flex flex-col gap-3 hover:shadow-md transition-shadow border border-stone-100"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{spot.emoji}</span>
                <span className="font-body text-[9px] uppercase tracking-widest text-stone-400">
                  {spot.category}
                </span>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-stone-800 mb-1">{spot.name}</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">{spot.what}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
