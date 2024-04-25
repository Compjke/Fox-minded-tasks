import { createSlice, nanoid } from '@reduxjs/toolkit';

interface ChatState {
	messages: [];
}

const initialState: ChatState = {
	messages: [],
};

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		addMessage: {
			reducer(state, action) {
				// console.log('add message');
				state.messages.push(action.payload);
			},
			prepare({ message, userName }) {
				return {
					payload: {
						date: new Date().toISOString(),
						id: nanoid(),
						message,
						userName,
					},
				};
			},
		},
		clearChat: (state) => {
			state.messages = [];
		},
	},
});

export const { addMessage, clearChat } = chatSlice.actions;

export default chatSlice.reducer;
