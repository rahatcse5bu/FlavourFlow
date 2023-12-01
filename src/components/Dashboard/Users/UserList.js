import { GeneralContext } from "@/context/TabMenu";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditUser from "./EditUser";
import { BeatLoader } from "react-spinners";
const UserList = () => {
  const { tabMenuStatus, setTabMenuStatus, selectedUser, setSelectedUser } =
    useContext(GeneralContext);
  const [isLoading, setLoading] = useState(false);
  const notify = (status) => toast(status);

  const [users, setUsers] = useState([]);
  const handleEditUser = (user) => {
    setTabMenuStatus((prev) => ({ ...prev, isUserEdit: true }));
    // console.log('edit:'+JSON.stringify(selectedUser))
    setSelectedUser((prev) => ({ _id: user._id, email: user.email }));
  };
  const handleDeleteUser = (user) => {
    deleteUser(user._id);
  };
  useEffect(() => {
    getUserList();
  }, []);

  const deleteUser = async (user_id) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users/" + user_id,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setLoading(false);
        const { success, data } = await response.json();
        if (success) {
          setLoading(false);
          notify("User Deleted successfully");
          await setTabMenuStatus((prev) => ({
            ...prev,
            isUserEdit: false,
            isUserOpen: true,
          }));
        }
      } else {
        setLoading(false);
        notify("Error While delating the user");
        console.log("Failed to delete user");
      }
    } catch (err) {
      setLoading(false);
      notify("Error");
      console.err("Failed to delete user");
    }
  };
  const getUserList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/users",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        setLoading(false);
        // const userList= response.json;
        const { success, data } = await response.json();
        if (success) {
          console.log(response);
          console.log("user list" + data);
          setUsers(data);
        } else {
          setUsers([]);
          setLoading(false);
        }
      } else {
        setLoading(false);
        console.log("Failed to fetch users");
      }
    } catch (err) {
      setLoading(false);
      console.err("Failed to fetch users");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl text-center mb-4">User List</h2>
      {isLoading && (
        <BeatLoader
          className="flex items-center justify-center text-center"
          color="#005A9C"
          size={16}
        />
      )}

      {!isLoading && (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between p-4 border rounded-md bg-white"
            >
              <span className="text-lg">{user.email}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    handleDeleteUser(user);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
