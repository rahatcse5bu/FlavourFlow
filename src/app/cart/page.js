"use client";
import ChcekoutForm from "@/components/ChcekoutForm";
import { GeneralContext } from "@/context/TabMenu";
import React, { useContext, useEffect, useState } from "react";

const Cart = () => {
    const [isCheckoutForm, setChcekoutForm]= useState(false);
  const { cart, setCartProducts } = useContext(GeneralContext);
  const [cartTotal,setCartTotal]= useState(0)
  const calculateTotal = () => {
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.totalPrice;
    });

    return total;
};

useEffect(()=>{
    setCartTotal(calculateTotal);
},[cart]);

  const handleRemoveCartItem = (index) => {
    // Use a callback function to update the state based on the previous state
    setCartProducts((prev) => {
      // Create a new array excluding the item to be removed
      const updatedCart = [...prev.slice(0, index), ...prev.slice(index + 1)];
      return updatedCart;
    });
  };
  const handleCheckout =(e)=>{
e.preventDefault();
    // alert('shnvsdvsgh')
    setChcekoutForm(true);
  }
  return (
    <div>
        {/* if not chcekout form , it should be cart page  */}
        {!isCheckoutForm && (
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
            {/* {JSON.stringify(cart)} ghvghvh */}
            {cart.map((item, index) => (
              <>
                <div className="bg-white flex items-center justify-between p-4 rounded-md shadow-md">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">
                      Price: ${item.totalPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Quantity: {item.qty}</p>
                    <button onClick={()=>handleRemoveCartItem(index)}
                     className="bg-red-500 text-white px-3 py-1 rounded-md">
                      Remove
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${cartTotal}</p>
            <button onClick={handleCheckout}
             className="bg-blue-900 text-white px-4 py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
      )}
       {isCheckoutForm && (
<ChcekoutForm/>
       )}
    </div>
    
  );
};

export default Cart;
