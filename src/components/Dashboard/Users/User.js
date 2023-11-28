import React, { useContext } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import EditUser from './EditUser';
import { GeneralContext } from '@/context/General';

const User = () => {
    const {tabMenuStatus,setTabMenuStatus} = useContext(GeneralContext)
    return (
        <div>
            <AddUser/>
            {!tabMenuStatus.isUserEdit &&(  <UserList/>)}
           {tabMenuStatus.isUserEdit &&( <EditUser/> )}
        </div>
    );
};

export default User;