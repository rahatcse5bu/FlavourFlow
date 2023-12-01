import { GeneralContext } from "@/context/TabMenu";
import React, { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddCategory = () => {
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)
    const [name, setName] = useState("");
    const [isLoading, setLoading] = useState(false);
    const notify = (status) => toast(status);
  
    const addNewCategory = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch(
          "https://food-order-backend-iota.vercel.app/api/v1/categories/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
          }
        );
        if (response.ok) {
          const { success, data } = await response.json();
          if (success) {
            setLoading(false);
            notify("Category Added!!");
            setTabMenuStatus((prev) => ({
                ...prev,
                isCategoryEdit: false,
                isCategoryAdd: false,
                isCategoryOpen:true
              }))
          } else {
            notify("Failed To add category!!");
          }
        } else {
          setLoading(false);
          notify("Failed To add category!!");
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
        type="text"       onChange={(e) => setName(e.target.value)}
        placeholder="Pizza"
        className="mt-1 mr-4 p-2 w-[33%] border rounded-md"
      />{" "}
      <button onClick={addNewCategory}
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded-md"
      >
        Add Category {isLoading && <BeatLoader color="#ffffff" size={8} />}
      </button>
    </div>
  );
};

export default AddCategory;
