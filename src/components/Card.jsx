import React from 'react'

export default function Card({ title, children, style = {} }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', background: 'white', ...style }}>
      {title && <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
