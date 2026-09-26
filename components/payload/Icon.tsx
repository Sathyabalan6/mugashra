import React from 'react'

export const Icon: React.FC = () => {
  return (
    <svg
      className="graphic-icon"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Outer Diamond Crest */}
      <path
        d="M12 2L21.5 12L12 22L2.5 12L12 2Z"
        stroke="#B58A69"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Monogram M */}
      <path
        d="M7.5 15.5V9.5L12 14L16.5 9.5V15.5"
        stroke="#E8D8C8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="1.2" fill="#B58A69" />
    </svg>
  )
}

export default Icon
