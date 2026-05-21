import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import GuideAccordion from './components/GuideAccordion'
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
        <GuideAccordion />
        <DiagonalMarquee />
      </main>
      <Footer />
    </>
  )
}
