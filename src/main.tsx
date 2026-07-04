import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const rootEl = document.getElementById('root')!

// Always client-render. When the page was prerendered (static HTML already in
// #root), React cleanly replaces it on mount. This keeps no-JS social-share
// crawlers served correct meta/OG tags from the prerendered HTML, while avoiding
// hydration mismatches from framer-motion's animated inline styles.
createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
