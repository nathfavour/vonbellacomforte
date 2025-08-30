import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import ClientThemeProvider from './mui-provider'

export const metadata: Metadata = {
  title: 'Von Bella Comfort',
  description: 'Discover luxury fashion and accessories that elevate your style',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  )
}
