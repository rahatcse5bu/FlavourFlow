'use client'
import { GeneralContext } from '@/context/General';
import { UserContext } from '@/context/UserAuth';
import Link from 'next/link';
import React, { useContext } from 'react';

const TabItems = () => {
    const {isProfile,setIsProfile,isCategory,setIsCategory,isMenu, setIsMenu,isUsers, setIsUsers,isOrders,setIsOrders}  = useContext(GeneralContext)
    const activeBGColor= 'bg-blue-900';
    const setTabItem = (item)=>{
if(item=='Profile'){
    setIsProfile(true)
    setIsCategory(false)
    setIsMenu(false)
    setIsUsers(false)
    setIsOrders(false)
}
else if(item=='Category'){
    setIsProfile(false)
    setIsCategory(true)
    setIsMenu(false)
    setIsUsers(false)
    setIsOrders(false)
}
else if(item=='Menu Items'){
    setIsProfile(false)
    setIsCategory(false)
    setIsMenu(true)
    setIsUsers(false)
    setIsOrders(false)
}
else if(item=='Users'){
    setIsProfile(false)
    setIsCategory(false)
    setIsMenu(false)
    setIsUsers(true)
    setIsOrders(false)
}
else if(item=='Orders'){
    setIsProfile(false)
    setIsCategory(false)
    setIsMenu(false)
    setIsUsers(false)
    setIsOrders(true)
}
    }
    return (
<>
  <div className='tabs flex gap-4 justify-center items-center py-4 mx-auto'>
   {isProfile &&(
      <div onClick={()=>setTabItem('Profile')} className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Profile</div>
      )}
      {!isProfile &&(
              <div onClick={()=>setTabItem('Profile')} className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Profile</div>

      )}
   {isCategory &&(
      <div onClick={()=>setTabItem('Category')} className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Category</div>
   )}
   {!isCategory &&(
      <div onClick={()=>setTabItem('Category')} className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Category</div>
   )}
   {isMenu &&(
      <div onClick={()=>setTabItem('Menu Items')}  className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Menu Items</div>
   )}
   {!isMenu &&(
      <div onClick={()=>setTabItem('Menu Items')}  className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Menu Items</div>
   )}
   {isUsers &&(
      <div onClick={()=>setTabItem('Users')}  className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Users</div>
   )}
   {!isUsers &&(
      <div onClick={()=>setTabItem('Users')}  className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Users</div>
   )}
   {isOrders &&(
      <div onClick={()=>setTabItem('Orders')}  className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Orders</div>
   )}
   {!isOrders &&(
      <div onClick={()=>setTabItem('Orders')}  className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Orders</div>
   )}
  </div>
</>

    );
};

export default TabItems;