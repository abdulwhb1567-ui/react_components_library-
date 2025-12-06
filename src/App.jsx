import React, { useState } from 'react'
import { Button, Card, Modal } from './index'

export default function App() {
  const [openCenter, setOpenCenter] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openFull, setOpenFull] = useState(false)
  const [openBottom, setOpenBottom] = useState(false)

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <h1>Components Library Demo</h1>

      <section style={{ marginTop: 16 }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" fullWidth>Full width</Button>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          <Card title="Default Card">Default style card content</Card>
          <Card variant="shadow" title="Shadow Card">Shadow style card content</Card>
          <Card variant="bordered" title="Bordered Card">Bordered card content</Card>
          <Card variant="compact" title="Compact Card">Compact content</Card>
          <Card image="https://picsum.photos/400/200" title="Image Card">Card with image on top</Card>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Modal Types</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => setOpenCenter(true)}>Open Center</Button>
          <Button variant="primary" onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
          <Button variant="primary" onClick={() => setOpenFull(true)}>Open Fullscreen</Button>
          <Button variant="primary" onClick={() => setOpenBottom(true)}>Open Bottom Sheet</Button>
        </div>

        <Modal open={openCenter} onClose={() => setOpenCenter(false)} type="center" title="Center Modal">
          <p>This is a centered modal.</p>
          <Button variant="secondary" onClick={() => setOpenCenter(false)}>Close</Button>
        </Modal>

        <Modal open={openDrawer} onClose={() => setOpenDrawer(false)} type="drawer" title="Drawer">
          <p>Drawer content on the right side.</p>
        </Modal>

        <Modal open={openFull} onClose={() => setOpenFull(false)} type="fullscreen" title="Fullscreen">
          <p>Fullscreen modal content.</p>
        </Modal>

        <Modal open={openBottom} onClose={() => setOpenBottom(false)} type="bottom" title="Bottom Sheet">
          <p>Bottom sheet content.</p>
        </Modal>
      </section>
    </div>
  )
}
