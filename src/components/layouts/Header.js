import React from 'react';

const Header = () => {
    return (
<header class="bg-slate-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
 
      <div>
        <a href="#" class="text-white text-lg font-bold">Your Logo</a>
      </div>

 
      <nav class="flex space-x-4">
        <a href="#" class="text-white hover:text-gray-300">Home</a>
        <a href="#" class="text-white hover:text-gray-300">Menu</a>
        <a href="#" class="text-white hover:text-gray-300">About Us</a>
        <a href="#" class="text-white hover:text-gray-300">Contact Us</a>
        <a href="#" class="text-white hover:text-gray-300">Login</a>
      </nav>
    </div>
  </header>
    );
};

export default Header;