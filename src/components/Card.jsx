import React from 'react'

export default function Card({ title, children, style = {}, variant = 'default', image, compact = false }) {
  const base = {
    borderRadius: 8,
    padding: compact ? 8 : 16,
    background: 'white'
  }

  const variants = {
    default: { border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' },
    shadow: { border: 'none', boxShadow: '0 6px 18px rgba(16,24,40,0.08)' },
    bordered: { border: '1px solid #d1d5db', boxShadow: 'none' },
    compact: { border: '1px solid #e5e7eb', boxShadow: 'none', padding: 8 }
  }

  const variantStyle = variants[variant] || variants.default

  return (
    <div style={{ ...base, ...variantStyle, ...style }}>
      {image && (
        <div style={{ marginBottom: 12 }}>
          <img src={image} alt="card" style={{ width: '100%', borderRadius: 6 }} />
        </div>
      )}
      {title && <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
