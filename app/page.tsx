import Nav from './components/Nav'
import Hero from './components/Hero'
import GettingThere from './components/GettingThere'
import VisaSection from './components/VisaSection'
import CurrencySection from './components/CurrencySection'
import BorderTips from './components/BorderTips'
import StaySection from './components/StaySection'
import FoodSection from './components/FoodSection'
import NightlifeSection from './components/NightlifeSection'
import ItinerariesSection from './components/ItinerariesSection'
import GozemSection from './components/GozemSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GettingThere />
        <VisaSection />
        <CurrencySection />
        <BorderTips />
        <StaySection />
        <FoodSection />
        <NightlifeSection />
        <ItinerariesSection />
        <GozemSection />
      </main>
      <Footer />
    </>
  )
}
