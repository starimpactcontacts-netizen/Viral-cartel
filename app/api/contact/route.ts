import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(value: unknown, max: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: bots fill every field, people never see this one.
  if (field(body.website, 200)) return NextResponse.json({ ok: true })

  const name = field(body.name, 200)
  const email = field(body.email, 320)
  const company = field(body.company, 200) || null
  const interest = field(body.interest, 100) || null
  const message = field(body.message, 5000)

  if (!name || !message) {
    return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  }

  const { error } = await getSupabase()
    .from('contact_submissions')
    .insert({ name, email, company, interest, message })

  if (error) {
    console.error('contact insert failed', error)
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
