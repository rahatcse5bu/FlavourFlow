'use client';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
	transactions: [],
	// success: true,
});

const UserProvider = (props) => {
	const isLoggedSaved = JSON.parse(localStorage.getItem('isLogged')) || [];
	// const savedTransaction =  [];
	// console.log('test'+JSON.stringify(localStorage.getItem('transactions')))
	const [isLogged, setLogged] = useState(isLoggedSaved);
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
localStorage.setItem('isLogged',JSON.stringify(isLogged))
},[isLogged]);

	// const [success, setSuccess] = useState(true);

	const value = {
		isLogged,
		setLogged,
		// success,
		// setSuccess,
	};

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;