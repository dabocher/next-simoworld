"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "@/redux/store/provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SimoWorld',
  description: 'Tu buscador de eventos para SimRacers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  )
}
