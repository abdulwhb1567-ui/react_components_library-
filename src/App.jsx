import React, { useState } from 'react'
import { Button, Card, Modal } from './index'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <h1>Components Library Demo</h1>

      <section style={{ marginTop: 16 }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="primary" onClick={() => alert('Primary clicked')}>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Card</h2>
        <Card title="Profile">
          <p style={{ margin: 0 }}><strong>Alice</strong> — Frontend engineer</p>
        </Card>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Modal</h2>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Hello">
          <p>This is a simple modal from the components library.</p>
          <div style={{ marginTop: 12 }}>
            <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
          </div>
        </Modal>
      </section>
    </div>
  )
}
