# ⚜️ Mugashra Bridal Artistry

A luxury bridal atelier web platform inspired by high-end South Indian editorial aesthetics. Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Payload CMS 3.x**.

---

## 📑 Table of Contents

- [🏛️ System Architecture](#️-system-architecture)
- [✨ Core Capabilities & Editorial Features](#-core-capabilities--editorial-features)
- [🛡️ Security Architecture & Portal Obfuscation](#️-security-architecture--portal-obfuscation)
- [🗄️ Database & Migration Strategy](#️-database--migration-strategy)
- [📂 Directory Structure](#-directory-structure)
- [📋 Content Models & Schemas](#-content-models--schemas)
- [🚀 Local Development Setup](#-local-development-setup)
- [🔑 Admin Authentication & Password Recovery](#-admin-authentication--password-recovery)
- [🌐 Production Deployment (Vercel + Neon)](#-production-deployment-vercel--neon)
- [🛠️ NPM Scripts Reference](#️-npm-scripts-reference)

---

## 🏛️ System Architecture

Mugashra operates on a hybrid architecture combining a high-performance Next.js 16 frontend with an embedded, headless Payload CMS 3.x studio engine.

```mermaid
flowchart TD
    subgraph Client ["Client Devices"]
        Desktop["Desktop Browser (Editorial Canvas)"]
        Mobile["Mobile Browser (Touch-Optimized)"]
    end

    subgraph Edge ["Edge & CDN Layer (Vercel)"]
        VercelCDN["Vercel Edge Network / CDN"]
        SSL["SSL / TLS Termination"]
    end

    subgraph AppRouter ["Next.js 16 App Router Engine"]
        FrontendRoutes["Public Pages (app/(frontend)/*)\n- Home (/)\n- About (/about)\n- Services & Pricing (/services)\n- Portfolio (/portfolio)\n- Testimonials (/testimonials)\n- Contact (/contact)"]
        
        AdminGateway["Secure Studio Portal (app/(payload)/studio-portal/*)\n- Obfuscated Route: /studio-portal\n- Custom Branding & Nav\n- Stealth 404 on /admin"]
        
        ServerActions["Server Actions & API\n- submitEnquiry Action\n- REST & GraphQL Endpoints"]
        
        Fallbacks["Graceful Content Fallbacks\n- data/seedData.ts (Zero-Downtime Guarantee)"]
    end

    subgraph CMS ["Payload CMS 3.x Engine"]
        Config["payload.config.ts\n(Lexical Editor, Auth Policies)"]
        Collections["Collections & Globals:\n- Enquiries\n- Users\n- Media\n- FounderPage Global"]
    end

    subgraph DB ["Dual Database Engine"]
        DevDB["Development:\nSQLite (mugashra.db)\nZero-Config Local File"]
        ProdDB["Production:\nNeon Serverless PostgreSQL\nConnection Pool + DDL Migrations"]
    end

    Client -->|HTTPS| Edge
    Edge --> AppRouter
    FrontendRoutes -->|Local Payload SDK / Cache| CMS
    AdminGateway -->|Authenticated Session| CMS
    ServerActions -->|Mutation| CMS
    FrontendRoutes -.->|Database Offline / Cold| Fallbacks
    CMS -->|NODE_ENV === development| DevDB
    CMS -->|NODE_ENV === production| ProdDB
```

---

## ✨ Core Capabilities & Editorial Features

- **Editorial Luxury Aesthetics**: Hallmark design system adhering to quiet luxury typography (`Inter` sans-serif + `Lora` editorial serif) with warm champagne gold accents (`#B58A69`) and deep obsidian backdrop (`#0A0A0A`).
- **Responsive Dual-Hero Media**: High-definition wide-angle framing on desktop paired with vertically balanced 9:16 mobile portraits (`< 768px`) maintaining unobstructed focal composure across all viewports.
- **Interactive Vision & Mission**: Dynamic expanding bracket animations (`{ VISION }` & `{ MISSION }`) with rotating diamond watermark line-art and staggered typography reveals.
- **Feedback Speech Bubble Cloud**: Staggered quote pills with floating hover physics, glowing quotation marks, and verified client attributions.
- **Framed Luxury Pricing Matrix**: High Definition, Bridal Ceremony, Reception, Outstation Wedding suites, Saree Draping add-ons, and Groom/Crew bridal party packages.
- **Stacked Category Portfolio**: Full-width interactive accordion category strips (`BRIDAL ↗`, `FASHION ↗`, `COMMERCIALS ↗`) with modal zoom inspections.
- **Resilient Seed Fallbacks**: 100% reliable rendering with fallback seed data in `data/seedData.ts` ensuring uninterrupted visual fidelity even if database cold-starts or unseeded connections occur.

---

## 🛡️ Security Architecture & Portal Obfuscation

To defend against automated bot exploitation, credential stuffing, and unauthorized discovery, Mugashra implements multi-layered security controls:

### 1. Obfuscated Administrative Route (`/studio-portal`)
- The standard `/admin` route is completely disabled and returns an HTTP `404 Not Found`.
- The genuine CMS portal is mounted exclusively at `/studio-portal`.
- Configured at root level in `payload.config.ts` (`routes: { admin: '/studio-portal' }`) and handled via Next.js App Router dynamic segment catch-alls at `app/(payload)/studio-portal/[[...segments]]/page.tsx`.

### 2. Brute-Force Rate Limiting & Account Lockout
Configured inside `collections/Users.ts`:
- **Max Login Attempts**: `5` failed attempts trigger automatic account lockdown.
- **Lockout Duration**: `15 minutes` cooldown before credentials can be re-evaluated.
- **Session Tokens**: 2-hour expiration with `SameSite=Lax` and `Secure` cookie flags enabled in production.

### 3. Out-of-Band Password Recovery (Method B)
In high-security deployments where outbound SMTP email services are unconfigured or intentionally air-gapped, administrators reset passwords directly via an authorized CLI runner:
```bash
npm run reset-password [newPassword]
```
This utility directly updates the password hash, unlocks the account (`lockUntil: null`), and clears the failed attempt counter (`loginAttempts: 0`).

---

## 🗄️ Database & Migration Strategy

Mugashra utilizes an **adaptive dual-database architecture**:

| Environment | Engine | Driver | Configuration |
| :--- | :--- | :--- | :--- |
| **Development** | SQLite | `@payloadcms/db-sqlite` | Local file `./mugashra.db` (zero configuration required) |
| **Production** | PostgreSQL | `@payloadcms/db-postgres` | Neon Serverless PostgreSQL with connection pooling & strict DDL migrations |

### Automated Production Migrations
In production environments (`NODE_ENV === 'production'`), Payload CMS disables ad-hoc schema pushes (`pushDevSchema: false`) to safeguard schema integrity. 

- Schema DDL files reside in `migrations/`.
- `payload.config.ts` registers compiled migrations via `prodMigrations: migrations`.
- Migrations execute automatically on Vercel deployment during server initialization, ensuring all tables (`users`, `media`, `enquiries`, `founder_page`) exist before incoming requests are served.

---

## 📂 Directory Structure

```
mugashra/
├── app/
│   ├── (frontend)/                   # Public Next.js App Router presentation layer
│   │   ├── about/                    # Founder Story & Atelier Team Specialists
│   │   ├── contact/                  # Date Reservation & Atelier Details
│   │   ├── portfolio/                # Editorial Portfolio Showcase & Lightbox
│   │   ├── services/                 # Pricing & Service Packages Breakdown
│   │   ├── testimonials/             # Client Feedback Cloud
│   │   ├── globals.css               # Hallmark design tokens & luxury keyframes
│   │   ├── layout.tsx                # Master HTML Shell, Metadata & Font Declarations
│   │   └── page.tsx                  # Landing Page (Hero, Vision/Mission, Feedback)
│   ├── (payload)/                    # Headless CMS Engine
│   │   ├── api/                      # GraphQL & REST API route handlers
│   │   ├── studio-portal/            # Obfuscated CMS Admin Interface (/studio-portal)
│   │   │   └── [[...segments]]/      # Dynamic segment handler for Payload views
│   │   ├── custom.scss               # CMS Theme & luxury interface customizations
│   │   └── layout.tsx                # CMS Shell wrapper with server configuration
│   ├── actions/                      # Next.js Server Actions
│   │   └── submitEnquiry.ts          # Validated bridal inquiry submission pipeline
│   ├── not-found.tsx                 # Custom 404 error handler
│   ├── robots.ts                     # Search engine crawler policies
│   └── sitemap.ts                    # Dynamic XML sitemap generator
├── collections/                      # Payload CMS Collection Configurations
│   ├── Enquiries.ts                  # Bridal leads, contact payloads, and booking status
│   ├── Media.ts                      # Secure media storage for editorial portraits
│   └── Users.ts                      # Admin users, roles, rate-limiting & auth settings
├── components/                       # Reusable UI & Layout Components
│   ├── live-headers/                 # Interactive live-preview responsive headers
│   │   ├── LiveFounderHeader.tsx
│   │   ├── LiveHeroHeader.tsx
│   │   └── LivePortfolioHeader.tsx
│   ├── payload/                      # Custom Payload CMS UI injection components
│   │   ├── DashboardWelcome.tsx      # Branded studio welcome card
│   │   ├── Icon.tsx                  # Custom CMS studio icon
│   │   ├── Logo.tsx                  # High-resolution gold atelier mark
│   │   └── NavFooter.tsx             # Studio versioning and support links
│   ├── ui/                           # Primitive interactive elements
│   ├── BridalFAQ.tsx                 # Accordion bridal inquiry inquiries
│   ├── BridalJourney.tsx             # Step-by-step bridal booking workflow
│   ├── EnquiryForm.tsx               # Minimalist underline lead reservation form
│   ├── FeedbackSection.tsx           # Floating review speech bubbles
│   ├── Footer.tsx                    # 3-column editorial studio footer
│   ├── Header.tsx                    # Floating frosted-glass responsive masthead
│   ├── PageTransition.tsx            # Smooth framer-motion page enter/exit triggers
│   ├── PortfolioScrollGallery.tsx    # Horizontal scroll gallery & lightbox modal
│   ├── PowderBurst.tsx               # Editorial cosmetic particle canvas effects
│   ├── PricingSection.tsx            # Star-cornered package cards with pricing matrix
│   ├── TransformationShowcase.tsx    # Before/After interactive slider
│   ├── VisionMissionSection.tsx      # Expanding bracket dynamic typography
│   └── WhatsAppButton.tsx            # Direct atelier concierge click-to-chat
├── data/
│   └── seedData.ts                   # Verified client reviews, packages & fallback data
├── globals/                          # Single-instance CMS Global Schemas
│   └── FounderPage.ts                # Master control for founder editorial image & bio
├── lib/
│   ├── payload.ts                    # Cached singleton Payload instance accessor
│   └── utils.ts                      # Tailwind clsx / twMerge helper utilities
├── migrations/                       # Production PostgreSQL DDL Schema Migrations
│   ├── 20260926_151634_initial.ts    # Initial database tables and indexes
│   └── index.ts                      # Migration bundle exporter for payload.config.ts
├── public/                           # Static assets, web manifests & imagery
│   ├── images/                       # Compressed WebP / PNG editorial photography
│   └── media/                        # Local file storage for uploaded CMS assets
├── scripts/                          # Utility & Administrative CLI Runners
│   ├── patch-payload.cjs             # Compatibility patch for Next.js build runtime
│   ├── reset-password.ts             # Method B administrative credential recovery
│   └── seed-db.ts                    # Automated database seeder with initial content
├── types/                            # Centralized TypeScript definitions
│   └── index.ts                      # Domain types (Enquiries, Packages, Testimonials)
├── next.config.ts                    # Next.js compiler, Sharp & image domain settings
├── package.json                      # Dependency manifests and scripts
├── payload.config.ts                 # Master CMS configuration (routes, auth, adapters)
└── tsconfig.json                     # Strict TypeScript compiler options
```

---

## 📋 Content Models & Schemas

### 1. `Enquiries` (`collections/Enquiries.ts`)
Tracks prospective bridal leads submitted through `/contact` or inline forms:
- `clientName` (Text, required)
- `phone` (Text, required)
- `email` (Email)
- `eventDate` (Date)
- `eventVenue` (Text)
- `serviceRequired` (Select: Bridal HD, Reception, Outstation, Saree Draping)
- `guestCount` (Number)
- `notes` (Textarea)
- `status` (Select: `new`, `contacted`, `confirmed`, `archived`)

### 2. `Users` (`collections/Users.ts`)
Administrative accounts managing the atelier:
- `email` (Unique identifier for login)
- `password` (Argon2 / scrypt hashed)
- `name` (Staff member name)
- `roles` (Array: `admin`, `editor`)
- `loginAttempts` (Internal brute-force counter)
- `lockUntil` (ISO timestamp for active lockout)

### 3. `Media` (`collections/Media.ts`)
Asset storage for founder portraits, portfolio highlights, and logos:
- Upload directory: `./public/media` (or cloud bucket if configured)
- Generates automatic responsive image dimensions and WebP conversions via `sharp`.

### 4. `FounderPage` (`globals/FounderPage.ts`)
Global single-instance schema:
- `ownerPhoto` (Relationship -> `Media`)
- `name` (Text: e.g. "Shwetha Mohan")

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js**: `v20.x` or `v22.x`
- **npm**: `v10.x` or higher

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/Sathyabalan6/mugashra.git
cd mugashra
npm install
```

> [!NOTE]
> `.npmrc` is pre-configured with `legacy-peer-deps=true` to guarantee deterministic resolution between React 19, Next.js 16, and Payload CMS dependencies.

### 3. Environment Configuration
Create a `.env` file in the project root:
```env
# Database (Defaults to local SQLite if omitted)
DATABASE_URI=file:./mugashra.db

# Authentication Secret (Minimum 32 random characters in production)
PAYLOAD_SECRET=development-secret-key-32-chars-long-minimum

# Application URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 4. Seed the Database
Populate initial admin credentials and default studio configuration:
```bash
npm run seed
```

### 5. Launch Development Server
```bash
npm run dev
```

- **Frontend Website**: [http://localhost:3000](http://localhost:3000)
- **CMS Admin Studio**: [http://localhost:3000/studio-portal](http://localhost:3000/studio-portal)

---

## 🔑 Admin Authentication & Password Recovery

### Default Development Credentials
- **Portal URL**: `/studio-portal`
- **Email**: `mugashraartistry@gmail.com`
- **Password**: *(Configured during `npm run seed` or custom set)*

### Resetting Password / Clearing Account Lockout
If an administrator is locked out after 5 consecutive failed attempts, run:
```bash
npm run reset-password "YourNewSecurePassword123!"
```
This utility:
1. Resets the user's password hash in the active database (SQLite or Postgres).
2. Clears `loginAttempts` back to `0`.
3. Sets `lockUntil` to `null`, immediately unlocking the account.

---

## 🌐 Production Deployment (Vercel + Neon)

### 1. Database Provisioning
1. Create a serverless PostgreSQL database on **Neon** (or enable the Vercel Neon Marketplace integration).
2. Obtain the pooled connection string (e.g., `postgresql://user:pass@ep-xyz-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require`).

### 2. Environment Variables on Vercel
Add the following environment variables in **Vercel Project Settings -> Environment Variables**:

| Variable | Description |
| :--- | :--- |
| `POSTGRES_URL` (or `DATABASE_URI`) | Neon pooled PostgreSQL connection string |
| `PAYLOAD_SECRET` | Strong cryptographic random secret (>= 32 chars) |
| `NEXT_PUBLIC_SERVER_URL` | Public production domain (e.g. `https://mugashra.vercel.app`) |

### 3. Build & Deploy
Push commits directly to `main`. Vercel will execute:
```bash
npm run build
```
- Next.js compiles the App Router pages with Turbopack.
- Payload CMS runs `prodMigrations` against Neon PostgreSQL, initializing all required relational tables.
- The site deploys with zero downtime.

---

## 🛠️ NPM Scripts Reference

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server with Turbopack at `localhost:3000` |
| `npm run build` | Compiles production assets and generates static page artifacts |
| `npm run start` | Boots the Next.js production server |
| `npm run lint` | Runs ESLint 9 checks across application code |
| `npm run seed` | Seeds initial admin user, founder profile, and default packages |
| `npm run reset-password` | Resets admin password, clears lockout, and resets failed login count |
| `npm run postinstall` | Automatically executes `patch-payload.cjs` for runtime stability |

---

## 📄 License & Credits

Designed & developed for **Mugashra Bridal Artistry**. All rights reserved. Editorial photographs and visual assets are proprietary to Mugashra Bridal Atelier.
