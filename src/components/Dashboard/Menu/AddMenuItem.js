import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const AddMenuItems = () => {
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
 const handleAddItem =(e)=>{
    e.preventDefault();
    alert('Item:'+itemName+' Description: '+description+' Price: '+price)
 }
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1 flex flex-col items-center justify-center'>
        <div className='w-40 h-40 bg-gray-300 rounded-md flex items-center justify-center'>
          Image
        </div>
        <h4 className='text-center py-2 cursor-pointer'>Add/Edit Image</h4>
      </div>
      <div className='col-span-2 flex items-center justify-center'>
        <form className="w-full max-w-md" onSubmit={handleAddItem}>
          <h3 className='text-center text-2xl py-2'> Add Menu Items</h3>
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-600">
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
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              type="text" rows={5}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="basePrice" className="block text-sm font-medium text-gray-600">
              Base Price
            </label>
            <input
              type="number"
              id="basePrice"
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" disabled={loading} className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-700">
            Add Item {loading && (<BeatLoader color="#ffffff" size={8} />)}
          </button>
          <button type="submit" disabled={loading} className="bg-red-700 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700">
            Delete Item {loading && (<BeatLoader color="#ffffff" size={8} />)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItems;
