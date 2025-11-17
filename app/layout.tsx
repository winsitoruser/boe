import type { Metadata } from 'next'
import { Inter, Poppins, IBM_Plex_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import './leaflet.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})
const ibmPlexSans = IBM_Plex_Sans({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-ibm' 
})
const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], 
  variable: '--font-playfair' 
})

export const metadata: Metadata = {
  title: 'BOIL Staking - Energy Yield Pools',
  description: 'Stake BOIL tokens and earn real yield from energy production assets. Join the decentralized energy revolution.',
  themeColor: '#0B0B0F',
  openGraph: {
    title: 'BOIL Staking - Energy Yield Pools',
    description: 'Stake BOIL tokens and earn real yield from energy production assets.',
    url: 'https://boiltoken.energy',
    siteName: 'BOIL Energy',
    images: [
      {
        url: 'https://boiltoken.energy/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@boil_token',
    title: 'BOIL Staking - Energy Yield Pools',
    description: 'Stake BOIL tokens and earn real yield from energy production assets.',
    images: ['https://boiltoken.energy/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${ibmPlexSans.variable} ${playfair.variable}`}>
      <body className="bg-boil-dark text-white font-inter antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <div className="fixed inset-0 bg-energy-glow pointer-events-none" />
      </body>
    </html>
  )
}
