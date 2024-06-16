import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user';

import { rememberReducer, rememberEnhancer } from 'redux-remember';
import { dateReducer } from '@/entities/date';
import { eventReducer } from '@/entities/event';
import { calendarReducer } from '@/entities/calendar';

const rememberedKeys = ['userReducer', 'eventReducer', 'calendarReducer'];

const reducers = {
	userReducer,
	dateReducer,
	eventReducer,
	calendarReducer,
};

const reducer = rememberReducer(reducers);

export const store = configureStore({
	reducer,
	enhancers: (getDefEnh) =>
		getDefEnh().concat(
			rememberEnhancer(window.localStorage, rememberedKeys, {
				prefix: 'state - ',
			})
		),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
2;
