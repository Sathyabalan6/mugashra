# ⚜️ Mugashra Bridal Artistry

A luxury bridal atelier web application inspired by high-end South Indian editorial aesthetics. Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **Payload CMS 3.0**.

---

## 🏛️ Architecture & Features

- **Editorial Luxury Aesthetics**: Hallmark & Impeccable design system with quiet luxury typography (`Inter` display + `Lora` editorial serif) and warm champagne gold accents (`#B58A69`).
- **Responsive Dual-Hero Media**: High-definition wide cover on desktop and dedicated vertical portrait framing on mobile (`< 768px`) with unobstructed facial focal point.
- **Interactive Vision & Mission**: Dynamic expanding bracket animations (`{ VISION }` & `{ MISSION }`) with rotating diamond watermark line-art.
- **Feedback Speech Bubble Cloud**: Staggered quote pills with floating hover physics, glowing quotation marks, and client attributions.
- **Framed Star-Cornered Pricing**: High Definition, Bridal Ceremony/Reception, Outstation Wedding suites, Additional Drape charges, and Groom/Crew pricing breakdowns.
- **Stacked Category Portfolio**: Full-width interactive accordion category strips (`BRIDAL ↗`, `FASHION ↗`, `COMMERCIALS ↗`) with full-screen lightbox modal.
- **Adaptive Database Architecture**:
  - **Local Development**: Uses `@payloadcms/db-sqlite` with zero credential setup (`DATABASE_URI=file:./mugashra.db`).
  - **Production Deployment**: Automatically switches to `@payloadcms/db-postgres` when a PostgreSQL connection string (`postgresql://...`) is provided.
- **Resilient Seed Fallbacks**: 100% reliable rendering with fallback seed data for instant preview even if the database is unseeded.

---

## 📂 Project Structure

```
├── app/
│   ├── (frontend)/           # Public Next.js App Router routes
│   │   ├── page.tsx          # Homepage with Full-Bleed Hero, Vision/Mission, Feedback
│   │   ├── services/         # Pricing & Service Packages
│   │   ├── portfolio/        # Editorial Portfolio Showcase
│   │   ├── about/            # Founder Story & Atelier Team Specialists
│   │   ├── testimonials/     # Client Feedback Cloud
│   │   ├── contact/          # Date Reservation & Atelier Details
│   │   ├── layout.tsx        # Root HTML Shell & Font Configuration
│   │   └── globals.css       # Hallmark tokens & luxury keyframes
│   ├── (payload)/            # Payload CMS Admin & API routes
│   │   ├── admin/            # CMS Dashboard (/admin)
│   │   └── api/              # GraphQL & REST Endpoints
│   └── actions/              # Server Actions (e.g. submitEnquiry)
├── collections/              # Payload CMS Content Schemas
│   ├── Enquiries.ts          # Client Lead Submissions
│   ├── PortfolioItems.ts     # Portfolio Looks & Details
│   ├── ServicePackages.ts    # Service Packages & Pricing
│   ├── TeamMembers.ts        # Senior Specialists & Roles
│   ├── Testimonials.ts       # Verified Client Reviews
│   ├── Media.ts              # Uploaded Media Assets
│   └── Users.ts              # CMS Admin Users
├── components/               # Modular UI Components
│   ├── Header.tsx            # Floating Transparent Masthead & Slideover Menu
│   ├── Footer.tsx            # 3-Column Editorial Newsletter & Studio Bio
│   ├── VisionMissionSection.tsx # Animated Bracket Section
│   ├── FeedbackSection.tsx   # Animated Speech Bubble Cloud
│   ├── PricingSection.tsx    # Framed Star Cards & Ceremony Packages
│   ├── PortfolioGallery.tsx  # Gallery with Lightbox Modal
│   ├── EnquiryForm.tsx       # 8-State Underline Booking Form
│   └── WhatsAppButton.tsx    # Minimalist Booking Float Button
├── data/
│   └── seedData.ts           # Fallback Content & Initial Studio Seed Data
├── globals/
│   └── SiteSettings.ts       # Global Studio Atelier Settings
├── lib/
│   └── payload.ts            # Local Payload Client Helper
├── public/
│   └── images/               # High-res Optimized Bridal Photography
├── payload.config.ts         # Dual SQLite / PostgreSQL Payload Config
└── .env                      # Environment Variables
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run the Development Server
```powershell
npm run dev
```

- **Frontend Website**: [http://localhost:3000](http://localhost:3000)
- **Payload Admin Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)

### 3. Production Build
```powershell
npm run build
npm start
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env`:

```env
# Local SQLite (Default)
DATABASE_URI=file:./mugashra.db

# Production PostgreSQL (e.g. Neon, Supabase, Vercel Postgres)
# DATABASE_URI=postgresql://user:password@host:5432/database

PAYLOAD_SECRET=your-secret-payload-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```
