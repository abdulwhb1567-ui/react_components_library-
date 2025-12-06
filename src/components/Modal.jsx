import React from 'react'

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }

  const modalStyle = {
    background: 'white',
    borderRadius: 8,
    padding: 20,
    minWidth: 320,
    maxWidth: '90%'
  }

  const closeBtn = {
    position: 'absolute',
    top: 10,
    right: 12,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 18
  }

  return (
    <div style={overlayStyle} role="dialog" aria-modal="true">
      <div style={{ position: 'relative' }}>
        <div style={modalStyle}>
          {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
          <div>{children}</div>
        </div>
        <button onClick={onClose} style={closeBtn} aria-label="Close">✕</button>
      </div>
    </div>
  )
}
