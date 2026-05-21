import Nav from './components/Nav'
import Hero from './components/Hero'
import GuideAccordion from './components/GuideAccordion'
import DiagonalMarquee from './components/DiagonalMarquee'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DiagonalMarquee />
        <GuideAccordion />
      </main>
      <Footer />
    </>
  )
}
