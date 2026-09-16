import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://mugashra.com'

export const viewport: Viewport = {
  themeColor: '#181514',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Mugaashra Bridal Studio | Luxury Bridal & HD Makeup Studio Madurai',
  description: 'Luxury bridal styling, sacred Tamil Muhurtham makeup, Reception airbrush artistry, and bespoke saree draping by Lead Master Artist Shwetha Mohan. Based in Madurai, traveling worldwide.',
  keywords: ['Bridal Makeup Madurai', 'Muhurtham Makeup Artist Madurai', 'Airbrush Makeup Madurai', 'South Indian Bridal Makeup', 'Mugaashra Bridal Studio', 'Shwetha Mohan'],
  openGraph: {
    title: 'Mugaashra Bridal Studio | Luxury Bridal & HD Makeup Studio Madurai',
    description: 'Luxury bridal styling, sacred Tamil Muhurtham makeup, Reception airbrush artistry, and bespoke saree draping by Lead Master Artist Shwetha Mohan. Based in Madurai, traveling worldwide.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mugaashra Bridal Studio',
    images: [
      {
        url: '/images/hero-bride.png',
        width: 1200,
        height: 630,
        alt: 'Mugaashra Bridal Studio South Indian Bride',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Mugaashra Bridal Studio',
  image: `${baseUrl}/images/shwetha-mohan.jpg`,
  description: 'Luxury South Indian bridal makeup, High Definition and Temptu Airbrush artistry, sacred Muhurtham styling, and bespoke Kanjeevaram saree draping.',
  telephone: '+918610597490',
  email: 'Mugaashra@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5/Anna first cross street, 2nd floor, Pethaniyapuram',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '625016',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9252,
    longitude: 78.1198,
  },
  priceRange: '₹₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:00',
      closes: '20:00',
    },
  ],
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] antialiased selection:bg-[var(--color-accent)] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-[#181514] focus:text-[var(--color-accent)] focus:border focus:border-[var(--color-accent)] font-sans text-xs uppercase tracking-[2px] shadow-2xl"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
