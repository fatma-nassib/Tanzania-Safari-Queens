# Tanzania Safari Queens — Angular Website 

> **Women Travel & Investment Community** | Angular 17 + Firebase + Flutterwave

##  Design System

### Color Palette (Earthy Safari — inspired by serengeti.com)
| Token | Hex | Usage |
|---|---|---|
| `$savanna` | `#C8923A` | Primary accent, CTAs, highlights |
| `$savanna-dark` | `#9E6D1E` | Hover states |
| `$earth` | `#3D2B1F` | Footer, headings, sidebar |
| `$earth-mid` | `#5C3D2E` | Navbar scrolled bg |
| `$terracotta` | `#B05A34` | Error states, secondary accent |
| `$safari-green` | `#4A6741` | Success, confirmed status |
| `$cream` | `#FAF6EF` | Page background |
| `$parchment` | `#F0E9DC` | Section alternates |
| `$ivory` | `#FDF9F4` | Cards |

### Typography
- **Display**: `Cormorant Garamond` (headings, hero titles, prices)
- **Body**: `Jost` (navigation, paragraphs, UI elements)
- Both load from Google Fonts — no local files needed

### Photography
All images are real Unsplash photos of African / Tanzanian scenes and Black women.
- Hero images: full-screen cinematic shots of safari, beaches, mountains
- Gallery: 29 real event-style photos across 6 categories
- Tours & destinations: authentic African location photography
- Auth pages: split-screen with immersive African imagery

##  Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add Firebase config to environment.ts
nano src/environments/environment.ts

# 3. Run
ng serve    # → http://localhost:4200
```

##  Project Structure
```
src/app/
├── core/           # Guards, interceptors, services, models
│   ├── guards/     # authGuard (functional), adminGuard
│   ├── models/     # Tour, Booking, User, Destination, Review
│   └── services/   # AuthService, TourService, BookingService,
│                   # ReviewService, SeoService, AnalyticsService
├── shared/         # SharedModule with all reusable pieces
│   ├── components/ # Navbar, Footer, HeroBanner, PageBanner,
│   │               # TourCard, DestinationCard, ReviewCard,
│   │               # WhatsappBtn, LoadingSpinner
│   ├── directives/ # scrollReveal, lazyImg
│   └── pipes/      # safeUrl, stars
└── features/       # 9 lazy-loaded feature modules
    ├── home/           # Landing page (hero, stats, about, destinations, tours, values, testimonials)
    ├── about/          # Mission, vision, core values, timeline, objectives
    ├── destinations/   # List (filter by region) + Detail pages
    ├── tours/          # List (filter+search) + Detail (itinerary, gallery, reviews, booking widget)
    ├── gallery/        # Masonry photo grid with lightbox (6 categories, 29 photos)
    ├── contact/        # Contact form → Firestore + FAQ accordion
    ├── auth/           # Login / Register (split-image layout) / Forgot Password
    ├── booking/        # 3-step booking wizard (tour → traveler → payment)
    └── admin/          # Dashboard KPIs, Bookings management, Tours management
```

##  Setup Checklist

### Firebase
1. Go to https://console.firebase.google.com
2. Create project → Add Web App → copy firebaseConfig
3. Paste into `src/environments/environment.ts`
4. Enable: **Firestore Database**, **Authentication** (Email + Google), **Storage**
5. Deploy rules: `firebase deploy --only firestore:rules,firestore:indexes`

### First Admin
After creating your account, open Firebase Console → Firestore → `users` → your doc → edit `role` to `"admin"`

### Seed Database
```bash
npm install firebase-admin
GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json node scripts/seed-firestore.js
```

### Flutterwave (Tanzania payments)
1. Create account at https://flutterwave.com
2. Get public key → `src/environments/environment.ts` → `flutterwave.publicKey`

##  Deploy

```bash
# Build for production
npm run build:prod

# Firebase Hosting
npm install -g firebase-tools
firebase login && firebase init hosting
firebase deploy

# OR Vercel (SSR)
npm install -g vercel
vercel --prod
```

##  Replacing Placeholder Images
All current images use Unsplash URLs. To use your own TSQ photos:
1. Upload to `src/assets/images/` (or Firebase Storage)
2. Replace Unsplash URLs in:
   - `src/app/core/services/tour.service.ts` (tour coverImages)
   - `src/app/features/home/home.component.ts` (destinations, moments, testimonials)
   - `src/app/features/gallery/gallery.component.ts` (all 29 gallery photos)
   - `src/app/features/about/about.component.ts` (gallery strip)

Built for Tanzania Safari Queens
