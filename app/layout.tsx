import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Sebastian Titz - Soil to Soul',
  description: 'Kulinarische Exzellenz in Graubünden. Head Chef Klinik Gut Fläsch & Restaurant PINOT.',
  icons: {
    icon: '/icon.svg',
  },
}

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
