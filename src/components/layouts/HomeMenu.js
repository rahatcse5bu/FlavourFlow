import React from 'react';
import MenuItems from '../menu/MenuItems';

const HomeMenu = () => {
    return (
        <section className='home-menu' id='homeMenu'>
            <h4 className='text-center italic'>Check Out</h4>
            <h3 className='text-center text-3xl text-primary'>Menu</h3>
            <MenuItems/>
        </section>
    );
};

export default HomeMenu;