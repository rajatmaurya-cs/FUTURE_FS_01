# 🎯 UrbanCuts - Premium Men's Salon Website

A modern, professional, and high-converting website for a local men's salon brand. Built with **React**, **Tailwind CSS**, and **Vite** for maximum performance and conversion.

## ✨ Features

✅ **Modern & Premium Design** - Dark + gold theme inspired by luxury salons  
✅ **Fully Responsive** - Mobile-first design that looks perfect on all devices  
✅ **Fast Loading** - Optimized with Vite for incredible performance  
✅ **SEO Friendly** - Proper meta tags and semantic HTML  
✅ **Smooth Animations** - Professional transitions and hover effects  
✅ **Booking Integration** - WhatsApp-based booking system  
✅ **Floating WhatsApp Button** - Always accessible customer contact  
✅ **Booking Form** - Pre-filled WhatsApp messages  
✅ **Contact Section** - Phone, email, address, and Google Maps  
✅ **Social Proof** - Testimonials and ratings  
✅ **Gallery** - Before/after images showcase  

## 📄 Sections Included

1. **Hero Section** - Bold heading with CTA buttons
2. **Services Section** - 6 service cards with pricing
3. **About Section** - Brand story and features
4. **Gallery Section** - Before/after image showcase
5. **Testimonials Section** - 5 customer reviews with ratings
6. **Contact Section** - Location, phone, WhatsApp, hours, Google Maps
7. **Footer** - Social links, quick links, business info
8. **Floating Button** - WhatsApp, phone call, contact form access
9. **Booking Form** - Modal form with WhatsApp integration

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.0
- **Icons**: React Icons
- **Fonts**: Google Fonts (Poppins)
- **Hosting**: Ready for Vercel/Netlify

## 📦 Project Structure

```
urbancuts/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation with mobile menu
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── Services.jsx         # Service cards with pricing
│   │   ├── About.jsx            # Brand story & features
│   │   ├── Gallery.jsx          # Image gallery showcase
│   │   ├── Testimonials.jsx     # Customer reviews
│   │   ├── Contact.jsx          # Contact information & map
│   │   ├── FloatingButton.jsx   # WhatsApp floating button
│   │   ├── BookingForm.jsx      # Modal booking form
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the folder if already downloaded)
```bash
cd Urbancut
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## 🔧 Configuration

### Update Contact Information
Edit the contact details in these files:

**Navbar.jsx** (Line 68):
```javascript
<a href="tel:+919876543210">
```

**Hero.jsx** (Line 56):
```javascript
<a href="tel:+919876543210">
```

**FloatingButton.jsx** (Line 8):
```javascript
const whatsappMessage = "Your custom message here..."
```

**Contact.jsx** (Line 14):
```javascript
{ icon: <FiPhone />, title: 'Phone', content: '+91 YOUR_NUMBER' }
```

### Customize Colors
Edit `tailwind.config.js`:

```javascript
colors: {
  gold: '#d4af37',        // Change to your brand color
  'dark-bg': '#1a1a1a',   // Change background
  'dark-secondary': '#2d2d2d'
}
```

### Add Your Images
Replace the placeholder SVGs with actual images:

1. **Hero Section Image** - `src/components/Hero.jsx` (Line 48-56)
2. **Gallery Images** - `src/components/Gallery.jsx` (Line 42-52)
3. **About Section Image** - `src/components/About.jsx` (Line 23-33)

Replace the SVG divs with `<img>` tags:
```jsx
<img 
  src="/path/to/image.jpg" 
  alt="Description"
  className="w-full h-full object-cover"
/>
```

## 🎨 Customization Guide

### Change Business Hours
Edit `Footer.jsx` and `Contact.jsx`:

```javascript
<li>
  <span className="font-semibold">Monday - Friday</span>
  <p>10:00 AM - 8:00 PM</p>
</li>
```

### Update Services
Edit `Services.jsx`:

```javascript
const services = [
  {
    id: 1,
    name: 'Your Service Name',
    price: '₹299',
    duration: '30 min',
    description: 'Description here',
    icon: '✂️'
  },
  // Add more services
]
```

### Add Testimonials
Edit `Testimonials.jsx`:

```javascript
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Profession',
    image: '👨‍💼',
    rating: 5,
    text: 'Review text here',
    verified: true
  }
]
```

## 📱 WhatsApp Integration

The website uses WhatsApp Web API for bookings. Messages are pre-filled with:
- Customer name
- Phone number
- Selected service
- Preferred date & time
- Additional notes

**WhatsApp Business Account Setup** (Optional):
1. Create a WhatsApp Business Account
2. Update the phone number in all files
3. Set up automated responses for better customer experience

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Build the project**
```bash
npm run build
```

2. **Install Vercel CLI**
```bash
npm install -g vercel
```

3. **Deploy**
```bash
vercel
```

4. **Follow prompts** to connect your GitHub and deploy

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Connect to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Build**
```bash
npm run build
```

2. **Deploy**
```bash
npm install gh-pages --save-dev
```

3. **Update `vite.config.js`:**
```javascript
export default {
  base: '/urbancuts/',
  // ... rest of config
}
```

## ⚡ Performance Optimizations

- **Code Splitting**: Lazy loading components
- **Image Optimization**: Use WebP formats and compression
- **Caching**: Browser caching enabled
- **Minification**: Automatic with Vite build
- **SEO**: Meta tags and structured data

## 🔐 Security Features

- No sensitive data stored in frontend
- WhatsApp links use HTTPS
- Google Maps embedded securely
- Form validation on client side
- CORS enabled for external APIs

## 📊 SEO Optimization

✅ Meta descriptions  
✅ Open Graph tags  
✅ Structured headings (H1, H2, H3)  
✅ Alt text for images  
✅ Mobile-friendly design  
✅ Fast loading performance  
✅ Clean, semantic HTML  

## 🎯 Conversion Optimization

- **CTA Buttons**: Multiple prominent buttons throughout
- **Trust Signals**: Ratings, testimonials, badges
- **Mobile-First**: Optimized for mobile users
- **Fast Loading**: Ensures users don't bounce
- **Clear Pricing**: Transparent service pricing
- **Easy Contact**: Multiple contact options
- **Social Proof**: Client reviews and statistics

## 📞 Support & Contact

The website includes:
- **Phone Button**: Direct call integration
- **WhatsApp Button**: Floating button with pre-filled messages
- **Contact Form**: Modal form that opens WhatsApp
- **Google Maps**: Location embed

## 🔄 Maintenance

### Regular Updates

1. Update testimonials monthly
2. Refresh gallery images
3. Check links and buttons
4. Test on different devices
5. Monitor analytics (add Google Analytics)

### Adding Google Analytics

Add this to `index.html` in the `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 💡 Tips for Success

1. **Use High-Quality Images**: Replace placeholders with professional
2. **Personalize**: Add your actual business details
3. **Regular Updates**: Keep testimonials and gallery fresh
4. **Mobile Testing**: Test on real devices
5. **Backup**: Keep local copies of all changes
6. **Monitor**: Use analytics to track user behavior
7. **Gather Reviews**: Actively collect customer testimonials
8. **Social Media**: Link to your social profiles

## 📝 License

This project is created for UrbanCuts Salon. Feel free to modify and use for your business.

## ✅ Checklist Before Launch

- [ ] Update all contact information
- [ ] Add business logo/images
- [ ] Customize color scheme
- [ ] Update business hours
- [ ] Add real testimonials
- [ ] Update gallery images
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Set up WhatsApp Business Account
- [ ] Deploy to Vercel/Netlify
- [ ] Set up domain name
- [ ] Add Google Analytics
- [ ] Submit to Google Business Profile
- [ ] Test form submissions
- [ ] Set up auto-responder emails

## 🎉 You're Ready!

Your UrbanCuts website is now ready to impress clients and drive bookings. Good luck with your business! 💼

---

**Made with ❤️ for Premium Grooming Services**
