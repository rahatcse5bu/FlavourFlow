import Image from "next/image";
import React, { useEffect, useState } from "react";
import Select from "react-select";
const ProductPopup = ({ modal, product }) => {
  // const [isModalOpen, setModalOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [totalPrice,setTotalPrice]=useState(Number(product.price));
  const [menuPrice,setMenuPrice]=useState(0);
  const [extraIngredients, setExtraIngredients] = useState(
    product.extraIngredients.map((ingredient, index) => ({
      value: ingredient,
      label: ingredient,
      price:32
    }))
  );
  const [sizes, setSizes] = useState(
    product.sizes.map((size, index) => ({ value: size, label: size }))
  );

  const handleCloseModal = () => {
    // setModalOpen(false);
    modal(false);
  };
  const handleAddToCart = () => {
    // setModalOpen(false);
    modal(false);
  };
  useEffect(()=>{
setTotalPrice((qty*product.price) +Number(menuPrice));
  },[qty,menuPrice])
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg max-h-[80vh] overflow-y-auto">
          {/* Modal Content */}
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
          {/* Product Image */}
          <Image
            src={`${product.image}`}
            alt="Delicious Pizza"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg mb-4"
          />
          {/* Quantity */}
          <div className="mb-4 flex items-center justify-center flex-row">
            <div className="w-[80%">
              <label
                htmlFor="quantity"
                className="block  text-sm font-medium text-gray-600"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter quantity"
              />
            </div>
            <div className="text-center text-sm ml-4">
              Total Cost: ${(totalPrice).toFixed(2)}
            </div>
          </div>
          {/* Extra Items */}
          <div className="mb-4">
            <label
              htmlFor="extraItems"
              className="block text-sm font-medium text-gray-600"
            >
              Extra Items
            </label>
            {product.sizes.map((size, index) => (
              <label key={index} className="flex items-center">
                <input onChange={(e)=>setMenuPrice(e.target.value)}
                  type="radio"
                  id={`variant-${index}`}
                  name="variantList"
                  value={size[1]}
                  className="mr-2"
                />
                {size[0]} -- ${size[1]}
              </label>
            ))}
            {/* <Select options={sizes} isMulti /> */}
          </div>
          {/* Gradients */}
          <div className="mb-4">
            <label
              htmlFor="gradients"
              className="block text-sm font-medium text-gray-600"
            >
              Gradients
            </label>
            <Select options={extraIngredients} isMulti />
          </div>

          <div className="flex md:flex-row items-center justify-start">
            <button
              onClick={handleAddToCart}
              className="bg-blue-900 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-600"
            >
              Add to cart
            </button>

            <button
              onClick={handleCloseModal}
              className="bg-gray-300 text-red-600 px-4 py-2 rounded-md hover:bg-red-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPopup;
