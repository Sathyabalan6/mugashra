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
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#222222]/90 antialiased selection:bg-[#B58A69] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
