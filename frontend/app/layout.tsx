import './globals.css'
import { Inter } from 'next/font/google'
import AuthContext from '@/public/components/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Not Quite Twitter',
  description: 'See Above',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='bg-base-100'>
        {children}
      </div>
      </body>
    </html>
  )
}
