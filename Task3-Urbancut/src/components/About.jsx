import { FiCheck } from 'react-icons/fi'

export default function About() {
  const features = [
    { icon: '🏆', title: '15+ Years Experience', description: 'Expert barbers with decades of collective experience' },
    { icon: '🧼', title: 'Hygiene First', description: '100% sterilized tools and sanitary practices' },
    { icon: '💎', title: 'Premium Products', description: 'Only international quality products used' },
    { icon: '⚡', title: 'Quick Service', description: 'Efficient appointments without compromising quality' }
  ]

  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gold/20 relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlciUyMHNob3B8ZW58MHx8MHx8fDA%3D"
                alt="UrbanCuts team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">UrbanCuts</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              UrbanCuts was founded with a mission to bring premium grooming experiences to every gentleman. 
              We believe that looking good is not a luxury—it's a necessity that boosts confidence and self-esteem.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Our salon combines modern aesthetics with traditional grooming techniques. Every barber on our team 
              is hand-picked and trained to deliver excellence. We use only premium products and maintain the highest 
              standards of hygiene and professionalism.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-gold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 my-10 p-6 bg-dark-bg rounded-xl border border-gold/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">500+</div>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="text-center border-l border-r border-gold/10">
                <div className="text-3xl font-bold text-gold">4.9★</div>
                <p className="text-gray-400 text-sm">Avg Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">24/7</div>
                <p className="text-gray-400 text-sm">WhatsApp Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
