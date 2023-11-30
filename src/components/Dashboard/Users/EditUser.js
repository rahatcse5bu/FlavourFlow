import { GeneralContext } from "@/context/TabMenu";
import { useRouter } from "next/navigation"
import React, { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const { tabMenuStatus, setTabMenuStatus, selectedUser, setSelectedUser } =
    useContext(GeneralContext);
 const router = useRouter();
    const notify = (msg) => toast(msg);

  const handleSaveChnages = (ev) => {
    // alert('hvhhv')
    ev.preventDefault();
    saveUser();
  };
  const saveUser = async () => {
    setLoading(true);
    const id= selectedUser._id;
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users/"+id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedUser) ,
        }
      );
      if (response.ok) {
        setLoading(false);

        // const userList= response.json;
        const { success, data } = await response.json();
        if (success) {
          setUpdated(true);
          setLoading(false);
          notify('User updated successfully')
          // router.push("/");
          setTabMenuStatus((prev)=>({...prev,isUserEdit:false}))
          // console.log(response);
          // console.log("updatedddddd");
          // console.log("user list" + JSON.stringify(data));
          // setUsers(data);
        }
      } else {
        setUpdated(false);
        setLoading(false);
        notify('Error While Updating the user')
        console.log("Failed to update user");
      }
    } catch (err) {
      setUpdated(false);
      setLoading(false);
      notify('Error')
      console.err("Failed to fetch users");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
      {/* <form> */}
      <ToastContainer />
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-600"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            onChange={(e)=>setSelectedUser((prev)=>({...prev,email:e.target.value}))}
            value={selectedUser.email}
            className="mt-1 p-2 w-full border rounded-md"
            // Add value and onChange handlers for controlled input
          />
        </div>

        {/* Add any other fields you want to edit here */}
        {/* {JSON.stringify(selectedUser)} */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleSaveChnages}
            // type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes {isLoading && <BeatLoader color="#ffffff" size={8} />}
          </button>
          <button
            onClick={(e) =>
              setTabMenuStatus((prev) => ({ ...prev, isUserEdit: false }))
            }
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      {/* </form> */}
    </div>
  );
};

export default EditUser;
