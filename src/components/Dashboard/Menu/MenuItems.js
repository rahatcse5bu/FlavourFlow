import React, { useContext } from 'react';
import EditMenuItems from './EditMenuItems';
import { GeneralContext } from '@/context/General';
import AddMenuItems from './AddMenuItem';
import MenuItemGrid from './MenuItemGrid';

const DashboardMenuItems = () => {
    const {isAddMenu,setIsAddMenu,isMenuEdit} = useContext(GeneralContext)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='add-menu py-4'>
                 <button onClick={()=>setIsAddMenu(true)} className='px-4 py-2 bg-blue-900 text-white rounded-md'><span className='text-2xl'>+</span> Add New Item</button>
                 { isAddMenu &&(  <button onClick={()=>setIsAddMenu(false)} className='px-4 py-2 bg-red-600 text-white rounded-md ml-3'><span className='text-2xl'>-</span> Hide Add-Item Form</button>)}
            </div>
            { isAddMenu &&(
                <AddMenuItems/>)}
                {!isMenuEdit && !isAddMenu && (<MenuItemGrid/>)}
           {isMenuEdit && !isAddMenu &&( <EditMenuItems/> )}
        </div>
    );
};

export default DashboardMenuItems;