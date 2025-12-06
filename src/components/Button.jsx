import React from 'react'

export default function Button({ children, variant = 'primary', size = 'md', onClick, disabled = false, fullWidth = false }) {
  const base = {
    borderRadius: 6,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    textDecoration: 'none'
  }

  const sizes = {
    sm: { padding: '0.25rem 0.5rem', fontSize: 12 },
    md: { padding: '0.5rem 1rem', fontSize: 14 },
    lg: { padding: '0.75rem 1.25rem', fontSize: 16 }
  }

  const variants = {
    primary: { background: '#2563eb', color: '#fff', border: 'none' },
    secondary: { background: '#e5e7eb', color: '#111827', border: 'none' },
    ghost: { background: 'transparent', color: '#2563eb', border: '1px solid rgba(37,99,235,0.15)' },
    danger: { background: '#dc2626', color: '#fff', border: 'none' },
    success: { background: '#16a34a', color: '#fff', border: 'none' },
    warning: { background: '#f59e0b', color: '#111827', border: 'none' },
    outline: { background: 'transparent', color: '#111827', border: '1px solid #d1d5db' },
    link: { background: 'transparent', color: '#2563eb', border: 'none', padding: 0 }
  }

  const sizeStyle = sizes[size] || sizes.md
  const variantStyle = variants[variant] || variants.primary

  const style = {
    ...base,
    ...sizeStyle,
    ...variantStyle,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1
  }

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
