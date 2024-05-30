import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface SelectedDate {
	selectedDate: dayjs.Dayjs;
}

const init: SelectedDate = {
	selectedDate: dayjs(),
};

const selectedDateSlice = createSlice({
	name: 'selectedDate',
	initialState: init,
	reducers: {
		setSelectedDateInSmall: (state, action) => {
			state.selectedDate = action.payload;
		},
		changeDateInHeader: (
			state,
			action: PayloadAction<'prevWeek' | 'nextWeek' | 'today'>
		) => {
			if (action.payload === 'prevWeek') {
				state.selectedDate = state.selectedDate.subtract(7, 'days');
			} else if (action.payload === 'today') {
				state.selectedDate = dayjs();
			} else {
				state.selectedDate = state.selectedDate.add(7, 'days');
			}
		},
	},
});

export const { setSelectedDateInSmall, changeDateInHeader } =
	selectedDateSlice.actions;

export default selectedDateSlice.reducer;
