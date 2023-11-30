import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const notify = (status) => toast(status);

  const addNewUser = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        const { success, data } = await response.json();
        if (success) {
          setLoading(false);
          notify("User Added!!");
        } else {
          notify("Failed To add user!!");
        }
      } else {
        setLoading(false);
        notify("Failed To add user!!");
        console.log(response);
      }
    } catch (er) {
      setLoading(false);
      notify("Error!!" + er);
    }
  };
  return (
    <div className="flex items-center justify-center">
        <ToastContainer/>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="rahat.cse5.bu@gmail.com"
        className="mt-1 mr-4 p-2 w-[24%] border rounded-md"
      />{" "}
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="mt-1 mr-4 p-2 w-[24%] border rounded-md"
      />{" "}
      <button
        // type="submit"
        onClick={ addNewUser}
        className="bg-blue-900 text-white px-4 py-2 rounded-md"
      >
        Add User {isLoading && <BeatLoader color="#ffffff" size={8} />}
      </button>
    </div>
  );
};

export default AddUser;
