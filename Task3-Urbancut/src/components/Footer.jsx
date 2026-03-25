import { FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FiInstagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiFacebook size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FiTwitter size={20} />, href: 'https://twitter.com', label: 'Twitter' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-secondary border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                U
              </div>
              <span className="text-2xl font-bold gradient-text">rbanCuts</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium grooming experience for modern men. Look sharp, feel confident.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-yellow-300 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-6 flex items-center gap-2">
              <FiClock size={20} /> Hours
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <span className="font-semibold">Monday - Sunday</span>
                <p>10:00 AM - 8:00 PM</p>
              </li>
              <li>
                <span className="font-semibold">Closed</span>
                <p>Monday (Weekly off)</p>
              </li>
              <li className="bg-gold/10 border border-gold/20 rounded-lg p-3 mt-4">
                <p className="text-gold font-semibold">Walk-ins Welcome!</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-gray-400">
                <FiMapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <span>Sri Vijaynagar, Sri Ganganagar, Rajasthan - 335704</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <FiPhone size={18} className="text-gold flex-shrink-0 mt-1" />
                <a href="tel:+916350624971" className="hover:text-gold transition-colors">
                  +91 63506 24971
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <FiMail size={18} className="text-gold flex-shrink-0 mt-1" />
                <a href="mailto:rajatmaurya176@gmail.com" className="hover:text-gold transition-colors">
                  rajatmaurya176@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div>
            <p>
              &copy; {currentYear} UrbanCuts. All rights reserved. | 
              <a href="#" className="text-gold hover:text-yellow-300 ml-1">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-6 text-center">
            <div>
              <div className="text-gold font-bold">100%</div>
              <p>Hygienic</p>
            </div>
            <div className="text-gold">|</div>
            <div>
              <div className="text-gold font-bold">Expert</div>
              <p>Barbers</p>
            </div>
            <div className="text-gold">|</div>
            <div>
              <div className="text-gold font-bold">Premium</div>
              <p>Products</p>
            </div>
          </div>

          {/* Booking CTA */}
          <a
            href="https://wa.me/916350624971?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20UrbanCuts"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gold text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </footer>
  )
}
