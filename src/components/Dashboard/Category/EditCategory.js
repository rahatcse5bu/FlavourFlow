import { GeneralContext } from '@/context/TabMenu';
import React, { useContext, useState } from 'react';
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditCategory = () => {
    const {tabMenuStatus,setTabMenuStatus,selectedCategory,setSelectedCategory} = useContext(GeneralContext)
    const notify = (msg) => toast(msg);
    const [isLoading, setLoading] = useState(false);
    const [newCategory, setNewCategory] = useState(selectedCategory.name);
    const [isUpdated, setUpdated] = useState(false);
  const handleSaveChnages = (ev) => {
    // alert('hvhhv')
    ev.preventDefault();
    saveCategory();
  };
  const saveCategory = async () => {
    setLoading(true);
    const id= selectedCategory._id;
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/categories/"+id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({'name':newCategory}) ,
        }
      );
      if (response.ok) {
        setLoading(false);

        // const userList= response.json;
        const { success, data } = await response.json();
        if (success) {
          setUpdated(true);
          setLoading(false);
          notify('Category updated successfully')
          // router.push("/");
          setTabMenuStatus((prev)=>({...prev,isCategoryEdit:false}))
          // console.log(response);
          // console.log("updatedddddd");
          // console.log("user list" + JSON.stringify(data));
          // setUsers(data);
        }
      } else {
        setUpdated(false);
        setLoading(false);
        notify('Error While Updating the category')
        console.log("Failed to update category");
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
      <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>
      <form>
        <ToastContainer/>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-300">
            Category Name
          </label>
          <input
            type="text"
            onChange={(e)=>setNewCategory(e.target.value)}
            value={newCategory}
            id="categoryName"
            className="mt-1 p-2 w-full border rounded-md"
            // Add value and onChange handlers for controlled input
          />
        </div>

        {/* Add any other fields you want to edit here */}

        <div className="flex items-center justify-between">
          <button 
                onClick={handleSaveChnages}
          type="submit" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save Changes {isLoading && <BeatLoader color="#ffffff" size={8} />}
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
