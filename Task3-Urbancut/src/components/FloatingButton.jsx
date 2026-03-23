import { useState } from 'react'
import { FiMessageCircle, FiX, FiPhone, FiMessageSquare } from 'react-icons/fi'

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappMessage = "Hi! I'm interested in booking an appointment at UrbanCuts. Could you please tell me about available time slots?"

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">

      {isOpen && (
        <div className="absolute bottom-24 right-0 space-y-3 animate-fade-in">
 
          <a
            href="tel:+916350624971"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            <FiPhone size={20} />
            <span className="font-semibold">Call Now</span>
          </a>