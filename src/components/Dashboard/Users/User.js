import React, { useContext } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import EditUser from './EditUser';
import { DashboardUserContext } from '@/context/Users';

const User = () => {
    const {isEditUser, setIsEditUser} = useContext(DashboardUserContext);
    return (
        <div>
            <AddUser/>
            {!isEditUser &&(  <UserList/>)}
           {isEditUser &&( <EditUser/> )}
        </div>
    );
};

export default User;