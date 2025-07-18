import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Board Dashboard',
  description: 'A modern dashboard application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
