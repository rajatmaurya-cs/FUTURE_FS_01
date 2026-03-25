export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Arjun Kumar',
      role: 'Software Engineer',
      image: '👨‍💼',
      rating: 5,
      text: 'Best barbershop in the city! The attention to detail is incredible. Every visit makes me feel like a completely new person. Highly recommend!',
      verified: true
    },
    {
      id: 2,
      name: 'Rohan Patel',
      role: 'Businessman',
      image: '👨‍💻',
      rating: 5,
      text: 'UrbanCuts has become my go-to place for grooming. The barbers are professional, hygienic, and always deliver exactly what I ask for. Premium experience!',
      verified: true
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Student',
      image: '👨‍🎓',
      rating: 5,
      text: 'Amazing haircuts and beard styling here! The staff is very friendly, and the prices are reasonable for the quality they provide. Worth every penny!',
      verified: true
    },
    {
      id: 4,
      name: 'Aditya Sharma',
      role: 'Fitness Trainer',
      image: '💪',
      rating: 5,
      text: 'I visit UrbanCuts every 2 weeks. The hygiene standards are top-notch, and the barbers really understand what suits your face shape. Fantastic service!',
      verified: true
    },
    {
      id: 5,
      name: 'Nikhil Desai',
      role: 'Entrepreneur',
      image: '🎯',
      rating: 5,
      text: 'UrbanCuts is the perfect place for a serious grooming session. Their combo packages are amazing, and the whole experience feels premium. Absolutely worth it!',
      verified: true
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have to say about their experience at UrbanCuts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-dark-bg border border-gold/10 rounded-xl p-8 card-hover group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-gold/10 pt-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/10 to-dark-secondary flex items-center justify-center text-2xl border border-gold/20">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-auto text-gold text-xs font-bold bg-gold/10 px-2 py-1 rounded">
                      ✓ Verified
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div className="border-l border-r border-gold/20">
              <div className="text-4xl font-bold text-gold mb-2">4.9/5</div>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
