'use client'
import Link from 'next/link';
import React,{useContext, useEffect} from 'react';
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserAuth';

const Header = () => {
    const {isLogged,setLogged} = useContext(UserContext)
    const router = useRouter();
    var firstName='';
    // useEffect(() => {
    //     // Use localStorage here
    //     localStorage.setItem('isLogged', '');
    //     localStorage.setItem('fName', '');
    //   }, []);

    const handleLogout= ()=>{
        setLogged(false)
router.push('/')
    }

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        firstName=   localStorage.getItem('fName')[0];
      }
    return (
<header className="bg-slate-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
 
      <div>
        <Link href="/" className="text-white text-lg font-bold font-mono">Falvour-Flow</Link>
      </div>

 
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        <Link href="#" className="text-white hover:text-gray-300">Menu</Link>
        <Link href="/about-us" className="text-white hover:text-gray-300">About Us</Link>
        <Link href="/contact-us" className="text-white hover:text-gray-300">Contact Us</Link>
      {isLogged && (
        <> 
        <Link href="/dashboard" className="text-white my-2 px-4 py-2 bg-blue-900 inline rounded-[50%]">
       {  firstName?.toUpperCase()}</Link>
        <Link href="/login" onClick={handleLogout} className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md">
        Logout</Link> </>
)}
        {!isLogged && (
            <>
            <Link href="/login" className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md">
                    Login</Link>
            <Link href="/register" className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md">
                    Sign Up</Link> 
            </>
        )}
      </nav>
    </div>
  </header>
    );
};

export default Header;