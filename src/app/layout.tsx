'use client';

import { Inter } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/ui/smooth-scroll-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Marta AI - Sztuczna Inteligencja dla Biznesu</title>
        <meta name="description" content="Wykorzystaj moc AI do automatyzacji procesów, analizy danych i optymalizacji decyzji biznesowych." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}