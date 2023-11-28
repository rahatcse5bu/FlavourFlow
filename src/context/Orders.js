'use client';
import { createContext, useState } from "react";

export const OrderContext = createContext({
	data: [],
	// success: true,
});

const OrderProvider = (props) => {

	const [isEditOrder, setIsEditOrder] = useState(false);

	const value = {
		isEditOrder,
		setIsEditOrder,
	};

	return (
		<OrderContext.Provider value={value}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderProvider;