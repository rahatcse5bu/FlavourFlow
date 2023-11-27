import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
<header className="bg-slate-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
 
      <div>
        <Link href="/" className="text-white text-lg font-bold">Your Logo</Link>
      </div>

 
      <nav className="flex items-center space-x-4">
        <Link href="#" className="text-white hover:text-gray-300">Home</Link>
        <Link href="#" className="text-white hover:text-gray-300">Menu</Link>
        <Link href="#" className="text-white hover:text-gray-300">About Us</Link>
        <Link href="#" className="text-white hover:text-gray-300">Contact Us</Link>
        <Link href="/login" className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md">
Login</Link>
        <Link href="/register" className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md">
Sign Up</Link>
      </nav>
    </div>
  </header>
    );
};

export default Header;