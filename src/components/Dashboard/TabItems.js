'use client'
import Link from 'next/link';
import React from 'react';

const TabItems = () => {
    return (
        <>
<div className='tabs  grid gap-4 grid-cols-8 items-center justify-center py-4 mx-auto'>
    <Link href={'/profile'}>
    <div className='tab-item text-center text-white px-2 py-3 bg-blue-900 rounded-full cursor-pointer'>Profile</div>
    </Link>
    <Link href={'/category'}>
    <div className='tab-item text-center text-white px-2 py-3 bg-blue-900 rounded-full cursor-pointer'>Category</div>
    </Link>
    <Link href={'/menu-items'}>
    <div className='tab-item text-center text-white px-2 py-3 bg-blue-900 rounded-full cursor-pointer'>Menu Items</div>
</Link>
<Link href={'/users'}>
    <div className='tab-item text-center text-white px-2 py-3 bg-blue-900 rounded-full cursor-pointer'>Users</div>
</Link>
 </div>     
        </>
    );
};

export default TabItems;