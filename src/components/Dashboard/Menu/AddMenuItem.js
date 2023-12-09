import { GeneralContext } from "@/context/TabMenu";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddMenuItems = () => {
  const { tabMenuStatus, setTabMenuStatus } = useContext(GeneralContext);
  const notify = (status) => toast(status);

  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [sizes, setSize] = useState([]);
  const [sizeCount, setSizeCount] = useState(1);
  const [tmpSize, setTmpSize] = useState("");
  const [tmpSizePrice, setTmpSizePrice] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleRemoveSize =(e,menu)=>{
    e.preventDefault();
    setSize((prev) => {
      // Check if the item already exists in the state
      if (
        prev.some(
          ([size, price]) => size === menu[0] && price === menu[1]
        )
      ) {
        // Remove the new item only if it  exists
        return prev.filter(([size, price]) => !(size === menu[0] && price === menu[1]));
      }

    return prev;
    });
  }
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

  const handleAddSize = (e) => {
    e.preventDefault();
    // setSize((prev)=>([...prev,[tmpSize,tmpSizePrice]]));
    setSize((prev) => {
      const newItem = [tmpSize, tmpSizePrice];

      // Check if the item already exists in the state
      if (
        !prev.some(
          ([size, price]) => size === tmpSize && price === tmpSizePrice
        )
      ) {
        // Add the new item only if it doesn't exist
        return [...prev, newItem];
      }

      // If the item already exists, return the previous state unchanged
      return prev;
    });
  };
  // useEffect(() => {
  //   console.log("size=>" + JSON.stringify(sizes));
  //   console.log("tmp size" + tmpSize);
  //   console.log("tmp price" + tmpSizePrice);
  // }, [setSize, sizes, tmpSize, tmpSizePrice]);
  const handleAddItem = (e) => {
    e.preventDefault();
    if (selectedImage) {
      addNewMenu();
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const addNewMenu = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://food-order-backend-iota.vercel.app/api/v1/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: itemName,
            description: description,
            category: category,
            price: price,
            sizes: sizes,
            image: selectedImage,
          }),
        }
      );
      if (response.ok) {
        const { success, data } = await response.json();
        if (success) {
          setLoading(false);
          notify("Item Added!!");
          setTimeout(() => {
            setTabMenuStatus((prev) => ({
              ...prev,
              isMenuEdit: false,
              isMenuAdd: false,
              isMenuOpen: true,
            }));
          }, 1000);
        } else {
          notify("Failed To add menu!!");
        }
      } else {
        setLoading(false);
        notify("Failed To add menu!!");
        console.log(response);
      }
    } catch (er) {
      setLoading(false);
      notify("Error!!" + er);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="w-40 h-40 bg-gray-300 rounded-md flex items-center justify-center">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Selected"
                width={200}
                height={200}
                className="w-200 h-200 rounded-md object-cover"
              />
            ) : (
              "Image"
            )}
          </div>
          <input
            id="uploadImage"
            className="my-4"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <h4 className="text-center py-2 cursor-pointer">Add/Edit Image</h4>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <form
            className="w-full max-w-md"
            //  onSubmit={handleAddItem}
          >
            <h3 className="text-center text-2xl py-2"> Add Menu Items</h3>
            <div className="mb-4">
              <label
                htmlFor="itemName"
                className="block text-sm font-medium text-gray-600"
              >
                Item Name
              </label>
              <input
                type="text"
                id="itemNName"
                onChange={(e) => setItemName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="itemName"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                type="text"
                rows={5}
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
                onChange={(e) => setPrice(Number(e.target.value))}
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
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
              >
                <option>Pizza</option>
                <option>Pasta</option>
                <option>Burger</option>
                <option>Fried Rice</option>
              </select>
            </div>
            <div className="">
              {sizes.map((size, index) => (
                <div
                  className="flex justify-center items-center gap-4 my-2"
                  key={index}
                >
                  <div
                    className="p-2 text-sm text-center bg-slate-200 rounded-sm"
                    style={{ flex: "0.42" }}
                  >
                    {size[0]}
                  </div>{" "}
                  {/* <div className="p-2 text-sm text-center bg-slate-200 rounded-sm" style={{ flex: '0.48' }}>----</div>{" "} */}
                  <div
                    className="p-2 text-sm text-center bg-slate-200 rounded-sm"
                    style={{ flex: "0.48" }}
                  >
                    {size[1]}
                  </div>
                  <button onClick={(e)=>handleRemoveSize(e,size)}
                    className="bg-red-500 text-center text-white px-4 py-2 rounded-md flex items-center justify-center"
                    style={{ flex: "0.1" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-600 mr-2"
            >
              Size
            </label>
            <div className="mb-4 flex items-center">
              {/* <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-600 mr-2"
            >
              Size
            </label> */}
              <input
                type="text"
                onChange={(e) => setTmpSize(e.target.value)}
                id="size"
                className="mt-1 p-2 w-[45%] border rounded-md mr-2"
                placeholder="4 inch Pizza"
              />
              <input
                type="text"
                onChange={(e) => setTmpSizePrice(e.target.value)}
                id="sizePrice"
                className="mt-1 p-2 w-[25%] border rounded-md mr-2"
                placeholder="3.21"
              />
              <button
                onClick={handleAddSize}
                className="bg-blue-900 w-[25%] text-white px-4 py-2 rounded-md mr-2"
              >
                Add Size
              </button>
              {/* <button className="bg-blue-900 text-white px-4 py-2 rounded-md mr-2">
              +
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              -
            </button> */}
            </div>

            <button
              onClick={handleAddItem}
              // type="submit"
              disabled={loading}
              className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Add Item {loading && <BeatLoader color="#ffffff" size={8} />}
            </button>
            <button
              // type="submit"
              onClick={() =>
                setTabMenuStatus((prev) => ({
                  ...prev,
                  isMenuEdit: false,
                  isMenuAdd: false,
                  isMenuOpen: true,
                }))
              }
              disabled={loading}
              className="bg-red-700 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMenuItems;
