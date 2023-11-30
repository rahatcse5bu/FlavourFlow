'use client'
import React, { useState } from 'react';
import ProductPopup from '../Product/ProductPopup';

const MenuItem = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddToCart = () => {
      setModalOpen(true);
    };
  
const productItem ={
    title:'Delicious Pizza',
    image: 'https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price:20

}
  
    return (
      <div className="flex items-center justify-center flex-col bg-slate-200 px-6 py-4 rounded-md">
        <img
          src={`${productItem.image}`}
          alt="Delicious Pizza"
          className="w-full h-auto rounded-lg"
        />
        <h4 className="text-center text-2xl py-2 text-blue-900">{productItem.title}</h4>
        <p className="text-center text-gray-500">
          {productItem.desc}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-primary text-center text-white my-2 mr-4 px-4 py-2 bg-blue-900 rounded-md"
        >
          Add To Cart ${productItem.price}
        </button>
        {/* Modal */}
        {isModalOpen && (
   <ProductPopup modal={setModalOpen} product={productItem}/>
      )}
  
      </div>
    )
};

export default MenuItem;