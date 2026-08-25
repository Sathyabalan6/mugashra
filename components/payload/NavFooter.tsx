import React from 'react'
import Link from 'next/link'

export const NavFooter: React.FC = () => {
  return (
    <div className="mugashra-nav-footer">
      <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="mugashra-nav-live-btn"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        <span>View Live Website</span>
      </Link>

      <div className="mugashra-nav-status">
        <div className="mugashra-status-indicator">
          <span className="mugashra-status-dot"></span>
          <span>Chennai Atelier • Active</span>
        </div>
        <span className="mugashra-version">v1.0</span>
      </div>
    </div>
  )
}

export default NavFooter
