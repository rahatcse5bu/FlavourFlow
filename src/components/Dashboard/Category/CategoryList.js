import { CategoryContext } from "@/context/Category";
import { GeneralContext } from "@/context/TabMenu";
import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CategoryList = () => {
 
  const { selectedCategory, setSelectedCategory ,setTabMenuStatus} = useContext(GeneralContext);
  const [isLoading, setLoading] = useState(false);
  const notify = (status) => toast(status);

  const [categories, setCategories] = useState([]);

  const handleEditCategory = (category) => {
    setTabMenuStatus((prev) => ({ ...prev, isCategoryEdit: true }));
    // console.log('edit:'+JSON.stringify(selectedUser))
    setSelectedCategory((prev) => ({ _id: category._id, name: category.name }));
  };
  const handleDeleteCategory = (category) => {
    deleteCategory(category._id);
  };
  const deleteCategory = async (category_id) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/categories/" + category_id,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const { success, data } = await response.json();
        if (success) {
          setLoading(false);
          notify("Category Deleted successfully");
          await setTabMenuStatus((prev) => ({
            ...prev,
            isCategoryEdit: false,
            isCategoryOpen: true,
          }));
        }
      } else {
        setLoading(false);
        notify("Error While delating the Category");
        console.log("Failed to delete category");
      }
    } catch (err) {
      setLoading(false);
      notify("Error");
      console.err("Failed to delete category");
    }
  };
  const getCategoryList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/categories/",
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
          console.log("category list" + data);
          setCategories(data);
        } else {
          setLoading(false);
          setCategories([]);
        }
      } else {
        setLoading(false);
        console.log("Failed to fetch categories");
      }
    } catch (err) {
      setLoading(false);
      console.err("Failed to fetch users");
    }
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl text-center mb-4">Category List</h2>
      <ToastContainer/>
      {isLoading && (
        <BeatLoader
          className="flex items-center justify-center text-center"
          color="#005A9C"
          size={16}
        />
      )}
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-between p-4 border rounded-md bg-white"
          >
            <span className="text-lg">{category.name}</span>
            <div className="flex space-x-2">
              <button
             onClick={() => handleEditCategory(category)}
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                    onClick={(e) => {
                      handleDeleteCategory(category);
                    }}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
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
