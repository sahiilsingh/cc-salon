# The C&C House Of Hair & Beauty Salon

A production-ready website and salon operations system for **The C&C House Of Hair & Beauty Salon** in Fatorda, Margao, Goa, India.

## 🏠 Overview

This is a full-stack Next.js application that provides:

- **Public website** — Premium, warm, locally-grounded salon experience
- **Online booking** — Four-step guided booking flow with mock/live payment
- **Admin dashboard** — Service, offer, booking, and availability management
- **Hardcoded chatbot** — Deterministic assistant for service discovery
- **Mock integrations** — Payment (Razorpay-ready) and WhatsApp (Cloud API-ready)

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (App Router), React, TypeScript, Tailwind CSS v4 |
| Backend | Next.js API Routes / Server Components |
| Database | SQLite (via Prisma ORM) — easily swappable to PostgreSQL |
| Auth | JWT + bcrypt cookie-based authentication |
| Payments | Mock provider (Razorpay adapter ready) |
| Messaging | Mock WhatsApp (Cloud API boundary defined) |
| Deployment | Vercel |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/sahiilsingh/cc-salon.git
cd cc-salon

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Create and seed database
npx prisma db push
node prisma/seed.js

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Admin Login

```
Email: owner@ccsalon.com
Password: admin123
```

## 📁 Project Structure

```
cc-salon/
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── seed.js            # Seed data
│   └── dev.db             # SQLite database
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   │   ├── auth/
│   │   │   ├── bookings/
│   │   │   ├── services/
│   │   │   ├── offers/
│   │   │   ├── settings/
│   │   │   ├── availability/
│   │   │   └── health/
│   │   ├── admin/         # Admin dashboard pages
│   │   │   ├── login/
│   │   │   ├── bookings/
│   │   │   ├── services/
│   │   │   ├── offers/
│   │   │   ├── availability/
│   │   │   └── settings/
│   │   ├── book/          # Booking flow
│   │   ├── booking/       # Booking confirmation
│   │   ├── services/      # Service catalogue
│   │   ├── gallery/       # Gallery
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── offers/        # Offers page
│   │   ├── privacy/       # Privacy policy
│   │   ├── terms/         # Terms of service
│   │   └── cancellation-policy/
│   ├── components/        # Shared components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileActionBar.tsx
│   │   ├── Chatbot.tsx
│   │   └── JsonLd.tsx
│   └── lib/               # Core libraries
│       ├── db.ts           # Prisma client
│       ├── auth.ts         # Authentication
│       ├── constants.ts    # Business constants
│       ├── utils.ts        # Utilities
│       ├── validations.ts  # Zod schemas
│       ├── booking/        # Booking engine
│       ├── payment/        # Payment providers
│       └── messaging/      # Messaging providers
├── .env.example
├── next.config.ts
└── package.json
```

## 🌐 Routes

### Public Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, gallery, reviews |
| `/services` | Searchable service catalogue |
| `/services/[slug]` | Service detail page |
| `/book` | Four-step booking flow |
| `/booking/[reference]` | Booking confirmation/management |
| `/offers` | Active offers (when enabled) |
| `/gallery` | Photo gallery |
| `/about` | About the salon |
| `/contact` | Contact info, hours, map |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cancellation-policy` | Cancellation policy |

### Admin Routes

| Route | Description |
|-------|-------------|
| `/admin/login` | Admin authentication |
| `/admin` | Dashboard overview |
| `/admin/bookings` | Booking management |
| `/admin/services` | Service CRUD |
| `/admin/offers` | Offer management with global toggle |
| `/admin/availability` | Hours, blackouts, capacity |
| `/admin/settings` | Business settings |

## 🎨 Design System

The design uses warm, premium colors inspired by the salon brand:

| Token | Color | Use |
|-------|-------|-----|
| `--ink` | #241F1C | Primary text |
| `--espresso` | #3A2D29 | Dark surfaces |
| `--ivory` | #FBF7F1 | Main background |
| `--sand` | #EFE5D9 | Section backgrounds |
| `--blush` | #D9A99B | Soft accent |
| `--terracotta` | #A96554 | Primary accent |
| `--gold` | #B58A55 | Decorative highlights |

Typography: **Cormorant Garamond** (display) + **DM Sans** (body)

## 🔧 Environment Variables

See `.env.example` for all available variables:

```bash
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret"
PAYMENT_MODE="mock"        # mock | live
WHATSAPP_MODE="mock"       # mock | cloud
RAZORPAY_KEY_ID=""         # For live payment
RAZORPAY_KEY_SECRET=""     # For live payment
```

## 📋 Business Facts

All seeded data comes from public research (Google Maps, public social media):

- **Address**: Shop No. G-1, Utopia Apartment, Murida, Fatorda, Margao, Goa 403602
- **Phone**: +91 96070 23902
- **Rating**: 4.9 from 80 Google reviews
- **Services**: Seeded as draft/review — no invented prices or hours

## 🚀 Deployment

### Deploy to Vercel

```bash
vercel
```

### Production Checklist

- [ ] Update JWT_SECRET to a secure random string
- [ ] Configure Razorpay credentials for live payments
- [ ] Owner confirms business hours
- [ ] Owner reviews and activates services with prices
- [ ] Owner uploads real gallery images
- [ ] Owner configures offer validity dates
- [ ] Set up a PostgreSQL database for production
- [ ] Configure custom domain

## 📜 License

Private — built for The C&C House Of Hair & Beauty Salon.
