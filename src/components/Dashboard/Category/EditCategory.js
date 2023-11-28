import { CategoryContext } from '@/context/Category';
import { GeneralContext } from '@/context/General';
import React, { useContext } from 'react';

const EditCategory = () => {
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-300">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            className="mt-1 p-2 w-full border rounded-md"
            // Add value and onChange handlers for controlled input
          />
        </div>

        {/* Add any other fields you want to edit here */}

        <div className="flex items-center justify-between">
          <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isCategoryEdit:false}))} type="submit" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
          <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isCategoryEdit:false}))} className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
