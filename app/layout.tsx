import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ömer's Portfolio",
  description: 'Frontend Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
