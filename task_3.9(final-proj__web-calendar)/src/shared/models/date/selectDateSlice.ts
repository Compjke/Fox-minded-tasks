import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface SelectedDate {
	date: dayjs.Dayjs;
	selectedDate: dayjs.Dayjs;
}

const init: SelectedDate = {
	date: dayjs(),
	selectedDate: dayjs(),
};

const selectedDateSlice = createSlice({
	name: 'selectedDate',
	initialState: init,
	reducers: {
		setSelectedDateInSmall: (state, action) => {
			state.selectedDate = action.payload;
		},
		changeDateInSmall: (state, action) => {
			state.date = action.payload;
		},
	},
});

export const { setSelectedDateInSmall, changeDateInSmall } = selectedDateSlice.actions;

export default selectedDateSlice.reducer;
