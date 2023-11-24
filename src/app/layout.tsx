import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <main className='relative flex flex-col min-h-screen'>
          <Providers>
            <Navbar />
            <div className='flex-grow flex-1'>{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  )
}
