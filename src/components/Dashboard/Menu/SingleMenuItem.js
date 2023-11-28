import { GeneralContext } from '@/context/General';
import React, { useContext } from 'react';

const SingleMenuItem = () => {
    const { isMenuEdit, setIsMenuEdit } = useContext(GeneralContext);
   
    return (
        <div onClick={() => setIsMenuEdit(true)} className='p-2 flex flex-col justify-center items-center shadow-lg hover:shadow-2xl cursor-pointer'>
            <img className='w-40 h-40 rounded-full' src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg" alt="Pizza" />
            <div style={{ textAlign: 'center', color: '#718096', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                Pizza pizzaa  nmbjknjkasnjkcnasjkfnasjkcfnzbcszbajmcbjk
            </div>
            <p className='text-center'>$34</p>
        </div>
    );
};

export default SingleMenuItem;
