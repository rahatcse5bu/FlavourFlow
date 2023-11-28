import React from 'react';
import SingleMenuItem from './SingleMenuItem';

const MenuItemGrid = () => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <SingleMenuItem/>
            <SingleMenuItem/>
            <SingleMenuItem/>
            <SingleMenuItem/>
            <SingleMenuItem/>
            <SingleMenuItem/>
            <SingleMenuItem/>
            <SingleMenuItem/>
        </div>
    );
};

export default MenuItemGrid;