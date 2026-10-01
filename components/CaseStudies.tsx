'use client'

import { useState } from 'react'

const EMAIL = 'contact@viral-cartel.com'

export default function CaseStudies() {
  const [open, setOpen] = useState(false)

  return (
    <div className="case">
      <button type="button" className="case-title" aria-expanded={open} onClick={() => setOpen(!open)}>
        Case Studies
      </button>
      <p className="case-hint caps">{open ? 'Available on request' : 'Tap to request'}</p>
      {open && (
        <a className="case-email" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Case studies')}`}>
          {EMAIL}
        </a>
      )}
    </div>
  )
}
