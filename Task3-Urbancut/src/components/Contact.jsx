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


  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to book your appointment? Reach out to us via phone, WhatsApp, or visit our salon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex gap-6 p-6 bg-dark-secondary border border-gold/10 rounded-xl hover:border-gold/30 transition-all"
              >
                <div className="text-gold flex-shrink-0 pt-1">{info.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gold mb-1">{info.title}</h3>
                  <p className="text-white font-semibold text-lg">{info.content}</p>
                  <p className="text-gray-400 text-sm mt-1">{info.subtext}</p>
                  {info.action && (
                    <a
                      href={info.action.href}
                      target={info.action.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-gold font-semibold hover:text-yellow-300 transition-colors"
                    >
                      {info.action.text} →
                    </a>
                  )}
                </div>
              </div>
            ))}






















}