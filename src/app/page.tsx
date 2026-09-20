import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CoverageGrid } from './components/CoverageGrid'
import { WhyChooseUs } from './components/WhyChooseUs'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CoverageGrid />
      <WhyChooseUs />
      <QuoteForm />
      <Footer />
    </main>
  )
}
