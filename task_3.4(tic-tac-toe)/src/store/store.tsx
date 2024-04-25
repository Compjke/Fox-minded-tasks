import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import game from './gameSlice';
import chat from './chatSlice';
export const store = configureStore({
	reducer: {
		game,
		chat,
	},
	devTools: true,
});

// export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootStore = ReturnType<typeof store.getState>;
