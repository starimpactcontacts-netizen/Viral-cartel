'use client'

import { useState } from 'react'

const EMAIL = 'contact@viral-cartel.com'
const items = ['Short form marketing', 'Fan driven marketing']

export default function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className="services">
      {items.map((item) => (
        <li key={item}>
          <button
            type="button"
            className="service"
            aria-expanded={open === item}
            onClick={() => setOpen(open === item ? null : item)}
          >
            {item}
          </button>
          {open === item && (
            <a className="service-email" href={`mailto:${EMAIL}?subject=${encodeURIComponent(item)}`}>
              {EMAIL}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
