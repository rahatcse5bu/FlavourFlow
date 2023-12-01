"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BeatLoader } from 'react-spinners';
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { isLogged, setLogged } = useContext(UserContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginNotify = (status) => toast(status);
 const [isLoading,setLoading]=useState(false);
  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        }
      );
      if (response.ok) {
        const { success, data } = await response.json();
        if(success){
        setLogged(true);
        setLoading(false)
        console.log(response.json);
        loginNotify("Login Suceess");
        if (typeof window !== "undefined") {
          // Perform localStorage action
          localStorage.setItem("lastName", data.lastName);
          localStorage.setItem("user_id", data._id);
        }
        console.log(data)
      //  if(isLogged) router.push("/");

      }
      else{
        loginNotify("Login Failed");
      }
      } else {
        setLogged(false);
        setLoading(false)
        console.log(response);
        loginNotify("Login Failed");
      }
    } catch (err) {
      setLoading(false)
      console.log("error" + err);
      loginNotify("Login Error:" + err);
    }

    // alert(email + "--sdd-" + password);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <ToastContainer />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded-md w-full"
          >
            Sign In {isLoading && (<BeatLoader color="#ffffff" size={8} />)}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don`t have an account?{" "}
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
