export const STEPS = [
  { id: 'dates', number: '01', label: 'Dates' },
  { id: 'passport', number: '02', label: 'Passport' },
  { id: 'crossing', number: '03', label: 'Crossing' },
  { id: 'stay', number: '04', label: 'Lomé stay' },
  { id: 'gozem', number: '05', label: 'Gozem' },
  { id: 'eat', number: '06', label: 'Eat' },
  { id: 'nightlife', number: '07', label: 'Nightlife' },
  { id: 'kpalime', number: '08', label: 'Kpalimé' },
  { id: 'days', number: '09', label: 'Days' },
  { id: 'review', number: '10', label: 'Review' },
] as const

export const LOME_STAYS = [
  { id: 'marcelo', name: 'Marcelo Beach Club', tags: ['Top Pick', 'Beachfront'], emoji: '🏖️', tier: 'beach' as const },
  { id: 'nomads', name: 'Nomads Hotel', tags: ['Top Pick', 'Lifestyle Vibe'], emoji: '✨', tier: 'mid' as const },
  { id: 'pure-plage', name: 'Pure Plage', tags: ['Beach Luxury', 'Private Beach'], emoji: '🌊', tier: 'beach' as const },
  { id: 'patio', name: 'Le Patio', tags: ['Boutique', 'Central'], emoji: '🌿', tier: 'mid' as const },
  { id: 'onomo', name: 'ONOMO Hotel Lomé', tags: ['Beachfront', 'Business'], emoji: '🏨', tier: 'mid' as const },
  { id: 'airbnb', name: 'Budget Airbnbs', tags: ['Best Value', 'From $10/night'], emoji: '🏠', tier: 'budget' as const },
]

export const KPALIME_STAYS = [
  { id: 'parc', name: 'Hôtel Parc Résidence', tags: ['Gardens', 'Pool'], emoji: '🌳', tier: 'mid' as const },
  { id: 'akwin', name: 'Hôtel Akwin', tags: ['Highly rated'], emoji: '🏨', tier: 'mid' as const },
  { id: 'kpalime-airbnb', name: 'Kpalimé Airbnb', tags: ['Best value'], emoji: '🏠', tier: 'budget' as const },
]

export const EATS = [
  { id: 'le-patio', name: 'Le Patio', category: 'Fine Dining', emoji: '🍽️', band: 'fine' as const },
  { id: 'chef-komi', name: 'Chef Komi', category: 'Pâtisserie', emoji: '🍰', band: 'casual' as const },
  { id: 'nomads', name: 'Nomads', category: 'Brunch & Dinner', emoji: '✨', band: 'fine' as const },
  { id: 'le-hangar', name: 'Le Hangar', category: 'Outdoor Bar', emoji: '🌙', band: 'mid' as const },
  { id: 'sunset', name: 'La Sunset Beach Lounge', category: 'Beach & Drinks', emoji: '🌅', band: 'mid' as const },
  { id: 'street-kitchen', name: 'Lomé Street Kitchen', category: 'Street Food', emoji: '🥘', band: 'street' as const },
  { id: 'songhai', name: 'Songhai', category: 'Local Cuisine', emoji: '🫙', band: 'casual' as const },
  { id: 'ci-gusta', name: 'Ci Gusta', category: 'Italian', emoji: '🍕', band: 'mid' as const },
  { id: 'mr-burger', name: 'Mr. Burger', category: 'Burgers', emoji: '🍔', band: 'street' as const },
  { id: 'picasso', name: 'Picasso Togo', category: 'Fusion', emoji: '🎨', band: 'fine' as const },
  { id: 'la-huqqa', name: 'La Huqqa', category: 'Lounge', emoji: '💨', band: 'mid' as const },
  { id: 'zanzibar', name: 'ZanziBar Lomé', category: 'Cocktail Bar', emoji: '🍹', band: 'mid' as const },
]

export const NIGHTLIFE = [
  { id: 'mad', name: 'MAD Complexe Lomé', vibe: 'High Energy', emoji: '🎉', band: 'club' as const },
  { id: 'fevrier', name: 'Hotel 2 Février Rooftop', vibe: 'Rooftop Views', emoji: '🥂', band: 'upscale' as const },
  { id: 'oya', name: 'Oya Bar', vibe: 'Pre-Night Cocktails', emoji: '🎵', band: 'bar' as const },
  { id: 'galion', name: 'Le Galion', vibe: 'Live Music', emoji: '🎸', band: 'bar' as const },
]

export const DAYTIME = [
  { id: 'beach', name: 'Beachfront / Marcelo', emoji: '🏖️' },
  { id: 'town', name: 'Lomé town center', emoji: '🏙️' },
  { id: 'pure-plage', name: 'Afternoon at Pure Plage', emoji: '🌊' },
  { id: 'sunset', name: 'La Sunset Beach Lounge', emoji: '🌅' },
  { id: 'cascade', name: 'Cascade de Kpimé', emoji: '🌿' },
  { id: 'markets', name: 'Kpalimé markets & hills', emoji: '🧺' },
]
