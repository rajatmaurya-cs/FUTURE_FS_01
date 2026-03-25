# 🌐 Deployment Guide for UrbanCuts

This guide covers deploying your UrbanCuts website to the internet for free or low cost.

## Recommended: Vercel (Easiest)

Vercel is made by the creators of Next.js and is optimized for React apps. It's free and extremely easy.

### Step 1: Push Code to GitHub

1. Create a [GitHub](https://github.com) account if you don't have one
2. Create a new repository named `urbancuts`
3. Follow GitHub's instructions to push your code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - UrbanCuts website"

# Add remote (replace username with your GitHub username)
git branch -M main
git remote add origin https://github.com/username/urbancuts.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" and choose "Continue with GitHub"
3. Authorize Vercel
4. Click "Add New..." → "Project"
5. Select your `urbancuts` repository
6. Click "Import"
7. Click "Deploy"

✅ **Your site is live!** Vercel gives you a free URL like `urbancuts.vercel.app`

### Step 3: Add Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., `urbancuts.in`)
3. Update your domain's nameservers to point to Vercel
4. Takes 24-48 hours to fully activate

## Alternative Option 1: Netlify

[Netlify](https://netlify.com) is another excellent free option.

### Step 1: Build Your Project

```bash
npm run build
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `dist` folder onto Netlify
5. Your site is live! 🎉

### Step 3: Custom Domain

1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Follow Netlify's DNS configuration

## Alternative Option 2: GitHub Pages

Free hosting directly from GitHub.

### Step 1: Update Configuration

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/urbancuts/', // Change to your repo name
  plugins: [react()],
})
```

### Step 2: Build and Deploy

```bash
npm run build

# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to GitHub repository → Settings
2. Go to Pages section
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch
5. Your site is at `username.github.io/urbancuts`

## Free Domain Names

### Option 1: Free .tk Domain
- Go to [freenom.com](https://freenom.com)
- Register free domain ending in .tk, .ml, .ga
- Connect to your hosting (Vercel/Netlify)

### Option 2: Cheap Domain
- [Namecheap.com](https://namecheap.com) - ₹99/year
- [Google Domains](https://domains.google) - Starting ₹600/year
- [Register.com](https://register.com) - Various prices

## Full Deployment Checklist

### Before Deploying

- [ ] Update all phone numbers
- [ ] Update all business info
- [ ] Add real images
- [ ] Test all buttons and links
- [ ] Test on mobile devices
- [ ] Check all forms work
- [ ] Verify Google Maps embed
- [ ] Check performance (Lighthouse)

### During Deployment

- [ ] Push code to GitHub
- [ ] Connect to Vercel/Netlify
- [ ] Deploy (usually automatic)
- [ ] Test live website
- [ ] Check all pages load
- [ ] Verify responsiveness
- [ ] Test mobile menu

### After Deployment

- [ ] Add custom domain
- [ ] Set up SSL (automatic on Vercel/Netlify)
- [ ] Add Google Analytics
- [ ] Submit to Google
- [ ] Monitor performance
- [ ] Set up backups

## Environment Variables (Advanced)

Create `.env.local` for sensitive data:

```env
VITE_PHONE_NUMBER=+919876543210
VITE_EMAIL=info@urbancuts.com
VITE_WHATSAPP_NUMBER=919876543210
```

Access in code:
```javascript
const phone = import.meta.env.VITE_PHONE_NUMBER
```

Deploy to Vercel: Add in Project Settings → Environment Variables

## Performance Optimization

### 1. Image Optimization

```bash
# Install image optimizer
npm install vite-plugin-imagemin --save-dev
```

Update `vite.config.js`:

```javascript
import imagemin from 'vite-plugin-imagemin'

export default {
  plugins: [
    imagemin()
  ]
}
```

### 2. Code Splitting

Automatically done by Vite. Build splits code into chunks for faster loading.

### 3. Minification & Compression

Automatically done by Vite. `npm run build` creates optimized files.

### 4. Caching

Vercel/Netlify automatically cache static files. Images are served from CDN.

## Monitoring & Analytics

### Add Google Analytics

Edit `index.html`, add to `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

### Monitor Performance

1. Use [PageSpeed Insights](https://pagespeed.web.dev)
2. Enter your URL
3. Get performance recommendations
4. Fix issues for better SEO

### Error Tracking (Optional)

Use [Sentry.io](https://sentry.io) for error monitoring:

```bash
npm install @sentry/react @sentry/tracing
```

Initialize in `main.jsx`:

```javascript
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  tracesSampleRate: 1.0,
})
```

## Continuous Deployment

Once set up on Vercel/Netlify, deployments are automatic:

1. Make changes locally
2. Commit and push to GitHub
3. Website automatically updates
4. Live in ~1 minute

No need to manually deploy again!

```bash
# Standard workflow
git add .
git commit -m "Update services and pricing"
git push origin main
# ✅ Your changes are live!
```

## Redirects & Rewrites

Create `_redirects` file in `public/` folder:

```
# Redirect all traffic to HTTPS
https://urbancuts.vercel.app/* https://yourdomain.com/:splat 301!

# Single page rewrite
/old-page https://yourdomain.com/new-page 301
```

## SSL Certificate (HTTPS)

- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ GitHub Pages: Automatic

Your site automatically gets a free SSL certificate. Visitors see 🔒 lock icon.

## Custom Domain Setup

### With Vercel

1. Domain Settings → Add Domain
2. Follow DNS configuration
3. Wait 24-48 hours
4. Done!

### With Netlify

1. Site Settings → Domain Management
2. Add custom domain
3. Update nameservers at domain registrar
4. Wait 24-48 hours
5. Done!

### Update All Links

After setting custom domain, update anything hardcoded:

Search for `urbancuts.vercel.app` and replace with your new domain.

## Backup & Version Control

### GitHub Serves as Backup

Your code is safe on GitHub. You can always redeploy.

### Create Local Backup

```bash
# Clone your repository
git clone https://github.com/username/urbancuts.git urbancuts-backup
```

Keep this folder safe. You can restore anytime.

## Common Issues & Solutions

### Issue: "Build failed" error
**Solution:** Check build log, ensure no errors in code, run `npm run build` locally

### Issue: "404 on refresh" (GitHub Pages)
**Solution:** Add `base` in vite.config.js pointing to repo name

### Issue: "Images not loading on production"
**Solution:** Use absolute paths `/images/photo.jpg` not relative paths

### Issue: "WhatsApp not working"
**Solution:** Ensure phone number includes country code (+91 for India)

### Issue: "Can't access custom domain"
**Solution:** Wait 24 hours for DNS to propagate, clear browser cache

## Next: Promote Your Site

Once live:

1. **Share on Social Media**
   - Instagram: Post link in bio
   - Facebook: Create business page
   - WhatsApp Status: Share link

2. **Google Business Profile**
   - Add website URL
   - Add photos
   - Get reviews

3. **Local SEO**
   - Submit to Google Maps
   - Add to local directories
   - Get backlinks from local sites

4. **Email Marketing**
   - Create newsletter signup
   - Email existing customers
   - Send promotions

5. **Referral Program**
   - Offer discount for referrals
   - Share unique link
   - Track conversions

## Performance Goals

Target Lighthouse scores:

- ✅ **Performance**: 90+
- ✅ **Accessibility**: 90+
- ✅ **Best Practices**: 90+
- ✅ **SEO**: 95+

Check at [PageSpeed Insights](https://pagespeed.web.dev)

## Maintenance Schedule

| Task | Frequency |
|------|-----------|
| Update content | Monthly |
| Add testimonials | Weekly |
| Check links | Monthly |
| Update promotions | As needed |
| Review analytics | Weekly |
| Post on social | Daily |

## Troubleshooting Deployment

Run these commands locally first:

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install

# Build locally
npm run build

# Check for errors
npm run preview
```

If it works locally but fails on Vercel:
1. Check Node version (use version 16+)
2. Check environment variables
3. Review build logs carefully

## You're Live! 🎉

Your UrbanCuts website is now accessible globally. Start promoting it and watch the bookings roll in!

---

**Questions?** Check the documentation at [vercel.com](https://vercel.com/docs) or [netlify.com](https://netlify.com/docs)
