import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-md border-b border-gold/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2">
            
              UrbanCuts
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="btn-secondary text-sm"
            >
              Book Now
            </button>
            <a
              href="tel:+916350624971"
              className="btn-primary text-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:bg-dark-secondary focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-dark-secondary border-t border-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gold hover:bg-dark-bg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={onBookClick}
                className="w-full mt-4 btn-secondary text-sm"
              >
                Book Appointment
              </button>
              <a
                href="tel:+916350624971"
                className="block w-full btn-primary text-sm text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
