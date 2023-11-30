import React, { useState } from 'react';

const ProductPopup = ({modal,product}) => {
    // const [isModalOpen, setModalOpen] = useState(false);
    const handleCloseModal = () => {
        // setModalOpen(false);
        modal(false)
      };
    const handleAddToCart = () => {
        // setModalOpen(false);
        modal(false)
      };
    return (
        <>
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-h-[80vh] overflow-y-auto">
            {/* Modal Content */}
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            {/* Product Image */}
            <img
              src={`${product.image}`}
              alt="Delicious Pizza"
              className="w-full h-auto rounded-lg mb-4"
            />
                {/* Quantity */}
                <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter quantity"
              />
            </div>
            {/* Extra Items */}
            <div className="mb-4">
              <label htmlFor="extraItems" className="block text-sm font-medium text-gray-600">
                Extra Items
              </label>
              <input
                type="text"
                id="extraItems"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Add extra items"
              />
            </div>
            {/* Gradients */}
            <div className="mb-4">
              <label htmlFor="gradients" className="block text-sm font-medium text-gray-600">
                Gradients
              </label>
              <input
                type="text"
                id="gradients"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Select gradients"
              />
            </div>
            {/* Variant List */}
            <div className="mb-4">
              <label htmlFor="variantList" className="block text-sm font-medium text-gray-600">
                Variant List
              </label>
              <select
                id="variantList"
                className="mt-1 p-2 w-full border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
              >
                <option>Variant 1</option>
                <option>Variant 2</option>
                <option>Variant 3</option>
              </select>
            </div>
<div className='flex md:flex-row items-center justify-start'>
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