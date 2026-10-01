import { createClient } from '@supabase/supabase-js'

// Publishable key is safe to ship: RLS only allows anonymous inserts into contact_submissions.
// Env vars override these when set in Vercel.
const SUPABASE_URL = 'https://pkmqfestglivenvwbjeg.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_b_TmVOlzfh1QM-hH7CumXA_CyzrwPgV'

export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || SUPABASE_PUBLISHABLE_KEY
  return createClient(url, key, { auth: { persistSession: false } })
}
