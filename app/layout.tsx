import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AirOps Style Guide',
  description: 'Design system and component library for AirOps projects',
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
