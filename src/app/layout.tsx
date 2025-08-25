import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Von Bella Comfort',
  description: 'Discover luxury fashion and accessories that elevate your style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}