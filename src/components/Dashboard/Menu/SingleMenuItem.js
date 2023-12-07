import { GeneralContext } from '@/context/TabMenu';
import React, { useContext } from 'react';

const SingleMenuItem = ({product}) => {
    const {selectedProduct,setSelectedProduct,setTabMenuStatus} = useContext(GeneralContext)
   const handleEditProduct=()=> {
    // alert('hello')
    setTabMenuStatus ((prev)=> ({...prev,isMenuEdit:true}));
    setSelectedProduct(product);
   }
    return (
        <div onClick={handleEditProduct} className='p-2 flex flex-col justify-center items-center shadow-lg hover:shadow-2xl cursor-pointer'>
            <img className='w-40 h-40 rounded-full' src={`${product.image}`} alt="Pizza" />
            <div className='text-xl text-center py-2'>{product.name}</div>
            <div className='p-2' style={{ textAlign: 'center', color: '#718096', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                {product.description}
            </div>
            <p className='text-center py-2'>${product.price}</p>
        </div>
    );
};

export default SingleMenuItem;
