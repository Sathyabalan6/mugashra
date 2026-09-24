import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '6px 0' }}>
      {/* Gold Crest Monogram */}
      <div
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #2A2118 0%, #15100B 100%)',
          border: '1px solid rgba(181, 138, 105, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 0 8px rgba(181, 138, 105, 0.2)',
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Diamond Border */}
          <path
            d="M12 2L21.5 12L12 22L2.5 12L12 2Z"
            stroke="#B58A69"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Elegant M Monogram */}
          <path
            d="M7 16V8.5L12 13.5L17 8.5V16"
            stroke="#E8D8C8"
            strokeWidth="1.6"
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
            fontSize: '17px',
            fontWeight: 600,
            letterSpacing: '3px',
            color: 'var(--theme-text, #1E1B18)',
            lineHeight: 1.15,
            textTransform: 'uppercase',
          }}
        >
          MUGASHRA
        </span>
        <span
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: '9.5px',
            fontWeight: 600,
            letterSpacing: '2px',
            color: '#B58A69',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            marginTop: '2px',
          }}
        >
          Artistry • Bridal Atelier CMS
        </span>
      </div>
    </div>
  )
}

export default Logo
