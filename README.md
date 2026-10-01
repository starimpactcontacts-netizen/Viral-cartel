# Viral Cartel

Marketing site for [viral-cartel.com](https://viral-cartel.com). Next.js (App Router) on Vercel, Supabase for contact form submissions.

## Develop

```bash
cp .env.example .env.local   # fill in the publishable key
npm install
npm run dev
```

## Contact form

`POST /api/contact` inserts into `public.contact_submissions` in the `viral-cartel` Supabase project. RLS lets the anon/publishable key insert only; read submissions from the Supabase dashboard (Table Editor → contact_submissions).

## Logo

`components/Crest.tsx` is a placeholder SVG. Replace it with the real crest artwork when available.
