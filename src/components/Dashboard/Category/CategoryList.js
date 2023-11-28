import { CategoryContext } from '@/context/Category';
import { GeneralContext } from '@/context/General';
import React, { useContext } from 'react';

const CategoryList = () => {
    // const {isEditCategory,setIsEditCategory} = useContext(CategoryContext)
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)

  const categories = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Pasta' },
    { id: 3, name: 'Burger' },
    { id: 4, name: 'Fried Rice' },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl text-center mb-4">Category List</h2>
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center justify-between p-4 border rounded-md bg-white">
            <span className="text-lg">{category.name}</span>
            <div className="flex space-x-2">
              <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isCategoryEdit:true}))} className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Edit
              </button>
              <button onClick={(e)=>setTabMenuStatus((prev)=>({...prev,isCategoryEdit:false}))}  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
