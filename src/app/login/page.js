'use client';
import Link from 'next/link';
import React, { useState } from 'react';
// Import useClient from next/edge
// import { useClient } from 'next/edge';

const Login = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      alert(email +'--sdd-'+ password);
    };
  
    return (
      <div className="flex items-center justify-center">
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
          <h2 className="text-2xl text-white text-center font-semibold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button type="submit" className="bg-blue-900 text-white p-2 rounded-md w-full">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Don`t have an account?{' '}
              <Link href="/register" className="text-blue-500">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default Login;