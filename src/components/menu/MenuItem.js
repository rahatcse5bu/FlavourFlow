import React from 'react';

const MenuItem = () => {
    return (
        <div className="flex items-center justify-center flex-col bg-slate-200 px-6 py-4 rounded-md">
                <img src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt="Delicious Pizza" className="w-full h-auto rounded-lg"/>
<h4 className="text-center text-2xl py-2 text-blue-900">Delicious Pizza</h4>
<p className="text-center text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<button className="bg-primary text-center text-white my-2 mr-4 px-4 py-2 bg-blue-900 rounded-md">Add To Cart $20</button>
        </div>
    );
};

export default MenuItem;