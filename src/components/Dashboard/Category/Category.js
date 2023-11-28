import React, { useContext } from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import EditCategory from './EditCategory';
import { CategoryContext } from '@/context/Category';

const Category = () => {
    const {isEditCategory,setIsEditCategory} = useContext(CategoryContext)
    return (
        <div>
            <AddCategory/>
            {!isEditCategory &&(  <CategoryList/>)}
           {isEditCategory &&( <EditCategory/> )}
        </div>
    );
};

export default Category;