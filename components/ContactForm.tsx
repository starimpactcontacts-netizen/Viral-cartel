'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Try again.')
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p className="form-done">Received. We&rsquo;ll be in touch.</p>
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input name="name" placeholder="Name" aria-label="Name" required autoComplete="name" maxLength={200} />
      <input
        name="email"
        type="email"
        placeholder="you@studio.com"
        aria-label="Email"
        required
        autoComplete="email"
        maxLength={320}
      />
      <textarea
        name="message"
        placeholder="The film, the date, the goal."
        aria-label="Message"
        required
        rows={4}
        maxLength={5000}
      />
      <label className="hp" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
