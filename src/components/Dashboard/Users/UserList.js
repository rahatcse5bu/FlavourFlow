import { GeneralContext } from '@/context/General';
import React, { useContext } from 'react';

const UserList = () => {
  const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)

  const users = [
    { id: 1, name: 'Rahat' },
    { id: 2, name: 'Anis' },
    { id: 3, name: 'Subal' },
    { id: 4, name: 'Sujan' },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl text-center mb-4">User List</h2>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-4 border rounded-md bg-white">
            <span className="text-lg">{user.name}</span>
            <div className="flex space-x-2">
              <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isUserEdit:true}))} className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Edit
              </button>
              <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isUserEdit:false}))}  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
