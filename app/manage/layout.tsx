import type { Metadata } from 'next'
import { Galdeano } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'


const galdeano = Galdeano({
  weight: ['400'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Gran Gelato',
  description: 'E-commerce destinado a presentação de uma sorveteria e seus produtos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-slate-100 '>
      <body className={galdeano.className}>
     <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
