import { GeneralContext } from "@/context/TabMenu";
import React, { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";

const EditMenuItems = () => {
  const { tabMenuStatus, setTabMenuStatus } = useContext(GeneralContext);
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const handleAddItem = (e) => {
    e.preventDefault();
    alert(
      "Item:" + itemName + " Description: " + description + " Price: " + price
    );
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 flex flex-col items-center justify-center">
        <div className="w-40 h-40 bg-gray-400 rounded-md flex items-center justify-center">
          Image
        </div>
        <h4 className="text-center py-2 cursor-pointer">Edit Image</h4>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <form className="w-full max-w-md" onSubmit={handleAddItem}>
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
            <select className="mt-1 p-2 w-full border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300">
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Burger</option>
              <option>Fried Rice</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            onClick={() =>
              setTabMenuStatus((prev) => ({
                ...prev,
                isMenuEdit: false,
                isMenuAdd: false,
              }))
            }
            className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Save Item {loading && <BeatLoader color="#ffffff" size={8} />}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-red-900 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700"
          >
            Delete Item {loading && <BeatLoader color="#ffffff" size={8} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMenuItems;
