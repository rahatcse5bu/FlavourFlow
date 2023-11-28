'use client'
import EditProfile from '@/components/Dashboard/EditProfile';
import TabItems from '@/components/Dashboard/TabItems';
import { GeneralContext } from '@/context/General';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
// import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import RegisterPage from '../register/page';
import DashboardMenuItems from '@/components/Dashboard/Menu/MenuItems';
import Category from '@/components/Dashboard/Category/Category';
import User from '@/components/Dashboard/Users/User';
const Dashboard = () => {
    const {isProfile,setIsProfile,isCategory,setIsCategory,isMenu, setisMenu,isUsers, setIsUsers,isOrders}  = useContext(GeneralContext)

  return (
 <>
 <TabItems/>
 <div class="w-full border-b border-solid border-gray mt-2"></div>
 {isProfile &&( <EditProfile/>)}
 {isCategory &&( <Category/>)}
  {isMenu &&( <DashboardMenuItems/>)}
 {isUsers &&( <User/>)} 
 {isOrders &&( <User/>)} 
 
 </>
  );
};

export default Dashboard;
