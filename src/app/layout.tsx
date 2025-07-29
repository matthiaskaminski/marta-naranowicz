import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/ui/smooth-scroll-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hero Section Demo',
  description: 'Hero section template demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}