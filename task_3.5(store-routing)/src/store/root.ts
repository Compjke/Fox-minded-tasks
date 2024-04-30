import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, orderInfoReducer } from './slices';

import { rememberReducer, rememberEnhancer } from 'redux-remember';

const rememberedKeys = ['products' , 'orderInfo'];

const reducers = {
	products: productsReducer,
	orderInfo: orderInfoReducer,
};

const reducer = rememberReducer(reducers);

export const store = configureStore({
	reducer,
	enhancers: (getDefEnh) =>
		getDefEnh().concat(rememberEnhancer(window.localStorage, rememberedKeys)),
});
2;
