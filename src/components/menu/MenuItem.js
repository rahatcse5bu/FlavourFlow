"use client";
import React, { useState } from "react";
import ProductPopup from "../Product/ProductPopup";
import Image from "next/image";

const MenuItem = ({product}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleAddToCart = () => {
    setModalOpen(true);
  };

  // const productItem = {
  //   title: "Delicious Pizza",
  //   image:
  //     "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
  //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   price: 20,
  // };
// alert(JSON.stringify(product))
  return (
    <div className=" relative flex items-center justify-center flex-col bg-slate-200 px-6 py-4 rounded-md">
      {product.category && (
      <div className="text-sm bg-blue-900 text-white absolute  top-0 right-0 px-2 py-1 rounded-full">{product.category}</div>
      )}
      <Image
        src={`${product.image}`} width={200} height={100} layout="responsive" // or layout="fixed"
        maxHeight={80}
        alt="Delicious Pizza"
        className=" rounded-lg"
      />
      <h4 className="text-center text-2xl py-2 text-blue-900">
        {product.name}
      </h4>
      <p className="text-center text-gray-500">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-primary text-center text-white my-2 mr-4 px-4 py-2 bg-blue-900 rounded-md"
      >
        Add To Cart ${product.price}
      </button>
      {/* Modal */}
      {isModalOpen && (
        <ProductPopup modal={setModalOpen} product={product} />
      )}
    </div>
  );
};

export default MenuItem;
