import React from 'react';
import Right from '../icons/Right';

const Hero = () => {
    return (

  <section className="container mx-auto flex p-8 items-center">

 
    <div className="w-1/2 pr-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Everything is better with a Delicious<span className='text-primary-700'> Pizza</span></h1>
      <p className="text-gray-600">Indulge in the rich flavors of our handcrafted pizzas. Each bite is a journey through layers of perfection, blending the finest ingredients for an unforgettable experience.</p>
   <button className='bg-primary text-white my-2 mr-4 px-4 py-2 bg-blue-900 rounded-md'>Order Now <Right/></button>
   <button className='bg-primary text-white my-2 mr-4 px-4 py-2 bg-blue-900 rounded-md'>Learn More</button>
    </div>


    <div className="w-1/2">
      <img src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt="Delicious Pizza" className="w-full h-auto rounded-lg"/>
    </div>

  </section>
    
    );
};

export default Hero;