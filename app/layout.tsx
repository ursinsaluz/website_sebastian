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
    <html lang="de" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.sebastiantitz.ch/#website',
                  url: 'https://www.sebastiantitz.ch',
                  name: 'Sebastian Titz - Soil to Soul',
                  description: 'Kulinarische Exzellenz in Graubünden.',
                  publisher: {
                    '@id': 'https://www.sebastiantitz.ch/#person',
                  },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://www.sebastiantitz.ch/#person',
                  name: 'Sebastian Titz',
                  url: 'https://www.sebastiantitz.ch',
                  jobTitle: 'Chef de Cuisine',
                  worksFor: [
                    {
                      '@type': 'Organization',
                      name: 'Klinik Gut Fläsch',
                    },
                    {
                      '@type': 'Restaurant',
                      name: 'Restaurant PINOT',
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
