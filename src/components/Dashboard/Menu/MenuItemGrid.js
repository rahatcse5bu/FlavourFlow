import React, { useEffect, useState } from 'react';
import SingleMenuItem from './SingleMenuItem';

const MenuItemGrid = () => {
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://food-order-backend-iota.vercel.app/api/v1/products/",
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const { success, data } = await response.json();
          if (success) {
            console.log("products=>" + JSON.stringify(data));
            setProducts(data);
            setLoading(false);
          } else {
            alert("ERR");
            setLoading(false);
          }
        } else {
          alert("errrrrr");
          setLoading(false);
        }
        // alert(JSON.stringify(data))
      } catch (err) {
        setLoading(false);
        alert("jhjj" + err);
      }
    };
    useEffect(() => {
      getAllProducts();
    }, []);
    return (
        <div className='grid grid-cols-4 gap-2'>
            {products.map((product,index)=>(
                <SingleMenuItem key={index} product={product}/>
            ))}
           
        </div>
    );
};

export default MenuItemGrid;