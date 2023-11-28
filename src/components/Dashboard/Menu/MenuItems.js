import React, { useContext } from 'react';
import EditMenuItems from './EditMenuItems';
import { GeneralContext } from '@/context/General';
import AddMenuItems from './AddMenuItem';
import MenuItemGrid from './MenuItemGrid';

const DashboardMenuItems = () => {
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='add-menu py-4'>
                 <button onClick={()=>setTabMenuStatus ((prev)=> ({...prev,isMenuOpen:true}))} className='px-4 py-2 bg-blue-900 text-white rounded-md'><span className='text-2xl'>+</span> Add New Item</button>
                 { tabMenuStatus.isMenuOpen &&(  <button onClick={()=>setTabMenuStatus((prev)=> ({...prev,isMenuOpen:false}))} className='px-4 py-2 bg-red-600 text-white rounded-md ml-3'><span className='text-2xl'>-</span> Hide Add-Item Form</button>)}
            </div>
            {tabMenuStatus.isMenuOpen &&(
                <AddMenuItems/>)}
                {!tabMenuStatus.isMenuEdit && !tabMenuStatus.isMenuOpen && (<MenuItemGrid/>)}
           {tabMenuStatus.isMenuEdit && !tabMenuStatus.isMenuOpen &&( <EditMenuItems/> )}
        </div>
    );
};

export default DashboardMenuItems;