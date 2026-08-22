import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const lora = Lora({
  variable: '--font-serif-luxury',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mugashra Bridal Artistry | Luxury Bridal & HD Makeup Studio Chennai',
  description: 'Classic luxury bridal editorial styling, sacred Tamil Muhurtham makeup, Reception airbrush artistry, and bespoke saree draping. Based in Chennai, traveling worldwide.',
  keywords: ['Bridal Makeup Chennai', 'Muhurtham Makeup Artist', 'South Indian Bridal Makeup', 'Airbrush Makeup Chennai', 'Mugashra Artistry'],
  openGraph: {
    title: 'Mugashra Bridal Artistry | Luxury Bridal & HD Makeup Studio Chennai',
    description: 'Classic luxury bridal editorial styling, sacred Tamil Muhurtham makeup, Reception airbrush artistry, and bespoke saree draping. Based in Chennai, traveling worldwide.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mugashra Bridal Artistry',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Mugashra Bridal Artistry',
  image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  description: 'Luxury South Indian bridal makeup, High Definition and Temptu Airbrush artistry, sacred Muhurtham styling, and bespoke Kanjeevaram saree draping.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Atelier Studio',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600028',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0827,
    longitude: 80.2707,
  },
  priceRange: '₹₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] antialiased selection:bg-[var(--color-accent)] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
