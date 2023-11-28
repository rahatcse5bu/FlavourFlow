'use client';
import { createContext, useState } from "react";

export const CategoryContext = createContext({
	data: [],
	// success: true,
});

const CategoryProvider = (props) => {

	const [isEditCategory, setIsEditCategory] = useState(false);

	const value = {
		isEditCategory,
		setIsEditCategory,
	};

	return (
		<CategoryContext.Provider value={value}>
			{props.children}
		</CategoryContext.Provider>
	);
};

export default CategoryProvider;