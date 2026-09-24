import React from 'react'

export const Icon: React.FC = () => {
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '7px',
        background: 'linear-gradient(135deg, #2A2118 0%, #15100B 100%)',
        border: '1px solid rgba(181, 138, 105, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L21.5 12L12 22L2.5 12L12 2Z"
          stroke="#B58A69"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 15.5V9.5L12 14L16.5 9.5V15.5"
          stroke="#E8D8C8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Icon
