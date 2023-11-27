import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = () => {
    return (
        <div className='grid grid-cols-3 gap-4 my-4'>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </div>
    );
};

export default MenuItems;