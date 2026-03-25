# 🎨 UrbanCuts - Customization Guide

Complete guide to customize the website with your business information.

## 1️⃣ Business Contact Information

### 📞 Phone Number

Replace all instances of `+919876543210` with your phone number:

**Files to update:**
- `src/components/Navbar.jsx` (Line 68)
- `src/components/Hero.jsx` (Line 56)
- `src/components/Contact.jsx` (Line 15)
- `src/components/FloatingButton.jsx` (Line 8)
- `src/components/Footer.jsx` (Line 83)

**Before:**
```javascript
href="tel:+919876543210"
```

**After:**
```javascript
href="tel:+91YOUR_NUMBER"  // Include country code
```

### 📧 Email

Replace `info@urbancuts.com`:

**Files to update:**
- `src/components/Contact.jsx` (Line 19)
- `src/components/Footer.jsx` (Line 84)

**Before:**
```javascript
<a href="mailto:info@urbancuts.com">
```

**After:**
```javascript
<a href="mailto:your.email@example.com">
```

### 📍 Address

Replace `123 Premium Street, Downtown`:

**Files to update:**
- `src/components/Navbar.jsx` (Optional)
- `src/components/Contact.jsx` (Line 13)
- `src/components/Footer.jsx` (Line 82)

**Before:**
```javascript
content: '123 Premium Street, Downtown',
subtext: 'New Delhi, India - 110001'
```

**After:**
```javascript
content: 'Your Street, Your Area',
subtext: 'Your City, State - Pin Code'
```

### ⏰ Business Hours

**Files to update:**
- `src/components/Contact.jsx` (Line 61-66)
- `src/components/Footer.jsx` (Line 95-102)
- `src/components/Testimonials.jsx` (Line 48) - WhatsApp support hours

**Before:**
```javascript
<li>
  <span className="font-semibold">Monday - Sunday</span>
  <p>10:00 AM - 8:00 PM</p>
</li>
<li>
  <span className="font-semibold">Closed</span>
  <p>Monday (Weekly off)</p>
</li>
```

**After:**
```javascript
<li>
  <span className="font-semibold">Your Days</span>
  <p>Your Hours</p>
</li>
```

## 2️⃣ Services & Pricing

Edit `src/components/Services.jsx` - Update the services array:

```javascript
const services = [
  {
    id: 1,
    name: 'Professional Haircut',     // Your service name
    price: '₹299',                     // Your price (use ₹ for rupees)
    duration: '30 min',                // Service duration
    description: 'Expert scissor cut with style consultation...', // Description
    icon: '✂️'                         // Emoji icon
  },
  // ... more services
]
```

### Available Icons/Emojis

| Icon | Code | Service |
|------|------|---------|
| ✂️ | `✂️` | Haircut |
| 🧔 | `🧔` | Beard |
| 💆 | `💆` | Facial |
| 🧴 | `🧴` | Hair Spa |
| ⭐ | `⭐` | Package |
| 👑 | `👑` | Premium |

Don't have exactly 6 services? Just add/remove items from the array.

## 3️⃣ Color Scheme

Change the luxury colors in `tailwind.config.js`:

### Current (Dark + Gold)
```javascript
colors: {
  gold: '#d4af37',        // Gold color
  'dark-bg': '#1a1a1a',   // Dark background
  'dark-secondary': '#2d2d2d' // Secondary dark
}
```

### Alternative 1: Black + Silver
```javascript
colors: {
  gold: '#c0c0c0',        // Silver
  'dark-bg': '#000000',   // Black
  'dark-secondary': '#1a1a1a'
}
```

### Alternative 2: Dark Blue + Gold
```javascript
colors: {
  gold: '#ffd700',        // Bright Gold
  'dark-bg': '#001a33',   // Dark Blue
  'dark-secondary': '#003366'
}
```

## 4️⃣ Business Name & Logo

### Change Logo Text

In `src/components/Navbar.jsx` (Line 14):

**Before:**
```javascript
<a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2">
  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold">
    U
  </div>
  rbanCuts
</a>
```

**After:**
```javascript
<a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2">
  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold">
    Y  {/* Your initial */}
  </div>
  ourSalonName
</a>
```

Also update in `src/components/Footer.jsx` (Line 7-11)

### Add Logo Image

Replace the initial circle with an image:

```javascript
<a href="#home" className="text-2xl font-bold gradient-text flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="Logo" 
    className="w-8 h-8 rounded-full"
  />
  Your Salon Name
</a>
```

Place `logo.png` in the `public` folder.

## 5️⃣ About Section

Edit `src/components/About.jsx` - Update the company description:

**Before:**
```javascript
<p className="text-xl text-gray-300 mb-8 leading-relaxed">
  UrbanCuts was founded with a mission to bring premium grooming 
  experiences to every gentleman...
</p>
```

**After:**
```javascript
<p className="text-xl text-gray-300 mb-8 leading-relaxed">
  Your Salon Name was founded with a mission to... [Your story]
</p>
```

### Update About Section Features

Still in `About.jsx`, update the features array:

```javascript
const features = [
  { icon: '🏆', title: '15+ Years Experience', description: '...' },
  { icon: '🧼', title: 'Hygiene First', description: '...' },
  { icon: '💎', title: 'Premium Products', description: '...' },
  { icon: '⚡', title: 'Quick Service', description: '...' }
]
```

## 6️⃣ Gallery / Portfolio

Edit `src/components/Gallery.jsx` - Update gallery items:

```javascript
const gallery = [
  {
    id: 1,
    title: 'Fade with Edge Design',
    description: 'Classic fade with sharp line design',
    category: 'Haircut'
  },
  // ... more items
]
```

To add more gallery items, just add objects to the array.

## 7️⃣ Testimonials

Edit `src/components/Testimonials.jsx` - Update reviews:

```javascript
const testimonials = [
  {
    id: 1,
    name: 'Arjun Kumar',              // Customer name
    role: 'Software Engineer',         // Their profession
    image: '👨‍💼',                      // Emoji avatar
    rating: 5,                         // Rating (1-5)
    text: 'Best barbershop in the city!...', // Review text
    verified: true                     // Show verified badge
  },
  // ... more testimonials
]
```

### Emoji Avatars

- 👨‍💼 Professional
- 👨‍💻 Tech person
- 👨‍🎓 Student
- 💪 Fitness
- 🎯 Entrepreneur
- 👔 Executive

## 8️⃣ Contact Section Maps

Edit `src/components/Contact.jsx` - Update Google Maps embed:

1. Go to [Google Maps](https://maps.google.com)
2. Search your salon location
3. Click Share → Embed a map
4. Copy the `src` URL

Replace in Contact.jsx (Line ~85):

```javascript
<iframe
  src="PASTE_NEW_URL_HERE"
  // ... rest of attributes
/>
```

## 9️⃣ Social Media Links

Edit `src/components/Footer.jsx` - Update social links:

```javascript
const socialLinks = [
  { 
    icon: <FiInstagram size={20} />, 
    href: 'https://instagram.com/yourprofile',  // Your Instagram
    label: 'Instagram' 
  },
  { 
    icon: <FiFacebook size={20} />, 
    href: 'https://facebook.com/yourpage',  // Your Facebook
    label: 'Facebook' 
  },
  // ... more socials
]
```

## 🔟 Website Title & Meta

Edit `index.html` - Update page title and meta tags:

```html
<title>UrbanCuts - Premium Men's Salon</title>  <!-- Page title -->

<meta name="description" content="UrbanCuts - Premium men's salon offering..." />
<meta name="keywords" content="mens salon, barbershop, haircut..." />
```

This appears in:
- Browser tab
- Google search results
- Social media shares

## 1️⃣1️⃣ Add Real Images

### Replace Placeholder Images

1. Create `public/images` folder
2. Add your photos: `hero.jpg`, `about.jpg`, `gallery1.jpg`, etc.
3. Update components to use them

**In Hero.jsx:**
```jsx
{/* Replace this SVG placeholder: */}
<div className="aspect-square rounded-2xl overflow-hidden...">
  <img 
    src="/images/hero.jpg" 
    alt="UrbanCuts Salon"
    className="w-full h-full object-cover"
  />
</div>
```

**Image Specifications:**
- Hero Hero: 600x600px (square)
- Gallery: 400x400px (square)
- About: 600x600px (square)
- Optimize with TinyPNG before uploading

## 1️⃣2️⃣ WhatsApp Integration

### Change WhatsApp Message

Edit `src/components/FloatingButton.jsx` (Line 8):

```javascript
const whatsappMessage = "Hi! I'm interested in booking an appointment..."
```

### Add Auto-response Template

Make it clear what info you need:

```javascript
const whatsappMessage = `Hi UrbanCuts! 
I want to book an appointment.

Name: 
Service: 
Date: 
Time:

Thanks!`
```

## 1️⃣3️⃣ Google Analytics

Add tracking to understand visitors:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property for your website
3. Copy your Google Analytics ID (G-XXXXX...)
4. Add to `index.html` `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');  // ← Replace with your ID
</script>
```

## 1️⃣4️⃣ Quick Customization Checklist

### Essential Updates
- [ ] Phone number (all 5 locations)
- [ ] Email address
- [ ] Business address
- [ ] Business hours
- [ ] Service names and prices
- [ ] About section text
- [ ] Replace placeholder images
- [ ] Add customer testimonials
- [ ] Social media links

### Nice-to-Have Updates
- [ ] Change color scheme
- [ ] Update logo/sitename
- [ ] Add gallery images
- [ ] Customize gallery descriptions
- [ ] Update Google Maps
- [ ] Add Google Analytics
- [ ] WhatsApp custom message

### SEO Updates
- [ ] Update page title
- [ ] Update meta description
- [ ] Add local keywords
- [ ] Optimize images
- [ ] Update business schema

## Customization Tools

### Online Tools

- **Image Resizer**: [iLoveIMG.com](https://www.iloveimg.com)
- **Image Compressor**: [TinyPNG.com](https://tinypng.com)
- **Color Picker**: [Coolors.co](https://coolors.co)
- **Font Previewer**: [Google Fonts](https://fonts.google.com)
- **Emoji Database**: [EmojiPedia.org](https://emojipedia.org)

### Testing Tools

- **Responsive Design**: Chrome DevTools (F12)
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev)
- **SEO**: [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Common Customizations Before Launch

### 1. Add Your Name
Search and replace `UrbanCuts` with your salon name

### 2. Update All Services
Edit service cards with your actual services and pricing

### 3. Add Real Testimonials
Replace placeholder reviews with real customer feedback

### 4. Upload Your Photos
Replace SVG placeholders with real salon images

### 5. Set Correct Hours
Update opening and closing times for your salon

### 6. Add WhatsApp Number
Make sure WhatsApp links work with your number

### 7. Update Contact Address
Add your actual salon location address

### 8. Custom Domain
If you have one, configure it for your deployment

## Need Help?

If you're stuck on customization:

1. **Check existing code** - Similar patterns already exist
2. **Search for text** - Use Ctrl+F to find all instances
3. **Compare with examples** - Look at other components
4. **Test locally** - Run `npm run dev` and test changes
5. **Refer to React docs** - [react.dev](https://react.dev)

---

**Customization Complete?** Now deploy and start getting bookings! 🎉
