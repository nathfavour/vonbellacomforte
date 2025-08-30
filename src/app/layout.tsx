import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

export const metadata: Metadata = {
  title: 'Von Bella Comfort',
  description: 'Discover luxury fashion and accessories that elevate your style',
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1a1a1a' },
    background: { default: '#ffffff' },
  },
  typography: { fontFamily: 'Inter, system-ui, Arial, sans-serif' },
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
