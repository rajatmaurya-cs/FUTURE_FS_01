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