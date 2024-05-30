import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user';

import { rememberReducer, rememberEnhancer } from 'redux-remember';
import { dateReducer } from '@/entities/date';

const rememberedKeys = ['userReducer'];

const reducers = {
	userReducer,
	dateReducer,
};

const reducer = rememberReducer(reducers);

export const store = configureStore({
	reducer,
	enhancers: (getDefEnh) =>
		getDefEnh().concat(rememberEnhancer(window.localStorage, rememberedKeys)),
});
2;
