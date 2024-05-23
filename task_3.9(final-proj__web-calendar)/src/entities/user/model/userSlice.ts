import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from './user.types';

const init: IUser = {
	displayName: null,
	email: null,
	isAuthenfication: false,
	accessToken: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState: init,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<Omit<IUser, 'isAuthenfication'>>
		) => {
			const { displayName, email, accessToken } = action.payload;
			if (displayName && email) {
				state.displayName = displayName;
				state.email = email;
				state.accessToken = accessToken;
				state.isAuthenfication = true;
			}
		},
		resetUser: () => init,
	},
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
