import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Praktijk Lombaerts | Kinesitherapie & Osteopathie',
  description: 'Professionele kinesitherapie en osteopathie praktijk. Persoonlijke behandelingen voor uw bewegingsproblemen, rugklachten, sportblessures en meer.',
  keywords: ['kinesitherapie', 'osteopathie', 'fysiotherapie', 'rugklachten', 'sportblessures', 'revalidatie'],
  authors: [{ name: 'Praktijk Lombaerts' }],
  openGraph: {
    title: 'Praktijk Lombaerts | Kinesitherapie & Osteopathie',
    description: 'Professionele kinesitherapie en osteopathie praktijk. Persoonlijke behandelingen voor uw bewegingsproblemen.',
    type: 'website',
    locale: 'nl_BE',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="scroll-smooth bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
