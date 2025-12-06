# React Components Library

A lightweight, reusable React component library with Button, Card, and Modal components built with modern styling and accessibility in mind.

## Features

- **Button** — Multiple variants (primary, secondary, ghost) with click handlers and disabled states
- **Card** — Flexible container with optional title and custom styling
- **Modal** — Dialog component with backdrop overlay, close button, and ARIA attributes

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v9 or higher)

### Setup

1. Clone or navigate to the project:
```bash
cd react_components_library-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview with:
```bash
npm run preview
```

## Usage

### Importing Components

Components are exported from `src/index.js`:

```javascript
import { Button, Card, Modal } from './src/index'
```

Or import individually:

```javascript
import Button from './src/components/Button'
import Card from './src/components/Card'
import Modal from './src/components/Modal'
```

### Button Component

```jsx
import { Button } from './src/index'

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="ghost">
        Ghost Button
      </Button>
    </div>
  )
}
```

**Props:**
- `children` (required) — Button text or content
- `variant` (optional) — `'primary'` | `'secondary'` | `'ghost'` (default: `'primary'`)
- `onClick` (optional) — Click handler function
- `disabled` (optional) — Boolean to disable button (default: `false`)

### Card Component

```jsx
import { Card } from './src/index'

function App() {
  return (
    <Card title="User Profile">
      <p><strong>Alice</strong> — Frontend Engineer</p>
    </Card>
  )
}
```

**Props:**
- `title` (optional) — Card heading text
- `children` (required) — Card body content
- `style` (optional) — Custom CSS object for container

### Modal Component

```jsx
import { Modal, Button } from './src/index'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        title="Welcome"
      >
        <p>This is a modal dialog.</p>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
    </div>
  )
}
```

**Props:**
- `open` (required) — Boolean to show/hide modal
- `onClose` (required) — Function called when close button or overlay is clicked
- `title` (optional) — Modal heading
- `children` (required) — Modal body content

## Project Structure

```
src/
  components/
    Button.jsx      # Button component with variants
    Card.jsx        # Card container component
    Modal.jsx       # Modal dialog component
  App.jsx           # Demo app showcasing all components
  main.jsx          # React DOM entry point
  index.js          # Library export barrel
index.html          # HTML template
package.json        # Dependencies and scripts
vite.config.js      # Vite configuration (if added)
```

## Development

### Available Scripts

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally
- `npm test` — Run tests (when configured)

### Component Styling

Components use inline styles for portability. For production use, consider:

- Converting to CSS modules
- Adding Tailwind CSS or styled-components
- Exporting CSS classes for override capability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Feel free to extend components or add new ones. Export them from `src/index.js` for consumers.

---

**Demo:** Run `npm run dev` and open the browser to see all components in action.
