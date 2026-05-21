import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import GettingThere from './components/GettingThere'
import VisaSection from './components/VisaSection'
import CurrencySection from './components/CurrencySection'
import BorderTips from './components/BorderTips'
import StaySection from './components/StaySection'
import FoodSection from './components/FoodSection'
import NightlifeSection from './components/NightlifeSection'
import ItinerariesSection from './components/ItinerariesSection'
import GozemSection from './components/GozemSection'
import DiagonalMarquee from './components/DiagonalMarquee'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee
          dark
          items={[
            '🇹🇬 Lomé',
            '🏖️ Beaches',
            '🍽️ Food',
            '🌙 Nightlife',
            '🛵 Gozem',
            '✈️ Accra–Lomé',
            '🥂 Drinks',
            '🌴 Vibes',
            '🎵 Music',
          ]}
        />
        <GettingThere />
        <VisaSection />
        <CurrencySection />
        <BorderTips />
        <StaySection />
        <Marquee
          dark={false}
          items={[
            '🍽️ Le Patio',
            '🍔 Mr. Burger',
            '🍕 Ci Gusta',
            '🍹 ZanziBar',
            '🌙 Le Hangar',
            '🥂 Oya Bar',
            '🎉 MAD Complexe',
            '🏖️ Sunset Beach',
          ]}
        />
        <FoodSection />
        <DiagonalMarquee />
        <NightlifeSection />
        <ItinerariesSection />
        <GozemSection />
      </main>
      <Footer />
    </>
  )
}
