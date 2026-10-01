# Viral Cartel

Marketing site for [viral-cartel.com](https://viral-cartel.com). Next.js (App Router) on Vercel, Supabase for contact form submissions.

## Develop

```bash
cp .env.example .env.local   # fill in the publishable key
npm install
npm run dev
```

## Contact form

Messages are emailed to contact@viral-cartel.com via FormSubmit. A copy is also saved: `POST /api/contact` inserts into `public.contact_submissions` in the `viral-cartel` Supabase project. RLS lets the anon/publishable key insert only; read submissions from the Supabase dashboard (Table Editor → contact_submissions).

## Logo

`components/Logo.tsx` is the wordmark traced to SVG (`public/logo.svg` is the same file standalone).
