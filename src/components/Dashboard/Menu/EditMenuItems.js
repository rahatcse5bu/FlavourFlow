import { GeneralContext } from "@/context/TabMenu";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditMenuItems = () => {
  const notify = (status) => toast(status);

  const {
    selectedProduct,
    setSelectedProduct,
    tabMenuStatus,
    setTabMenuStatus,
  } = useContext(GeneralContext);
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState(selectedProduct.name);
  const [description, setDescription] = useState(selectedProduct.description);
  const [category, setCategory] = useState(selectedProduct.category || '');
  const [price, setPrice] = useState(selectedProduct.price);
  const [productImage, setProductImage] = useState(selectedProduct.image);
  const handleSaveItem = (e) => {
    e.preventDefault();
    saveMenu();
    setTimeout(() => {
      setTabMenuStatus((prev) => ({
        ...prev,
        isMenuEdit: false,
        isMenuAdd: false,
      }));    
    }, 1200);

  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("key", "7b2df886bbb1704f6ffd66486cd13fdb");
      formData.append("image", file);

      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log("result" + JSON.stringify(result));
      console.log("url:=> " + result.data.url);
      setSelectedImage(result.data.url);
      notify("Image uploaded Added!!");
      return result;
    } catch (error) {
      notify("Error uploading image " + error);
      console.error("Error uploading image:", error);
      throw error;
    }
  };
 const saveMenu = async()=>{
  setLoading(true);
  try {
    const response = await fetch(
      "https://food-order-backend-iota.vercel.app/api/v1/products/"+selectedProduct._id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: itemName,
          description: description,
          category: category,
          price: price,
          // sizes: sizes,
          image: productImage,
        }),
      }
    );
    if (response.ok) {
      const { success, data } = await response.json();
      if (success) {
        setLoading(false);
        notify("Item Updated!!");
        setTimeout(() => {
          setTabMenuStatus((prev) => ({
            ...prev,
            isMenuEdit: false,
            isMenuAdd: false,
            isMenuOpen: true,
          }));
        }, 1500);
      } else {
        notify("Failed To update menu!!");
      }
    } else {
      setLoading(false);
      notify("Failed To update menu!!");
      console.log(response);
    }
  } catch (er) {
    setLoading(false);
    notify("Error!!" + er);
  }
  }
  return (
    <div className="grid grid-cols-3 gap-12">
      <div className="col-span-1 flex flex-col items-center justify-center">
        <div className="w-40 h-40 bg-gray-400 rounded-md flex items-center justify-center">
          <Image
            src={productImage}
            width={200}
            height={200}
            alt={selectedProduct.name}
          />
        </div>
        <input
            id="uploadImage"
            className="my-4"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        <h4 className="text-center py-2 cursor-pointer">Edit Image</h4>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <form className="w-full max-w-md" onSubmit={handleSaveItem}>
          <h3 className="text-center text-2xl py-2">Menu Items</h3>
          <div className="mb-4">
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-300"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemNName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              type="text"
              rows={5}
              value={description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="basePrice"
              className="block text-sm font-medium text-gray-600"
            >
              Base Price
            </label>
            <input
              type="number"
              id="basePrice"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <select
             onChange={(e)=>setCategory(e.target.value)}
              value={category}
              className="mt-1 p-2 w-full border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Burger</option>
              <option>Fried Rice</option>
            </select>
          </div>

          <button
            // type="submit"
            disabled={loading}
            onClick={() =>
   handleSaveItem
            }
            className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Save Item {loading && <BeatLoader color="#ffffff" size={8} />}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-red-700 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700"
          >
            Delete Item 
            {/* {loading && <BeatLoader color="#ffffff" size={8} />} */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMenuItems;
