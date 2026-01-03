# Google Analytics Setup Instructions

## ⚡ Quick Setup

Google Analytics has been added to your Rebo landing page! Follow these steps to activate it:

## 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Set up your account:
   - Account name: `Rebo`
   - Property name: `Rebo Landing Page`
   - Website URL: Your Vercel domain
   - Industry: `Real Estate`
   - Reporting time zone: Your timezone

## 2. Get Your Measurement ID

1. After creating your property, you'll get a Measurement ID
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

## 3. Update Your Code

1. Open `/components/GoogleAnalytics.tsx`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:

```tsx
const GA_MEASUREMENT_ID = 'G-YOUR_ACTUAL_ID' // Replace with your ID
```

## 4. Deploy Changes

```bash
git add .
git commit -m "Add Google Analytics measurement ID"
git push
```

## 5. Verify It's Working

1. Visit your website
2. Go to Google Analytics → Reports → Real-time
3. You should see yourself as an active user

## 📊 What Gets Tracked?

- Page views
- User sessions
- Traffic sources
- Device types
- Geographic locations
- Time on site
- Bounce rate
- Download button clicks (App Store)

## 🎯 Custom Events (Optional)

The basic setup tracks standard metrics. To track specific actions like button clicks, you can add custom events:

```javascript
// Example: Track App Store button clicks
gtag('event', 'download_app', {
  'app_platform': 'ios',
  'button_location': 'hero_section'
});
```

## 📝 Important Notes

- Analytics data takes 24-48 hours to fully populate
- Real-time data shows immediately
- Make sure to comply with privacy regulations (GDPR, CCPA)
- Consider adding a cookie consent banner if required in your region

## 🔗 Useful Links

- [Google Analytics Dashboard](https://analytics.google.com/)
- [Google Analytics Help](https://support.google.com/analytics)
- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1)