import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://viral-cartel.com'),
  title: 'Viral Cartel — Infrastructure for the Attention Economy',
  description:
    'Viral Cartel builds systems that turn cultural attention into scalable distribution for film & entertainment. Our flagship product, Loopgate, lets studios ignite competitive UGC at massive scale.',
  openGraph: {
    title: 'Viral Cartel — Infrastructure for the Attention Economy',
    description:
      'Systems that turn cultural attention into scalable distribution for film & entertainment.',
    url: 'https://viral-cartel.com',
    siteName: 'Viral Cartel',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
