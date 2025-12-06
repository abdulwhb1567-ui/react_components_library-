import React from 'react'

export default function Button({ children, variant = 'primary', onClick, disabled = false }) {
  const base = {
    padding: '0.5rem 1rem',
    borderRadius: 6,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    fontSize: 14,
    display: 'inline-block'
  }

  const variants = {
    primary: { ...base, background: '#2563eb', color: '#ffffff' },
    secondary: { ...base, background: '#e5e7eb', color: '#111827' },
    ghost: { ...base, background: 'transparent', color: '#2563eb', border: '1px solid rgba(37,99,235,0.15)' }
  }

  const style = variants[variant] || variants.primary

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
