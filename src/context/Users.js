'use client';
import { createContext, useState } from "react";

export const DashboardUserContext = createContext({
	data: [],
	// success: true,
});

const DashboardUserProvider = (props) => {

	const [isEditUser, setIsEditUser] = useState(false);

	const value = {
		isEditUser,
		setIsEditUser,
	};

	return (
		<DashboardUserContext.Provider value={value}>
			{props.children}
		</DashboardUserContext.Provider>
	);
};

export default DashboardUserProvider;