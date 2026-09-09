// Root-level not-found — catches ALL unmatched URLs globally.
// Must import globals.css itself since there is no root app/layout.tsx.
import './(frontend)/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found · Mugashra Bridal Artistry',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#181514',
          color: '#FAFAF8',
          fontFamily: 'system-ui, sans-serif',
          minHeight: '100vh',
        }}
      >
        <main
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5rem 1.5rem',
            overflow: 'hidden',
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(181,138,105,0.10) 0%, transparent 65%), #181514',
          }}
        >
          {/* Top accent line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, #B58A69 30%, #B58A69 70%, transparent 100%)',
              opacity: 0.35,
            }}
          />

          <div
            style={{
              maxWidth: '760px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 0,
            }}
          >
            {/* Eyebrow */}
            <span
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '3.5px',
                color: '#B58A69',
                fontWeight: 600,
                marginBottom: '1.25rem',
                display: 'block',
              }}
            >
              Bridal Atelier · Missing Page
            </span>

            {/* Giant 404 numeral */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(7rem, 4rem + 16vw, 15rem)',
                lineHeight: 1,
                letterSpacing: '0.04em',
                background:
                  'linear-gradient(180deg, #F5E6D8 0%, #B58A69 45%, #7A5032 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 8px 32px rgba(181,138,105,0.20))',
                userSelect: 'none',
              }}
            >
              404
            </div>

            {/* Gold hairline */}
            <div
              aria-hidden="true"
              style={{
                marginTop: '0.25rem',
                marginBottom: '1.5rem',
                height: '1px',
                width: '80px',
                background:
                  'linear-gradient(90deg, transparent, #B58A69, transparent)',
                opacity: 0.6,
              }}
            />

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.75rem, 1.2rem + 3vw, 3.25rem)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: '#FAFAF8',
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              This look isn&apos;t in the lookbook.
            </h1>

            {/* Body */}
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '420px',
                marginTop: '1.25rem',
              }}
            >
              The page you&apos;re looking for doesn&apos;t exist — it may have moved,
              been renamed, or is resting in our private atelier archives.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center',
                marginTop: '2rem',
              }}
            >
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.875rem 2rem',
                  background: '#B58A69',
                  color: '#181514',
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '2.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  minHeight: '48px',
                  transition: 'background 0.2s',
                }}
              >
                Return Home ↗
              </Link>
              <Link
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '2.5px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  minHeight: '48px',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                View Portfolio ↗
              </Link>
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              style={{
                margin: '2.5rem 0',
                height: '1px',
                width: '100%',
                maxWidth: '520px',
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
              }}
            />

            {/* Navigation cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                width: '100%',
              }}
            >
              {[
                {
                  num: '01',
                  label: 'Gallery',
                  title: 'Bridal Portfolio',
                  desc: 'Tamil Muhurtham & Airbrush looks.',
                  href: '/portfolio',
                },
                {
                  num: '02',
                  label: 'Pricing',
                  title: 'Packages & Rates',
                  desc: 'Master Artist & Atelier packages.',
                  href: '/services',
                },
                {
                  num: '03',
                  label: 'Direct',
                  title: 'Atelier Contact',
                  desc: 'WhatsApp chat & booking desk.',
                  href: '/contact',
                },
              ].map((card) => (
                <Link
                  key={card.num}
                  href={card.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: '1.25rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: '#1E1A18',
                    textDecoration: 'none',
                    textAlign: 'left',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '2.5px',
                      color: '#B58A69',
                      fontWeight: 600,
                    }}
                  >
                    {card.num} · {card.label}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '15px',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 400,
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h2>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
                      ↗
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* Footer note */}
            <p
              style={{
                marginTop: '1.75rem',
                fontFamily: 'system-ui, sans-serif',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.5px',
              }}
            >
              Still lost?{' '}
              <Link
                href="/contact"
                style={{ color: '#B58A69', textDecoration: 'underline' }}
              >
                Reach our desk ↗
              </Link>
            </p>
          </div>

          {/* Bottom accent line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, #B58A69 30%, #B58A69 70%, transparent 100%)',
              opacity: 0.18,
            }}
          />
        </main>
      </body>
    </html>
  )
}
