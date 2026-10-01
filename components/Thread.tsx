'use client'

import { useEffect, useRef, useState } from 'react'

// Double vertical line that draws itself in when scrolled into view.
export default function Thread({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`thread ${on ? 'on' : ''} ${className}`} aria-hidden>
      <span />
      <span />
    </div>
  )
}
