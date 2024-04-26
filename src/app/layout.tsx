import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/states/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Redux Toolkit',
  description: 'Next.js Redux Toolkit Starter Template Project'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
