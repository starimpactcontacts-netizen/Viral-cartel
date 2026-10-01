'use client'

import { useEffect } from 'react'

// Fisheye-style scroll effect: elements marked [data-lens] curve, shrink and fade
// as they move away from the viewport center, and lag behind fast scrolls so the
// page feels like it is being dragged.
export default function ScrollLens() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-lens]'))
    let lastY = window.scrollY
    let velocity = 0
    let raf = 0
    let running = false

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

    function frame() {
      const y = window.scrollY
      const vh = window.innerHeight
      velocity += (y - lastY - velocity) * 0.18
      lastY = y

      for (const el of els) {
        const rect = el.getBoundingClientRect()
        // Use the layout position (without our own transform) so the effect doesn't feed back on itself.
        const center = el.offsetTop - y + el.offsetHeight / 2
        if (rect.bottom < -vh || rect.top > vh * 2) continue
        const d = clamp((center - vh / 2) / (vh / 2), -1.6, 1.6)
        const ad = Math.abs(d)
        const rot = -d * 16
        const scale = 1 - 0.09 * d * d
        const lag = clamp(velocity * (0.5 + ad * 0.9), -48, 48)
        const fade = clamp(1 - 0.75 * Math.pow(Math.max(0, ad - 0.25), 1.3), 0.12, 1)
        el.style.transform = `perspective(1000px) translate3d(0, ${lag.toFixed(1)}px, 0) rotateX(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`
        el.style.opacity = fade.toFixed(3)
      }

      if (Math.abs(velocity) > 0.05) {
        raf = requestAnimationFrame(frame)
      } else {
        velocity = 0
        running = false
      }
    }

    function kick() {
      if (running) return
      running = true
      raf = requestAnimationFrame(frame)
    }

    kick()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
    }
  }, [])

  return <div className="vignette" aria-hidden />
}
