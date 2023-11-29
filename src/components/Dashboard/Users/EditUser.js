import { GeneralContext } from '@/context/TabMenu';
import React, { useContext } from 'react';

const EditUser = (user) => {

  const {tabMenuStatus,setTabMenuStatus,selectedUser,setSelectedUser} = useContext(GeneralContext)
  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-600">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={selectedUser.name}
            className="mt-1 p-2 w-full border rounded-md"
            // Add value and onChange handlers for controlled input
          />
        </div>

        {/* Add any other fields you want to edit here */}

        <div className="flex items-center justify-between">
          <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isUserEdit:false}))} type="submit" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
          <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isUserEdit:false}))} className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
