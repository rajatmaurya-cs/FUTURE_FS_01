import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Professional Haircut',
    'Beard Styling',
    'Premium Facial',
    'Hair Spa',
    'Combo Package',
    'Groom Package'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.phone || !formData.service) {
      alert('Please fill in all required fields')
      return
    }

    // Create WhatsApp message
    const message = `Hello! I want to book an appointment:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nService: ${formData.service}\nPreferred Date: ${formData.date || 'Not specified'}\nPreferred Time: ${formData.time || 'Not specified'}\nNotes: ${formData.notes || 'None'}`

    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/916350624971?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')

    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-dark-secondary border border-gold/20 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/20 sticky top-0 bg-dark-secondary">
          <h2 className="text-2xl font-bold gradient-text">Book Appointment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="Close booking form"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Form Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                required
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requests or details..."
                rows="3"
                className="w-full bg-dark-bg border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
              ></textarea>
            </div>

            {/* Info Text */}
            <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 text-sm text-gray-300">
              💬 You'll be redirected to WhatsApp to confirm your appointment with our team.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-4 text-lg font-bold"
            >
              Book via WhatsApp
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full btn-secondary py-3"
            >
              Cancel
            </button>
          </form>
        ) : (
          // Success Message
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gold mb-3">Booking Submitted!</h3>
            <p className="text-gray-300 mb-2">
              You'll be taken to WhatsApp to confirm your appointment.
            </p>
            <p className="text-gray-400 text-sm">
              Our team will respond within 30 minutes during business hours.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
