import React from 'react';
import Right from '../icons/Right';

const Hero = () => {
    return (

  <section class="container mx-auto flex p-8 items-center">

 
    <div class="w-1/2 pr-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Everything is better with a Delicious Pizza</h1>
      <p class="text-gray-600">Indulge in the rich flavors of our handcrafted pizzas. Each bite is a journey through layers of perfection, blending the finest ingredients for an unforgettable experience.</p>
   <button className='bg-primary my-2'>Order Now <Right/></button>
   <button>Learn More</button>
    </div>


    <div class="w-1/2">
      <img src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt="Delicious Pizza" class="w-full h-auto rounded-lg"/>
    </div>

  </section>
    
    );
};

export default Hero;