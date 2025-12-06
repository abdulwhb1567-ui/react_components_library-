import React from 'react'

export default function Modal({ open, onClose, title, children, type = 'center' }) {
  if (!open) return null

  const overlayBase = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }

  const modalBase = {
    background: 'white',
    borderRadius: 8,
    padding: 20,
    minWidth: 320,
    maxWidth: '90%'
  }

  const types = {
    center: {
      overlay: overlayBase,
      modal: modalBase
    },
    drawer: {
      overlay: { ...overlayBase, alignItems: 'flex-start', justifyContent: 'flex-end' },
      modal: { ...modalBase, height: '100%', width: 360, borderRadius: 0 }
    },
    fullscreen: {
      overlay: overlayBase,
      modal: { ...modalBase, width: '100%', height: '100%', borderRadius: 0, padding: 24 }
    },
    bottom: {
      overlay: { ...overlayBase, alignItems: 'flex-end', justifyContent: 'center' },
      modal: { ...modalBase, width: '100%', borderRadius: '12px 12px 0 0' }
    }
  }

  const chosen = types[type] || types.center

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
    <div style={chosen.overlay} role="dialog" aria-modal="true">
      <div style={{ position: 'relative' }}>
        <div style={chosen.modal}>
          {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
          <div>{children}</div>
        </div>
        <button onClick={onClose} style={closeBtn} aria-label="Close">✕</button>
      </div>
    </div>
  )
}
