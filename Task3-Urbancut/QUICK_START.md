# 🚀 UrbanCuts - Quick Start Guide

## Step 1: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including React, Tailwind CSS, and other dependencies.

## Step 2: Start Development Server

```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

## Step 3: Make Your Changes

### Update Business Information

1. **Phone Number** - Search for `+919876543210` in all files and replace with your number
2. **Email** - Update `info@urbancuts.com` with your email
3. **Address** - Update address in Contact section and Footer

### Files to Update:

**1. Navbar.jsx** - Phone number in top navigation
**2. Hero.jsx** - CTA phone number
**3. Contact.jsx** - All contact details, Google Maps embed
**4. FloatingButton.jsx** - WhatsApp number and message
**5. Footer.jsx** - Contact info and social links
**6. Services.jsx** - Update service names, prices, descriptions
**7. About.jsx** - Update business story
**8. Testimonials.jsx** - Add real customer reviews
**9. Gallery.jsx** - Add your work photos

## Step 4: Customize Design

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  gold: '#d4af37',           // Primary color
  'dark-bg': '#1a1a1a',      // Background
  'dark-secondary': '#2d2d2d' // Secondary background
}
```

### Add Your Logo & Images

1. Create a `public/images` folder
2. Add your images there
3. Update component files to use your images

Example in `Hero.jsx`:
```jsx
<img 
  src="/images/hero-salon.jpg" 
  alt="UrbanCuts Salon"
  className="w-full h-full object-cover rounded-2xl"
/>
```

## Step 5: Test Everything

### On Desktop:
- Click all buttons and links
- Test form submission
- Check all pages load correctly
- Verify WhatsApp links work

### On Mobile:
- Use Chrome DevTools (F12) → Toggle Device Toolbar
- Test mobile menu
- Verify responsive design
- Check all touch elements

### Check Phone Numbers:
1. Click "Call Now" button → Should dial number
2. Click WhatsApp button → Should open WhatsApp
3. Fill booking form → Should redirect to WhatsApp

## Step 6: Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Step 7: Deploy (Choose One Option)

### Option A: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow prompts to deploy. Site goes live automatically.

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag & drop the `dist` folder
4. Your site is live!

### Option C: GitHub Pages

1. Push code to GitHub
2. Go to repository → Settings → Pages
3. Select `Deploy from branch`
4. Choose `main` branch and `/root` folder
5. Your site is live at `username.github.io/urbancuts`

## Common Customizations

### Change Service Prices

In `Services.jsx`, find the services array:

```javascript
const services = [
  {
    id: 1,
    name: 'Professional Haircut',
    price: '₹299',  // ← Change this
    duration: '30 min',
    description: 'Expert scissor cut...',
    icon: '✂️'
  },
  // ... more services
]
```

### Change Business Hours

In `Footer.jsx` and `Contact.jsx`:

```javascript
<li>
  <span className="font-semibold">Mon - Fri</span>
  <p>10:00 AM - 8:00 PM</p>
</li>
```

### Add More Services

In `Services.jsx`, add to the array:

```javascript
{
  id: 7,
  name: 'Your Service Name',
  price: '₹399',
  duration: '45 min',
  description: 'Your service description',
  icon: '🎯'
}
```

### Update Google Maps

In `Contact.jsx`, replace the `src` in the iframe:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  // ...
/>
```

Get your embed code:
1. Go to Google Maps
2. Search your location
3. Click Share → Embed a map
4. Copy the embed code

### Add Customer Reviews

In `Testimonials.jsx`:

```javascript
{
  id: 6,
  name: 'Customer Name',
  role: 'Their Profession',
  image: '👨‍💼',
  rating: 5,
  text: 'Great experience! Highly recommend!',
  verified: true
}
```

## Troubleshooting

### Issue: "npm command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org)

### Issue: Port 3000 already in use
**Solution:** Run `npm run dev -- --port 3001`

### Issue: Styles not loading
**Solution:** Delete `node_modules` and run `npm install` again

### Issue: WhatsApp button not working
**Solution:** Check phone number format is correct (include country code)

### Issue: Images not showing
**Solution:** Check image path is correct and file exists in `public` folder

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Clean install (if dependencies are broken)
rm -rf node_modules
npm install
```

## Performance Tips

1. **Optimize Images**: Use 1200x800px for gallery, compress with TinyPNG
2. **Use WebP**: Convert JPG/PNG to WebP for smaller file size
3. **Minimize Fonts**: Only load Poppins font weights you use
4. **Lazy Load**: Images load only when visible
5. **Cache Images**: Browser caches images for faster repeat visits

## SEO Tips

1. **Meta Tags**: Update description in `index.html`
2. **Keywords**: Add relevant keywords to content
3. **Headings**: Use H1, H2, H3 hierarchy properly
4. **Alt Text**: Add descriptive alt text to all images
5. **Mobile**: Ensure mobile responsiveness (built-in)
6. **Speed**: Optimize images and use Vercel CDN
7. **Analytics**: Add Google Analytics for tracking

## Next Steps

1. ✅ Update all business information
2. ✅ Add real images and testimonials
3. ✅ Test on mobile and desktop
4. ✅ Deploy to Vercel/Netlify
5. ✅ Set up custom domain
6. ✅ Enable Google Analytics
7. ✅ Submit to Google Business Profile
8. ✅ Share on social media

## Support

For questions about React, Tailwind, or Vite:
- React Docs: [react.dev](https://react.dev)
- Tailwind Docs: [tailwindcss.com](https://tailwindcss.com/docs)
- Vite Docs: [vitejs.dev](https://vitejs.dev)

## Celebrate! 🎉

Your professional salon website is ready. Now go get those bookings!

---

**Website Ready?** Share it with your customers and start growing your business! 📱💈✨
