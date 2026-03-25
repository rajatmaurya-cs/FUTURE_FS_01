import { useState } from 'react'

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null)

  const gallery = [
    {
      id: 1,
      title: 'Fade with Edge Design',
      description: 'Classic fade with sharp line design',
      category: 'Haircut',
      img: `https://images.unsplash.com/photo-1654097800183-574ba7368f74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGN1dCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D`
    },
    {
      id: 2,
      title: 'Textured Crop',
      description: 'Modern textured crop for a sophisticated look',
      category: 'Haircut',
      img:"https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D"
      
    },
    {
      id: 3,
      title: 'Professional Beard',
      description: 'Full beard styling with premium finish',
      category: 'Beard',
      img:"https://images.unsplash.com/photo-1630827020718-3433092696e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGhhaXJjdXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: 'Undercut Styling',
      description: 'Bold undercut with volume on top',
      category: 'Haircut',
      img:"https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBoYWlyY3V0fGVufDB8fDB8fHww"
    },
    {
      id: 5,
      title: 'Clean Shaved Look',
      description: 'Smooth clean shave with face treatment',
      category: 'Grooming',
      img:"https://images.unsplash.com/photo-1674704740446-64c19b63542e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {
      id: 6,
      title: 'Long Hair Styling',
      description: 'Style and shape for longer hair',
      category: 'Haircut',
      img:"https://images.unsplash.com/photo-1635567818469-e28cdf45c1f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZyUyMGhhaXIlMjBtYW58ZW58MHx8MHx8fDA%3D"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Before & After Gallery</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See the transformation our expert barbers create. Each cut is tailored to enhance your unique style.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group overflow-hidden rounded-xl border border-gold/10 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay with details */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center">
                      <p className="text-gold text-sm font-bold mb-2 uppercase tracking-wider">{item.category}</p>
                      <p className="text-white text-lg font-bold">{item.title}</p>
                    </div>
                  </div>
                </div>

              {/* Title */}
              <div className="p-6 bg-dark-secondary border-t border-gold/10">
                <h3 className="font-bold text-gold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-gold/10 rounded-full text-gold text-xs font-semibold">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Inspired by our work? Book your appointment today!</p>
          <div className="inline-block">
            <a href="https://wa.me/916350624971?text=Hi%20I%20want%20to%20book%20an%20appointment%20for%20a%20haircut" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
