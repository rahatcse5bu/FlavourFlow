'use client';
import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext({
	data: [],
	// success: true,
});

const GenneralProvider = (props) => {
	// const isProfileSaved = JSON.parse(localStorage.getItem('isProfile')) || true;
	// const isCategorySaved = JSON.parse(localStorage.getItem('isCategory')) || false;
	// const isMenuSaved = JSON.parse(localStorage.getItem('isMenu')) || false;
	// const isUsersSaved = JSON.parse(localStorage.getItem('isUsers')) || false;
	// const savedTransaction =  [];
	// console.log('test'+JSON.stringify(localStorage.getItem('transactions')))
	const [isProfile, setIsProfile] = useState(true);
	const [isCategory, setIsCategory] = useState(false);
	const [isMenu, setIsMenu] = useState(false);
	const [isUsers, setIsUsers] = useState(false);
	// console.log('9999'+JSON.parse(JSON.stringify(transactions.savedData)))
	// const [transactions, addTransactions] = useState([
	// 	// {
	// 	// 	name: "biscuits",
    //     //     amount :234.23
	// 	// },
	// 	// {
	// 	// 	name: "tea",
    //     //     amount :2.123
	// 	// },
	// ]);
useEffect(()=>{
localStorage.setItem('isProfile',JSON.stringify(isProfile))
},[isProfile]);
useEffect(()=>{
localStorage.setItem('isCategory',JSON.stringify(isCategory))
},[isCategory]);
useEffect(()=>{
localStorage.setItem('isMenu',JSON.stringify(isMenu))
},[isMenu]);
useEffect(()=>{
localStorage.setItem('isUsers',JSON.stringify(isUsers))
},[isUsers]);
console.log(isProfile)
	// const [success, setSuccess] = useState(true);

	const value = {
		isProfile,
		isCategory,
        isMenu,
        isUsers,
        setIsProfile,
        setIsCategory,
        setIsMenu,
        setIsUsers
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