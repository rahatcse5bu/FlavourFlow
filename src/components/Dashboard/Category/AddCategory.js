import React from 'react';

const AddCategory = () => {
    return (
        <div className='flex items-center justify-center'>
            <input type='text' placeholder='Pizza' className='mt-1 mr-4 p-2 w-[33%] border rounded-md' /> <button type='submit' className='bg-blue-900 text-white px-4 py-2 rounded-md'>Add Category</button>
        </div>
    );
};

export default AddCategory;