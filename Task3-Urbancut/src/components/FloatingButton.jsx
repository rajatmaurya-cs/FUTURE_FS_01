import { useState } from 'react'
import { FiMessageCircle, FiX, FiPhone, FiMessageSquare } from 'react-icons/fi'

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappMessage = "Hi! I'm interested in booking an appointment at UrbanCuts. Could you please tell me about available time slots?"

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Floating Action Menu */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 space-y-3 animate-fade-in">
          {/* Call Button */}
          <a
            href="tel:+916350624971"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            <FiPhone size={20} />
            <span className="font-semibold">Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/916350624971?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.531.92-2.859 2.229-3.865 3.807-.995 1.578-1.457 3.393-1.457 5.112 0 1.52.379 3.032 1.12 4.413l-1.176 4.351 4.515-1.185c1.305.712 2.834 1.175 4.498 1.175 6.009 0 10.895-4.887 10.895-10.896 0-2.906-1.147-5.634-3.235-7.722-2.087-2.087-4.851-3.235-7.766-3.235z" />
            </svg>
            <span className="font-semibold">WhatsApp</span>
          </a>

          {/* Message Button */}
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              setIsOpen(false)
            }}
            className="flex items-center gap-3 bg-gold text-black px-4 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 font-semibold"
          >
            <FiMessageSquare size={20} />
            <span>Contact Form</span>
          </button>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center font-bold text-2xl transition-all transform hover:scale-110 ${
          isOpen
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-gold hover:bg-yellow-300 text-black'
        }`}
        aria-label="Open contact menu"
      >
        {isOpen ? <FiX size={28} /> : <FiMessageCircle size={28} />}
      </button>

      {/* Floating Label */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-gold text-black px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap animate-pulse">
          Need Help? Chat with us! 👋
        </div>
      )}
    </div>
  )
}
