import Nav from './components/Nav'
import Hero from './components/Hero'
import GuideAccordion from './components/GuideAccordion'
import DiagonalMarquee from './components/DiagonalMarquee'
import Footer from './components/Footer'
import { TripPlannerRoot } from './components/trip-planner/TripPlannerRoot'

export default function Home() {
  return (
    <TripPlannerRoot>
      <Nav />
      <main>
        <Hero />
        <DiagonalMarquee />
        <GuideAccordion />
      </main>
      <Footer />
    </TripPlannerRoot>
  )
}
