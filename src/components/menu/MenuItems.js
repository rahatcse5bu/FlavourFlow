import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { BeatLoader } from "react-spinners";
const MenuItems = () => {
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
    <>
          {isLoading && (
        <BeatLoader
          className="flex items-center justify-center text-center p-32"
          color="#005A9C"
          size={16}
        />
      )}
        <div className="grid grid-cols-3 gap-4 my-4">
      {!isLoading &&
        products.map((product, index) => (
          <MenuItem key={index} product={product} />
        ))}

    </div>
    </>

  );
};

export default MenuItems;
