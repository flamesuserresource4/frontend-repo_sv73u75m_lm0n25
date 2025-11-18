import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import FeatureAlternating from './components/FeatureAlternating'
import Comparison from './components/Comparison'
import Portfolio from './components/Portfolio'
import ProductOverview from './components/ProductOverview'
import CTABanner from './components/CTABanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Testimonials />
      <Problems />
      <HowItWorks />
      <FeatureAlternating />
      <Comparison />
      <Portfolio />
      <ProductOverview />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
