import { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero({ onBookClick }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22pattern%22 x=%220%22 y=%220%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%224%22 fill=%22%23d4af37%22 opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23pattern)%22/%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-semibold">
                  Premium Grooming Experience ✨
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Look Sharp.<br />
                <span className="gradient-text">Feel Confident.</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Welcome to UrbanCuts — where premium grooming meets exceptional service. Our expert barbers craft the perfect cut that matches your style and personality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onBookClick}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Book Appointment <FiArrowRight />
                </button>
                <a
                  href="tel:+916350624971"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  Call Now: +91 63506 24971
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>100% Hygienic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Expert Barbers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Premium Products</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gold/20 relative shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1536520002442-39764a41e987?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="UrbanCuts salon interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-dark-secondary border border-gold/30 rounded-xl p-4 shadow-lg backdrop-blur-sm">
                <p className="text-gold font-bold text-lg">500+ Happy Clients</p>
                <p className="text-gray-400 text-sm">Trusted by professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="text-gold text-3xl">↓</div>
      </div>
    </section>
  )
}
