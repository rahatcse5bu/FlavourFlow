'use client'
import { GeneralContext } from '@/context/TabMenu';
import { UserContext } from '@/context/UserAuth';
import Link from 'next/link';
import React, { useContext } from 'react';

const TabItems = () => {
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)
    const activeBGColor= 'bg-blue-900';
    const setTabItem = (item)=>{
if(item=='Profile'){
    setTabMenuStatus((prev)=>({...prev,
        isProfileOpen: true,
        isProfileEdit: false,
        isProfileAdd: false,
        isCategoryOpen: false,
        isCategoryEdit: false,
        isCategoryAdd: false,
        isUserOpen: false,
        isUserEdit: false,
        isUserAdd: false,
        isMenuOpen: false,
        isMenuEdit: false,
        isMenuAdd: false,
        isOrderOpen: false,
        isOrderEdit: false,
        isOrderAdd: false}))
    // setIsProfile(true)
    // setIsCategory(false)
    // setIsMenu(false)
    // setIsUsers(false)
    // setIsOrders(false)
}
else if(item=='Category'){
    // setIsProfile(false)
    // setIsCategory(true)
    // setIsMenu(false)
    // setIsUsers(false)
    // setIsOrders(false)
    setTabMenuStatus((prev)=>({...prev,
        isProfileOpen: false,
        isProfileEdit: false,
        isProfileAdd: false,
        isCategoryOpen: true,
        isCategoryEdit: false,
        isCategoryAdd: false,
        isUserOpen: false,
        isUserEdit: false,
        isUserAdd: false,
        isMenuOpen: false,
        isMenuEdit: false,
        isMenuAdd: false,
        isOrderOpen: false,
        isOrderEdit: false,
        isOrderAdd: false}))
}
else if(item=='Menu Items'){
    // setIsProfile(false)
    // setIsCategory(false)
    // setIsMenu(true)
    // setIsUsers(false)
    // setIsOrders(false)
    setTabMenuStatus((prev)=>({...prev,
        isProfileOpen: false,
        isProfileEdit: false,
        isProfileAdd: false,
        isCategoryOpen: false,
        isCategoryEdit: false,
        isCategoryAdd: false,
        isUserOpen: false,
        isUserEdit: false,
        isUserAdd: false,
        isMenuOpen: true,
        isMenuEdit: false,
        isMenuAdd: false,
        isOrderOpen: false,
        isOrderEdit: false,
        isOrderAdd: false
    }))
}
else if(item=='Users'){
    // setIsProfile(false)
    // setIsCategory(false)
    // setIsMenu(false)
    // setIsUsers(true)
    // setIsOrders(false)
    setTabMenuStatus((prev)=>({...prev,
        isProfileOpen: false,
        isProfileEdit: false,
        isProfileAdd: false,
        isCategoryOpen: false,
        isCategoryEdit: false,
        isCategoryAdd: false,
        isUserOpen: true,
        isUserEdit: false,
        isUserAdd: false,
        isMenuOpen: false,
        isMenuEdit: false,
        isMenuAdd: false,
        isOrderOpen: false,
        isOrderEdit: false,
        isOrderAdd: false
    }))
}
else if(item=='Orders'){
    // setIsProfile(false)
    // setIsCategory(false)
    // setIsMenu(false)
    // setIsUsers(false)
    // setIsOrders(true)
    setTabMenuStatus((prev)=>({...prev,
        isProfileOpen: false,
        isProfileEdit: false,
        isProfileAdd: false,
        isCategoryOpen: false,
        isCategoryEdit: false,
        isCategoryAdd: false,
        isUserOpen: false,
        isUserEdit: false,
        isUserAdd: false,
        isMenuOpen: false,
        isMenuEdit: false,
        isMenuAdd: false,
        isOrderOpen: true,
        isOrderEdit: false,
        isOrderAdd: false
    }))
}
    }
    return (
<>
  <div className='tabs flex gap-4 justify-center items-center py-4 mx-auto'>
   {tabMenuStatus.isProfileOpen &&(
      <div onClick={()=>setTabItem('Profile')} className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Profile</div>
      )}
      {!tabMenuStatus.isProfileOpen &&(
              <div onClick={()=>setTabItem('Profile')} className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Profile</div>

      )}
   {tabMenuStatus.isCategoryOpen &&(
      <div onClick={()=>setTabItem('Category')} className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Category</div>
   )}
   {!tabMenuStatus.isCategoryOpen &&(
      <div onClick={()=>setTabItem('Category')} className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Category</div>
   )}
   {tabMenuStatus.isMenuOpen &&(
      <div onClick={()=>setTabItem('Menu Items')}  className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Menu Items</div>
   )}
   {!tabMenuStatus.isMenuOpen &&(
      <div onClick={()=>setTabItem('Menu Items')}  className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Menu Items</div>
   )}
   {tabMenuStatus.isUserOpen &&(
      <div onClick={()=>setTabItem('Users')}  className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Users</div>
   )}
   {!tabMenuStatus.isUserOpen &&(
      <div onClick={()=>setTabItem('Users')}  className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Users</div>
   )}
   {tabMenuStatus.isOrderOpen &&(
      <div onClick={()=>setTabItem('Orders')}  className='tab-item text-center text-white px-6 py-3 bg-blue-900 rounded-full cursor-pointer'>Orders</div>
   )}
   {!tabMenuStatus.isOrderOpen &&(
      <div onClick={()=>setTabItem('Orders')}  className='tab-item text-center text-black px-6 py-3 bg-gray-300 rounded-full cursor-pointer'>Orders</div>
   )}
  </div>
</>

    );
};

export default TabItems;