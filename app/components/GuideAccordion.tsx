'use client'

import { useState } from 'react'
import CurrencyConverter from './CurrencyConverter'

// ── Togo flag palette ──────────────────────────────────────────────────
const FLAG = ['#006A4E', '#FFCB00', '#D4483C'] as const
const TEXT_ON = { '#006A4E': '#FFCB00', '#FFCB00': '#1A1508', '#D4483C': '#FFCB00' } as const

// ── Section data ───────────────────────────────────────────────────────
const sections = [
  {
    id: 'visa',
    number: '01',
    label: 'Visa & Entry',
    title: 'Know Your Passport',
    content: () => (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🌍</span>
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-[#006A4E]">African Passport</p>
              <p className="font-body text-[10px] text-stone-400">ECOWAS & All African Countries</p>
            </div>
          </div>
          <span className="inline-block bg-[#006A4E] text-white font-body text-[10px] uppercase tracking-widest px-3 py-1 mb-4 rounded-full">Free & Visa-Exempt</span>
          <p className="font-body text-sm text-stone-600 leading-relaxed mb-5">Togo allows visa-free entry to all African country nationals for stays of up to 30 days.</p>
          <div className="border-t border-stone-100 pt-5 space-y-3">
            <p className="font-body text-xs font-semibold text-stone-700 uppercase tracking-widest">Required</p>
            <div className="flex gap-2 font-body text-sm text-stone-600"><span className="text-[#006A4E] flex-shrink-0">→</span>Complete the mandatory online declaration at <strong>voyage.gouv.tg</strong></div>
            <div className="flex gap-2 font-body text-sm text-stone-600"><span className="text-[#006A4E] flex-shrink-0">→</span>Print your travel slip and present it at the border</div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🌐</span>
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-500">Non-African Passport</p>
              <p className="font-body text-[10px] text-stone-400">US, UK, Europe, Asia & others</p>
            </div>
          </div>
          <span className="inline-block bg-stone-800 text-white font-body text-[10px] uppercase tracking-widest px-3 py-1 mb-4 rounded-full">E-Visa Required</span>
          <p className="font-body text-sm text-stone-600 leading-relaxed mb-5">Cannot get a visa-on-arrival at the land border. Apply beforehand via the official government portal.</p>
          <div className="border-t border-stone-100 pt-5 space-y-3">
            <p className="font-body text-xs font-semibold text-stone-700 uppercase tracking-widest">Required</p>
            <div className="flex gap-2 font-body text-sm text-stone-600"><span className="text-stone-400 flex-shrink-0">→</span>Apply for E-Visa at <strong>voyage.gouv.tg</strong> before travel</div>
            <div className="flex gap-2 font-body text-sm text-stone-600"><span className="text-stone-400 flex-shrink-0">→</span>Print approval & present at Togolese checkpoint</div>
            <div className="flex gap-2 font-body text-sm text-stone-600"><span className="text-stone-400 flex-shrink-0">→</span>Fill out the white arrival form at the border</div>
          </div>
        </div>
        <div className="md:col-span-2 flex gap-4 bg-red-50 border-l-4 border-[#D4483C] p-5 rounded-r-lg">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="font-body text-sm text-stone-600 leading-relaxed"><strong>Warning:</strong> Do not pay unauthorized tips or &quot;dashes&quot; to strangers or border handlers. Stick strictly to official immigration counters.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'getting-there',
    number: '02',
    label: 'Getting There',
    title: 'Accra to the Border',
    content: () => (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#C4873A] text-white p-8 rounded-xl flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-3">Budget Option</p>
              <p className="font-display font-extrabold text-white leading-none" style={{ fontSize: '4rem' }}>80</p>
              <p className="font-display font-bold text-lg text-white">GHS</p>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-white mb-2">🚌 12-Seater Bus</p>
              <p className="font-body text-sm text-white/75 leading-relaxed">Cheap and cheerful, but you&apos;ll wait for the bus to fill up before departing Tudu.</p>
            </div>
          </div>
          <div className="bg-[#006A4E] text-white p-8 rounded-xl flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-3">Comfort Option</p>
              <p className="font-display font-extrabold text-white leading-none" style={{ fontSize: '4rem' }}>200</p>
              <p className="font-display font-bold text-lg text-white">GHS</p>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-white mb-2">🚗 4-Seater Sedan</p>
              <p className="font-body text-sm text-white/75 leading-relaxed">Faster, more legroom, and gets you to the border with fewer stops along the way.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-[#006A4E]/8 border-l-4 border-[#006A4E] p-5 rounded-r-lg">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="font-body text-sm text-stone-700 leading-relaxed"><strong>Health Pro-Tip:</strong> Everyone must bring their valid <strong>Passport</strong> and physical <strong>Yellow Card</strong> (Yellow Fever vaccination card). Border officials on both sides check this strictly.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'border-tips',
    number: '03',
    label: 'Border Tips',
    title: 'Stay Sharp at the Gates',
    content: () => (
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: '🚫', title: 'Ignore the "Border Helpers"', desc: 'Men will offer to carry bags or fast-track your visa. Firmly say no. Walk directly to official immigration buildings yourself.' },
          { icon: '👜', title: 'Hold On to Your Luggage', desc: 'Keep a close eye on your bags while walking between the Ghana and Togo checkpoints.' },
          { icon: '💸', title: 'The "Gate Fee" Scam', desc: 'Unauthorized individuals may ask for cash to pass through the gate. If your documents are valid, you owe no one money. Ask for a receipt — they\'ll back down.' },
          { icon: '📵', title: 'Absolutely No Photography', desc: 'Do not take photos or videos at border checkpoints. Officials take this very seriously and will confiscate your device or issue a fine.' },
        ].map(tip => (
          <div key={tip.title} className="bg-white/60 p-6 rounded-xl flex gap-4">
            <span className="text-2xl flex-shrink-0">{tip.icon}</span>
            <div>
              <p className="font-body text-sm font-semibold text-stone-800 mb-2">{tip.title}</p>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'currency',
    number: '04',
    label: 'Currency & Money',
    title: 'GHS to CFA',
    content: () => (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '📍', title: 'Tudu Station', label: 'Before You Board', desc: 'Informal changers at Tudu are convenient for emergency border cash but often don\'t offer the best rates.' },
            { icon: '🏁', title: 'Aflao Border', label: 'Recommended for Cash', desc: 'Many changers on both sides. Ask 2–3 for rates first. Always count your CFA carefully before handing over your Cedis.' },
            { icon: '🏦', title: 'Lomé Forex Bureaus', label: 'Structured Environment', desc: 'Official Bureaux de Change in the city center, though hours are more restrictive than the 24/7 border market.' },
          ].map(item => (
            <div key={item.title} className="bg-white p-6 rounded-xl border border-stone-100">
              <span className="text-3xl block mb-4">{item.icon}</span>
              <p className="font-body text-[10px] uppercase tracking-widest text-stone-400 mb-1">{item.label}</p>
              <p className="font-body text-sm font-semibold text-stone-800 mb-3">{item.title}</p>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <CurrencyConverter />
      </div>
    ),
  },
  {
    id: 'getting-around',
    number: '05',
    label: 'Getting Around',
    title: 'Download Gozem',
    content: () => (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {[
            { icon: '🚗', title: 'Multiple Transport Types', desc: 'Book a car, local motorcycle taxi (zemidjan), or tricycle (tuk-tuk) depending on your budget and group size.' },
            { icon: '💳', title: 'Cashless & Convenient', desc: 'Link your payment method or pay via mobile money within the app to avoid currency conversion headaches with drivers.' },
            { icon: '🏷️', title: 'No Haggling Needed', desc: "Upfront pricing means you won't get targeted with tourist tax prices." },
            { icon: '📍', title: 'Safety First', desc: 'Features verified drivers, in-app GPS tracking, and built-in safety features throughout your ride.' },
          ].map(feat => (
            <div key={feat.title} className="flex gap-4">
              <span className="text-xl flex-shrink-0">{feat.icon}</span>
              <div>
                <p className="font-body text-sm font-semibold text-stone-800 mb-1">{feat.title}</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#006A4E] text-white p-8 rounded-xl">
          <p className="font-body text-[10px] uppercase tracking-widest text-[#FFCB00] mb-3">Pro Tip</p>
          <p className="font-display text-2xl font-light italic mb-4">Download before you cross</p>
          <p className="font-body text-sm text-white/80 leading-relaxed mb-6">Set up the Gozem app using your Ghanaian phone number <strong className="text-white">before</strong> you cross the border — so you&apos;re ready to request a ride the second you step out of immigration.</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/app/gozem/id1455218097"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-xl border border-white/20"
            >
              <span className="text-2xl flex-shrink-0">🍎</span>
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/50">Download on the</p>
                <p className="font-body text-sm font-semibold text-white">App Store</p>
              </div>
              <span className="ml-auto text-white/40 text-sm">↗</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gozem.passenger"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-xl border border-white/20"
            >
              <span className="text-2xl flex-shrink-0">▶️</span>
              <div>
                <p className="font-body text-[10px] uppercase tracking-widest text-white/50">Get it on</p>
                <p className="font-body text-sm font-semibold text-white">Google Play</p>
              </div>
              <span className="ml-auto text-white/40 text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'stay',
    number: '06',
    label: 'Where to Stay',
    title: 'A Bed for Every Budget',
    content: () => (
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Marcelo Beach Club', tags: ['Top Pick', 'Beachfront'], emoji: '🏖️', url: 'https://maps.app.goo.gl/marcelo-beach-lome' },
            { name: 'Nomads Hotel', tags: ['Top Pick', 'Lifestyle Vibe'], emoji: '✨', url: 'https://www.google.com/maps/search/Nomads+Hotel+Lome+Togo' },
            { name: 'Pure Plage', tags: ['Beach Luxury', 'Private Beach'], emoji: '🌊', url: 'https://www.google.com/maps/search/Pure+Plage+Lome+Togo' },
            { name: 'Le Patio', tags: ['Boutique', 'Central'], emoji: '🌿', url: 'https://www.google.com/maps/search/Le+Patio+Lome+Togo' },
            { name: 'ONOMO Hotel Lomé', tags: ['Beachfront', 'Business'], emoji: '🏨', url: 'https://www.google.com/maps/search/ONOMO+Hotel+Lome+Togo' },
            { name: 'Budget Airbnbs', tags: ['Best Value', 'From $10/night'], emoji: '🏠', url: 'https://www.airbnb.com/s/Lom%C3%A9--Togo' },
          ].map(stay => (
            <a key={stay.name} href={stay.url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all group block">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{stay.emoji}</span>
                <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-sm">↗</span>
              </div>
              <p className="font-body text-sm font-semibold text-stone-800 mb-3">{stay.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {stay.tags.map(tag => (
                  <span key={tag} className="font-body text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-stone-200 text-stone-400">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="flex gap-3 bg-amber-50 border-l-4 border-[#C4873A] p-4 rounded-r-lg">
          <span className="text-lg flex-shrink-0">💡</span>
          <p className="font-body text-xs text-stone-600 leading-relaxed"><strong>Crucial Tip:</strong> When booking Airbnbs, always check if electricity (Cashpower) is included so you don&apos;t get surprised by an extra utility bill.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'eat',
    number: '07',
    label: 'Where to Eat & Drink',
    title: 'The Food Scene is Elite',
    content: () => (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Le Patio', category: 'Fine Dining', emoji: '🍽️', what: 'Upscale European/African fusion in a gorgeous, romantic setting.', url: 'https://www.google.com/maps/search/Le+Patio+Lome+Togo' },
          { name: 'Nomads', category: 'Brunch & Dinner', emoji: '✨', what: 'Trendy aesthetics and a fantastic menu — perfect for brunch or a stylish dinner.', url: 'https://www.google.com/maps/search/Nomads+Hotel+Lome+Togo' },
          { name: 'Le Hangar', category: 'Outdoor Bar', emoji: '🌙', what: 'Stylish outdoor evening favorite with a lively, cool atmosphere.', url: 'https://www.google.com/maps/search/Le+Hangar+Lome+Togo' },
          { name: 'La Sunset Beach Lounge', category: 'Beach & Drinks', emoji: '🌅', what: 'Chill spot for drinks, meals, and seaside relaxing.', url: 'https://www.google.com/maps/search/La+Sunset+Beach+Lounge+Lome+Togo' },
          { name: 'Lomé Street Kitchen', category: 'Street Food', emoji: '🥘', what: 'The go-to spot for authentic, elevated street food flavors.', url: 'https://www.google.com/maps/search/Lome+Street+Kitchen+Togo' },
          { name: 'Songhai', category: 'Local Cuisine', emoji: '🫙', what: 'Delicious, hearty local and regional delicacies done right.', url: 'https://www.google.com/maps/search/Songhai+Lome+Togo' },
          { name: 'Ci Gusta', category: 'Italian', emoji: '🍕', what: 'Premium pizza, pasta, and gelato — the Italian fix in Lomé.', url: 'https://www.google.com/maps/search/Ci+Gusta+Lome+Togo' },
          { name: 'Mr. Burger', category: 'Burgers', emoji: '🍔', what: "Widely known for serving up Togo's best burger.", url: 'https://www.google.com/maps/search/Mr+Burger+Lome+Togo' },
          { name: 'Picasso Togo', category: 'Fusion', emoji: '🎨', what: 'Artful ambiance paired with good fusion food.', url: 'https://www.google.com/maps/search/Picasso+Togo+Lome' },
          { name: 'La Huqqa', category: 'Lounge', emoji: '💨', what: 'Food, drinks, hookah, and a solid lounge vibe all in one.', url: 'https://www.google.com/maps/search/La+Huqqa+Lome+Togo' },
          { name: 'ZanziBar Lomé', category: 'Cocktail Bar', emoji: '🍹', what: 'Widely recommended, laid-back spot for premium cocktails.', url: 'https://www.google.com/maps/search/ZanziBar+Lome+Togo' },
        ].map(spot => (
          <a key={spot.name} href={spot.url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all group block">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{spot.emoji}</span>
              <div className="flex items-center gap-2">
                <span className="font-body text-[9px] uppercase tracking-widest text-stone-400">{spot.category}</span>
                <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-sm">↗</span>
              </div>
            </div>
            <p className="font-body text-sm font-semibold text-stone-800 mb-1">{spot.name}</p>
            <p className="font-body text-sm text-stone-500 leading-relaxed">{spot.what}</p>
          </a>
        ))}
      </div>
    ),
  },
  {
    id: 'nightlife',
    number: '08',
    label: 'Nightlife',
    title: 'Starts Late, Goes Hard',
    content: () => (
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { name: 'MAD Complexe Lomé', desc: 'The legendary Accra nightlife staple from East Legon has touched down in Lomé. Expect high energy, great music, and familiar vibes.', icon: '🎉', vibe: 'High Energy', url: 'https://www.google.com/maps/search/MAD+Complexe+Lome+Togo' },
          { name: 'Hotel 2 Février Rooftop', desc: 'An iconic luxury location. Head here for classy, upscale drinks with a sweeping panoramic view of the entire city skyline.', icon: '🥂', vibe: 'Rooftop Views', url: 'https://www.google.com/maps/search/Hotel+2+Fevrier+Lome+Togo' },
          { name: 'Oya Bar', desc: 'Stylish and lively for starting the night with excellent cocktails, cool crowds, and resident DJs.', icon: '🎵', vibe: 'Pre-Night Cocktails', url: 'https://www.google.com/maps/search/Oya+Bar+Lome+Togo' },
          { name: 'Le Galion', desc: 'A classic, reliable spot with a sophisticated crowd, perfect for drinks, mingling, and frequent live music.', icon: '🎸', vibe: 'Live Music', url: 'https://www.google.com/maps/search/Le+Galion+Lome+Togo' },
        ].map(venue => (
          <a key={venue.name} href={venue.url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl border border-stone-100 hover:border-stone-300 hover:shadow-sm transition-all group flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <span className="text-3xl">{venue.icon}</span>
              <div className="flex items-center gap-2">
                <span className="font-body text-[9px] uppercase tracking-widest text-stone-400">{venue.vibe}</span>
                <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-sm">↗</span>
              </div>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-stone-800 mb-1">{venue.name}</p>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{venue.desc}</p>
            </div>
          </a>
        ))}
      </div>
    ),
  },
  {
    id: 'itineraries',
    number: '09',
    label: 'Curated Itineraries',
    title: 'Pick Your Weekend',
    content: () => (
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { number: '01', title: 'The Chill & Coastal Vibe', mood: '🌊 Beach & Chill', bg: '#006A4E', steps: ['Settle in at Marcelo Beach Club', 'Spend the afternoon on the beachfront', 'Dinner at Picasso Togo', 'Oceanfront nightcaps at ZanziBar'] },
          { number: '02', title: 'City Explorer & High Energy', mood: '🎉 Explore & Party', bg: '#D4483C', steps: ['Explore the Lomé town center', 'Quick lunch at Mr. Burger', 'Unwind at La Sunset Beach Lounge', 'Dinner & hookah at La Huqqa', 'Dive into nightlife at MAD Complexe'] },
          { number: '03', title: 'Ultimate Lifestyle Blend', mood: '✨ Luxury & Lifestyle', bg: '#C4873A', steps: ['Premium brunch at Le Patio', 'Hot afternoon at Pure Plage', 'Breezy open-air dinner at Le Hangar', 'Upscale drink on the 2 Février Rooftop'] },
        ].map(exp => (
          <div key={exp.number} className="text-white p-6 rounded-xl flex flex-col justify-between min-h-[280px]" style={{ backgroundColor: exp.bg }}>
            <div>
              <p className="font-display font-extrabold text-white/20 leading-none mb-3" style={{ fontSize: '3rem' }}>{exp.number}</p>
              <p className="font-body text-[10px] uppercase tracking-widest text-white/60 mb-2">{exp.mood}</p>
              <p className="font-body text-sm font-semibold text-white mb-4">{exp.title}</p>
            </div>
            <ol className="space-y-2">
              {exp.steps.map((step, i) => (
                <li key={i} className="flex gap-3 font-body text-sm text-white/80">
                  <span className="font-display font-bold text-white/30 flex-shrink-0 w-4">{i + 1}</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    ),
  },
]

// ── Component ──────────────────────────────────────────────────────────
export default function GuideAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#1A1508]">
      {sections.map((section, i) => {
        const color = FLAG[i % 3]
        const textColor = TEXT_ON[color]
        const isOpen = openIndex === i

        return (
          <div key={section.id} id={section.id}>
            {/* ── Row header ── */}
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div
                className="flex items-center justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 border-b border-white/5"
                style={{ backgroundColor: isOpen ? color : 'transparent' }}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  {/* Number */}
                  <span
                    className="font-body text-[10px] uppercase tracking-[0.4em] flex-shrink-0 transition-colors duration-300"
                    style={{ color: isOpen ? textColor : 'rgba(255,255,255,0.25)' }}
                  >
                    {section.number}
                  </span>

                  {/* Title */}
                  <h2
                    className="font-display font-extrabold uppercase leading-none transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
                      color: isOpen ? textColor : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Label pill + toggle */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="hidden md:block font-body text-[10px] uppercase tracking-widest transition-colors duration-300"
                    style={{ color: isOpen ? textColor : 'rgba(255,255,255,0.25)' }}
                  >
                    {section.label}
                  </span>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? textColor : 'transparent',
                      border: isOpen ? `2px solid ${textColor}` : '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    <span
                      className="text-sm font-bold leading-none transition-all duration-300"
                      style={{
                        color: isOpen ? color : 'rgba(255,255,255,0.3)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* ── Expanded content ── */}
            <div
              className="overflow-hidden transition-all duration-500"
              style={{ maxHeight: isOpen ? '2000px' : '0px' }}
            >
              <div
                className="px-6 md:px-12 py-10 md:py-14"
                style={{ backgroundColor: `${color}18` }}
              >
                {/* Sub-header */}
                <div className="mb-8">
                  <p
                    className="font-body text-[10px] uppercase tracking-[0.4em] mb-3"
                    style={{ color }}
                  >
                    {section.number} — {section.label}
                  </p>
                </div>
                {section.content()}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
