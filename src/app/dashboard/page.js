'use client'
import EditProfile from '@/components/Dashboard/EditProfile';
import TabItems from '@/components/Dashboard/TabItems';
import { GeneralContext } from '@/context/General';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
// import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import RegisterPage from '../register/page';
const Dashboard = () => {
    const {isProfile,setIsProfile,isCategory,setIsCategory,isMenu, setisMenu,isUsers, setisUsers}  = useContext(GeneralContext)

  return (
 <>
 <TabItems/>
 {isProfile &&( <EditProfile/>)}
 {isCategory &&( <RegisterPage/>)}
 {/* {isMenu &&( <EditProfile/>)}
 {isUsers &&( <EditProfile/>)} */}
 
 </>
  );
};

export default Dashboard;
