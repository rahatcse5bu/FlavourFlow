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
const Dashboard = () => {
    const {isProfile,setIsProfile,isCategory,setIsCategory,isMenu, setisMenu,isUsers, setisUsers}  = useContext(GeneralContext)

  return (
 <>
 <TabItems/>
 <div class="w-full border-b border-solid border-gray mt-2"></div>
 {isProfile &&( <EditProfile/>)}
 {isCategory &&( <Category/>)}
  {isMenu &&( <DashboardMenuItems/>)}
 {isUsers &&( <EditProfile/>)} 
 
 </>
  );
};

export default Dashboard;
