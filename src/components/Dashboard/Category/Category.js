import React, { useContext } from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import EditCategory from './EditCategory';
import { GeneralContext } from '@/context/TabMenu';

const Category = () => {
    // const {tabMenuStatus,isEditCategory,setIsEditCategory} = useContext(CategoryContext)
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)
    return (
        <div>
            <AddCategory/>
            {!tabMenuStatus.isCategoryEdit &&(  <CategoryList/>)}
           {tabMenuStatus.isCategoryEdit &&( <EditCategory/> )}
        </div>
    );
};

export default Category;