'use client';
import { createContext, useState } from "react";

export const GeneralContext = createContext({
	data: [],
	// success: true,
});

const GenneralProvider = (props) => {
	const [isProfile, setIsProfile] = useState(true);
	const [isUsers, setIsUsers] = useState(false);
	const [isCategory, setIsCategory] = useState(false);
	const [isMenu, setIsMenu] = useState(false);
	const [isOrders, setIsOrders] = useState(false);
	const [isAddMenu, setIsAddMenu] = useState(false);
	const [isMenuEdit, setIsMenuEdit] = useState(false);
    const [tabMenuStatus,setTabMenuStatus ]= useState({
        isProfileOpen: true,
        isProfileEdit: false,
        isProfileAdd: false,
        isCategoryOpen: false,
        isCategoryEdit: false,
        isCategoryAdd: false,
        isUserOpen: false,
        isUserEdit: false,
        isUserAdd: false,
        isMenuOpen: false,
        isMenuEdit: false,
        isMenuAdd: false,
        isOrderOpen: false,
        isOrderEdit: false,
        isOrderAdd: false
    })

	const value = {
        tabMenuStatus,
        setTabMenuStatus ,
		isProfile,
        isUsers,
		isCategory,
        isMenu,
        isOrders,
        isAddMenu,
        isMenuEdit,

        setIsProfile,
        setIsUsers,
        setIsCategory,
        setIsMenu,
        setIsOrders,
        setIsMenuEdit,
        setIsAddMenu,
        

		// success,
		// setSuccess,
	};

	return (
		<GeneralContext.Provider value={value}>
			{props.children}
		</GeneralContext.Provider>
	);
};

export default GenneralProvider;