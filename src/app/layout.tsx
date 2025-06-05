import { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'

// Importing the Inter and Barlow Condensed fonts
const inter = Inter({ subsets: ['latin'] })
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Hamza Portfolio',
  description: 'Personal portfolio website',
   icons: {
    icon: '/favicon.png', // this replaces the default favicon.ico
  },
   openGraph: {
    title: 'Hamza Portfolio',
    description: 'Personal portfolio website',
    images: ['/favicon.png'], // 👈 replaces vercel.svg
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${barlowCondensed.className}`}>
        {children}
      </body>
    </html>
  )
}
