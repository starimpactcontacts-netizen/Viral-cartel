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
    return (
      <div className="form-done">
        <p className="eyebrow">Received</p>
        <h3>We&rsquo;ll be in touch.</h3>
        <p className="muted">Our team reviews every inquiry and replies within two business days.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" required autoComplete="name" maxLength={200} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" maxLength={320} />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Company</span>
          <input name="company" autoComplete="organization" maxLength={200} />
        </label>
        <label>
          <span>Interest</span>
          <select name="interest" defaultValue="Loopgate">
            <option>Loopgate</option>
            <option>Partnership</option>
            <option>Press</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" required rows={5} maxLength={5000} placeholder="Tell us about your release, campaign or goals." />
      </label>
      <label className="hp" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send inquiry'} <span aria-hidden>→</span>
      </button>
    </form>
  )
}
