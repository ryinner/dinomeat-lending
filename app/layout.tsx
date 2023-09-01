import TheFooter from '@/components/TheFooter';
import TheHeader from '@/components/TheHeader';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Официальный интернет-магазин «Dinomeät»',
  description: 'Магазин «Dinomeät» - лучший из магазинов одежды',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main>
          {children}
        </main>
        <TheFooter />
      </body>
    </html>
  )
}
