import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import UserProvider from '@/context/UserAuth'
import GenneralProvider from '@/context/General'
import CategoryProvider from '@/context/Category'

const roboto = Roboto({ subsets: ['latin'], weight:['100','300','400','500','700','900'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <CategoryProvider>
      <GenneralProvider>
      <body className={roboto.className}>
      
<main className='max-w-5xl mx-auto bg-white p-4'>
 <Header/>

{children}
<footer className="border-t p-8 text-center text-gray-600 mt-16">
              &copy; 2023 All rights reserved
            </footer>
</main>

      </body>
      </GenneralProvider>
      </CategoryProvider>
      </UserProvider>
    </html>
  )
}
