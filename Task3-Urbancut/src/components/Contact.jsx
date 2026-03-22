import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMapPin size={28} />,
      title: 'Location',
      content: 'Sri Vijaynagar, Sri Ganganagar',
      subtext: 'Rajasthan - 335704'
    },
    {
      icon: <FiPhone size={28} />,
      title: 'Phone',
      content: '+91 63506 24971',
      subtext: 'Available 10 AM - 8 PM',
      action: { text: 'Call Now', href: 'tel:+916350624971' }
    },
    {
      icon: <FiMail size={28} />,
      title: 'WhatsApp',
      content: '+91 63506 24971',
      subtext: 'Quick responses guaranteed',
      action: { text: 'Message', href: 'https://wa.me/916350624971' }
    },
    {
      icon: <FiClock size={28} />,
      title: 'Hours',
      content: '10:00 AM - 8:00 PM',
      subtext: 'All days (Closed on Mondays)'
    }
  ]























}