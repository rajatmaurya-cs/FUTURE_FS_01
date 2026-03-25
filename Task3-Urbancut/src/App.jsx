import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FloatingButton from './components/FloatingButton'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  const [showBooking, setShowBooking] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-dark-bg text-white">
      <Navbar onBookClick={() => setShowBooking(true)} />
      
      {showBooking && (
        <BookingForm onClose={() => setShowBooking(false)} />
      )}

      <Hero onBookClick={() => setShowBooking(true)} />
      <Services onBookClick={() => setShowBooking(true)} />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButton />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 bg-gold text-black p-3 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all hidden md:flex items-center justify-center z-40"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App
