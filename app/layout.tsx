import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AirOps Brand Guidelines',
  description: 'Brand story, mission, global rules, tone and voice. Complete design system and brand guidelines for AirOps.',
  openGraph: {
    title: 'AirOps Brand Guidelines',
    description: 'Brand story, mission, global rules, tone and voice. Complete design system and brand guidelines for AirOps.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AirOps Brand Guidelines',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AirOps Brand Guidelines',
    description: 'Brand story, mission, global rules, tone and voice. Complete design system and brand guidelines for AirOps.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
