"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BeatLoader } from 'react-spinners';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passErr, setPassErr] = useState("");
  const [RegBtn, setRegBtn] = useState(false);
  const [isRegistered, setRegStatus] = useState(false);
  const [isLoading,setLoading]=useState(false);
  const registerNotify = (status) => toast(status);
  const router = useRouter();
  const passwordChceker = () => {
    var pass1 = password;
    var pass2 = password2;
    if (pass1 === pass2 && pass1.length > 0 && pass2.length > 0) {
      if (
        pass1.length < 8 ||
        (pass2.length < 8 && (pass1.length === 0 || pass2.length === 0))
      ) {
        setRegBtn(false);
        setPassErr("Password must be at least 8 characters long");
      } else {
        setRegBtn(true);
        setPassErr("");
      }
    } else if (pass1 !== pass2) {
      setRegBtn(false);
      setPassErr("Password doesn't match");
    } else {
      setRegBtn(true);
      setPassErr("");
    }
  };
  useEffect(() => {
    passwordChceker();
  }, [password, password2]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    passwordChceker();
     setRegStatus(true);

    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        setLoading(false);
        setRegStatus(true);
        registerNotify("Registration Success!!");
        router.push("/register");
        console.log(response)
      } else {
        setLoading(false)
        setRegStatus(false);
        registerNotify("Register Failed");
        console.log(response)
      }
    } catch (er) {
      setLoading(false)
      registerNotify("Error!!" + er);
    }

    //   if(isRegistered){
    //     registerNotify('Register Success');
    //   }
    //   else{
    //     registerNotify('Register Failed');
    //   }
    //   alert(email +'--sdd-'+ password +'----->'+password2);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
        <h2 className="text-2xl  text-center font-semibold mb-6">
          Registration
        </h2>

        <form onSubmit={handleRegister}>
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <p className="text-red-700 text-center">{passErr}</p>
          <button
            disabled={!RegBtn}
            type="submit"
            className="bg-blue-900 text-white p-2 rounded-md w-full"
          >
            Register {isLoading && (<BeatLoader color="#ffffff" size={8} />)}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
