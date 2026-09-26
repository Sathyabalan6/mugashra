import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div
      className="mugashra-studio-logo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '2px 0',
        maxWidth: '100%',
      }}
    >
      {/* Gold Crest Monogram */}
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '7px',
          background: 'linear-gradient(135deg, #2A2118 0%, #15100B 100%)',
          border: '1px solid rgba(181, 138, 105, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.25), inset 0 0 6px rgba(181, 138, 105, 0.2)',
          flexShrink: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Diamond Border */}
          <path
            d="M12 2L21.5 12L12 22L2.5 12L12 2Z"
            stroke="#B58A69"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Elegant M Monogram */}
          <path
            d="M7.5 15.5V9.5L12 14L16.5 9.5V15.5"
            stroke="#E8D8C8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="1" fill="#B58A69" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span
          style={{
            fontFamily: "'Playfair Display', 'Lora', 'Georgia', serif",
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            color: 'var(--theme-text, #F7F3EE)',
            lineHeight: 1.15,
            textTransform: 'uppercase',
          }}
        >
          MUGAASHRA
        </span>
        <span
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: '#B58A69',
            lineHeight: 1.3,
            textTransform: 'uppercase',
            marginTop: '2px',
          }}
        >
          Bridal Atelier CMS
        </span>
      </div>
    </div>
  )
}

export default Logo
