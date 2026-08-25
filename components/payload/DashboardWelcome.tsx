import React from 'react'
import Link from 'next/link'

export const DashboardWelcome: React.FC = () => {
  return (
    <div className="mugashra-dashboard-root">
      {/* Hero Welcome Banner */}
      <div className="mugashra-hero-card">
        <div className="mugashra-hero-content">
          <div className="mugashra-hero-badge">
            <span className="mugashra-badge-dot"></span>
            <span>Atelier Systems Active • Chennai Base</span>
          </div>

          <h1 className="mugashra-hero-title">
            Mugashra Artistry <em>Atelier</em>
          </h1>
          <p className="mugashra-hero-subtitle">
            Classic Luxury Bridal Artistry • Editorial Masterclasses • Studio Management
          </p>

          <div className="mugashra-hero-actions">
            <Link
              href="/admin/collections/enquiries"
              className="mugashra-btn mugashra-btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Review Bridal Inquiries</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mugashra-btn mugashra-btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>View Live Website</span>
            </Link>
          </div>
        </div>

        <div className="mugashra-hero-crest">
          <div className="mugashra-crest-circle">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B58A69" strokeWidth="1.2">
              <path d="M12 2L21.5 12L12 22L2.5 12L12 2Z" />
              <path d="M7.5 15.5V9.5L12 14L16.5 9.5V15.5" stroke="#E8D8C8" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Launchpad Grid */}
      <div className="mugashra-grid">
        {/* Card 1: Inquiries */}
        <Link href="/admin/collections/enquiries" className="mugashra-card">
          <div className="mugashra-card-icon" style={{ background: 'rgba(181, 138, 105, 0.12)', color: '#B58A69' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="mugashra-card-body">
            <div className="mugashra-card-tag">Priority Leads</div>
            <h3 className="mugashra-card-title">Bridal Inquiries</h3>
            <p className="mugashra-card-desc">
              Manage incoming bride bookings, Muhurtham dates, venues & WhatsApp client communications.
            </p>
          </div>
          <div className="mugashra-card-footer">
            <span>Open Inquiries</span>
            <span className="mugashra-card-arrow">→</span>
          </div>
        </Link>

        {/* Card 2: Portfolio */}
        <Link href="/admin/collections/portfolio-items" className="mugashra-card">
          <div className="mugashra-card-icon" style={{ background: 'rgba(212, 163, 115, 0.12)', color: '#D4A373' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="mugashra-card-body">
            <div className="mugashra-card-tag">Artistry Gallery</div>
            <h3 className="mugashra-card-title">Portfolio Items</h3>
            <p className="mugashra-card-desc">
              Curate Muhurtham heritage silks, Reception high-glam looks, Haldi & Editorial masterclasses.
            </p>
          </div>
          <div className="mugashra-card-footer">
            <span>Manage Gallery</span>
            <span className="mugashra-card-arrow">→</span>
          </div>
        </Link>

        {/* Card 3: Packages */}
        <Link href="/admin/collections/service-packages" className="mugashra-card">
          <div className="mugashra-card-icon" style={{ background: 'rgba(140, 94, 58, 0.12)', color: '#8C5E3A' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="mugashra-card-body">
            <div className="mugashra-card-tag">Pricing & Tiers</div>
            <h3 className="mugashra-card-title">Service Packages</h3>
            <p className="mugashra-card-desc">
              Configure Founder Tier & Atelier Team pricing, session durations, inclusions, and special badges.
            </p>
          </div>
          <div className="mugashra-card-footer">
            <span>Edit Packages</span>
            <span className="mugashra-card-arrow">→</span>
          </div>
        </Link>

        {/* Card 4: Site Settings */}
        <Link href="/admin/globals/site-settings" className="mugashra-card">
          <div className="mugashra-card-icon" style={{ background: 'rgba(100, 116, 139, 0.12)', color: '#64748B' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
          <div className="mugashra-card-body">
            <div className="mugashra-card-tag">Studio Info</div>
            <h3 className="mugashra-card-title">Studio Settings</h3>
            <p className="mugashra-card-desc">
              Studio base address in Chennai, consultation hours, Instagram handles, and contact emails.
            </p>
          </div>
          <div className="mugashra-card-footer">
            <span>Configure Studio</span>
            <span className="mugashra-card-arrow">→</span>
          </div>
        </Link>
      </div>

      {/* Studio Concierge & Booking SOP Tip */}
      <div className="mugashra-concierge-bar">
        <div className="mugashra-concierge-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B58A69" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>Bridal Consultation Workflow</span>
        </div>
        <div className="mugashra-concierge-steps">
          <div className="mugashra-step">
            <span className="mugashra-step-num">1</span>
            <span>Review Inquiry & Event Date</span>
          </div>
          <div className="mugashra-step-divider">→</div>
          <div className="mugashra-step">
            <span className="mugashra-step-num">2</span>
            <span>Check Muhurtham Calendar</span>
          </div>
          <div className="mugashra-step-divider">→</div>
          <div className="mugashra-step">
            <span className="mugashra-step-num">3</span>
            <span>WhatsApp Consultation</span>
          </div>
          <div className="mugashra-step-divider">→</div>
          <div className="mugashra-step">
            <span className="mugashra-step-num">4</span>
            <span>Advance Paid & Booked</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardWelcome
