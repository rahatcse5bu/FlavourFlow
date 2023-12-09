"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserAuth";
import { GeneralContext } from "@/context/TabMenu";

const Header = () => {
  const { isLogged, setLogged } = useContext(UserContext);
  const { cart, setCartProducts } = useContext(GeneralContext);
  const router = useRouter();
  var firstName = "";
  // useEffect(() => {
  //     // Use localStorage here
  //     localStorage.setItem('isLogged', '');
  //     localStorage.setItem('fName', '');
  //   }, []);

  const handleLogout = () => {
    setLogged(false);
    localStorage.setItem("lastName", null);
    localStorage.setItem("user_id", null);
    router.push("/");
  };

  if (typeof window !== "undefined") {
    // Perform localStorage action
    firstName = localStorage.getItem("lastName")[0];
  }
  return (
    <header className="bg-[#005A9C] py-4 px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-lg font-bold font-mono">
            Falvour-Flow
          </Link>
        </div>

        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#homeMenu" className="text-white hover:text-gray-300">
            Menu
          </Link>
          <Link href="/about-us" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="/contact-us" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
          {isLogged && (
            <>
              <Link
                href="/dashboard"
                className="text-white my-2 px-4 py-2 bg-blue-900 inline rounded-[50%]"
              >
                {firstName?.toUpperCase()}
              </Link>
              {/* cart icon strats */}
              <Link
                href="/cart"
                className=" relative text-white my-2 px-2 py-2 bg-blue-900 inline rounded-[50%]"
              >
                <div className="absolute text-yellow-500 text-xs font-extrabold text-center top-1 right-1">{cart.length}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
              <Link
                href="/login"
                onClick={handleLogout}
                className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md"
              >
                Logout
              </Link>{" "}
            </>
          )}
          {!isLogged && (
            <>
              <Link
                href="/login"
                className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-white my-2 px-4 py-2 bg-blue-900 rounded-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
