import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'BOOKIUM',
  description: 'Your favorite online bookstore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
