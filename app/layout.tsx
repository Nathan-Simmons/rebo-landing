import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rebo - Real Reviews from Real Renters',
  description: 'Know before you sign. Read authentic reviews from real tenants about properties and landlords.',
  keywords: 'rental reviews, tenant reviews, landlord reviews, apartment reviews, property reviews, renter app',
  openGraph: {
    title: 'Rebo - Real Reviews from Real Renters',
    description: 'Know before you sign. Read authentic reviews from real tenants.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rebo - Real Reviews from Real Renters',
    description: 'Know before you sign. Read authentic reviews from real tenants.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}