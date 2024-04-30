import { useEffect } from 'react';
import { getProducts, useAppDispatch, useStateSelector } from '@/store';

import { BarSpinner } from '@/ui-kit/Spinners';
// import { useLoaderData } from 'react-router-dom';
import { ProductList } from '@/components/ProductsList';

// export const getProducts_1 = async () => {
// 	try {
// 		const res = await fetch('https://dummyjson.com/products');

// 		if (!res.ok) {
// 			throw new Error('Server Error!');
// 		}

// 		const data = await res.json();

// 		return data;
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };

export const HomePage = () => {
	// const { products } = useLoaderData();
	// console.log(products);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const fetchStatus = useStateSelector((state) => state.products.status);

	const renderList = () => {
		if (fetchStatus === 'loading') {
			return <BarSpinner />;
		}

		if (fetchStatus === 'error') {
			return 'Error happened';
		}

		// return <ProductList products={products}/>;
		return <ProductList />;
	};
	return renderList();
};
