import type { Metadata, Viewport } from 'next'
import { EB_Garamond, Instrument_Serif } from 'next/font/google'
import './globals.css'

const display = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
})
const serif = EB_Garamond({ subsets: ['latin'], variable: '--font-serif' })

const description =
  'Viral Cartel makes films and music go viral on TikTok. 1B+ organic views. 2,000+ creators.'

export const metadata: Metadata = {
  metadataBase: new URL('https://viral-cartel.com'),
  title: 'Viral Cartel',
  description,
  icons: { icon: '/logo.svg' },
  openGraph: {
    title: 'Viral Cartel',
    description,
    url: 'https://viral-cartel.com',
    siteName: 'Viral Cartel',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body>
        <div className="bg-map" aria-hidden />
        {children}
      </body>
    </html>
  )
}
