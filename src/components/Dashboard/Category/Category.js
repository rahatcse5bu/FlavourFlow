import React, { useContext } from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import EditCategory from './EditCategory';
import { CategoryContext } from '@/context/Category';
import { GeneralContext } from '@/context/General';

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