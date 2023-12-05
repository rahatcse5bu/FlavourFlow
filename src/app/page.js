'use client'
import Header from '@/components/layouts/Header'
import Hero from '@/components/layouts/Hero'
import HomeMenu from '@/components/layouts/HomeMenu'
import UserProvider, { UserContext } from '@/context/UserAuth'
// import Image from 'next/image'

export default function Home() {

  return (
 <UserProvider>
<Hero/>
<HomeMenu/>
 </UserProvider>
  )
}
