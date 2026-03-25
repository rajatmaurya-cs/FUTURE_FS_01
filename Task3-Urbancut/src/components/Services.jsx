import { FiScissors, FiTrendingUp } from 'react-icons/fi'

export default function Services({ onBookClick }) {
  const services = [
    {
      id: 1,
      name: 'Professional Haircut',
      price: '₹299',
      duration: '30 min',
      description: 'Expert scissor cut with style consultation tailored to your face shape and preferences',
      icon: '✂️'
    },
    {
      id: 2,
      name: 'Beard Styling',
      price: '₹199',
      duration: '20 min',
      description: 'Precision beard trim, shaping, and styling with premium beard oil treatment',
      icon: '🧔'
    },
    {
      id: 3,
      name: 'Premium Facial',
      price: '₹499',
      duration: '45 min',
      description: 'Complete facial treatment with cleansing, moisturizing, and skin rejuvenation',
      icon: '💆'
    },
    {
      id: 4,
      name: 'Hair Spa',
      price: '₹399',
      duration: '40 min',
      description: 'Deep conditioning treatment to nourish, strengthen, and restore hair vitality',
      icon: '🧴'
    },
    {
      id: 5,
      name: 'Combo Package',
      price: '₹749',
      duration: '90 min',
      description: 'Haircut + Beard Styling + Head Massage - Complete grooming experience',
      icon: '⭐'
    },
    {
      id: 6,
      name: 'Groom Package',
      price: '₹999',
      duration: '120 min',
      description: 'Ultimate experience: Haircut + Beard + Facial + Hair Spa + Massage',
      icon: '👑'
    }
  ]

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium grooming services crafted to perfection. From classic cuts to complete wellness packages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-hover bg-dark-secondary border border-gold/10 rounded-xl p-8 group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gold mb-2">{service.name}</h3>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-gold">{service.price}</span>
                <span className="text-gray-400">/ {service.duration}</span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <button
                onClick={onBookClick}
                className="w-full bg-gold/10 hover:bg-gold hover:text-black text-gold font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Looking for a Custom Package?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We can create personalized grooming packages tailored to your specific needs and budget.
          </p>
          <button
            onClick={onBookClick}
            className="btn-primary"
          >
            Customize Your Package
          </button>
        </div>
      </div>
    </section>
  )
}
