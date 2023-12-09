import React, { useState } from "react";

const ChcekoutForm = () => {
  const [isOrdered, setIsOrdered] = useState(false);

  const handleMakeOrder = () => {
    setIsOrdered(true);
  };
  return (
    <div>
      <div class="container mx-auto p-8">
        {!isOrdered && (
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <form class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left Column  */}
            <div>
              <label
                for="firstName"
                class="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="mt-1 p-2 w-full border rounded-md"
              />

              <label
                for="lastName"
                class="block mt-4 text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Right Column  */}
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 p-2 w-full border rounded-md"
              />

              <label
                for="phone"
                class="block mt-4 text-sm font-medium text-gray-600"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Payment Method  */}
            <div class="col-span-2 mt-4">
              <label class="block text-sm font-medium text-gray-600">
                Payment Method
              </label>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Credit Card</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Additional Form Fields... */}

            {/* Submit Button  */}
            <div class="col-span-2 mt-8">
              <button
                onClick={handleMakeOrder}
                class="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Order
              </button>
            </div>
          </form>
        </div>
        )}

        {isOrdered &&(
               <div className="bg-gray-100 p-6 rounded-md shadow-md">
               <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Your Order #ORD-2832 has been Recieved!!</h2>
               <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Estimated Delivery Time: 2 Hours</h2>
               </div>
        )}
      </div>
    </div>
  );
};

export default ChcekoutForm;
