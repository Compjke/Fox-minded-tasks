import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
		changeDateInHeader: (
			state,
			action: PayloadAction<'prevWeek' | 'nextWeek' | 'today'>
		) => {
			if (action.payload === 'prevWeek') {
				state.selectedDate = state.selectedDate.subtract(7, 'days');
				state.date = state.date.subtract(7, 'days');
			} else if (action.payload === 'today') {
				state.selectedDate = dayjs()
				state.date = dayjs();
			} else {
				state.selectedDate = state.selectedDate.add(7, 'days');
				state.date = state.date.add(7, 'days');
			}
		},
	},
});

export const { setSelectedDateInSmall, changeDateInSmall, changeDateInHeader } =
	selectedDateSlice.actions;

export default selectedDateSlice.reducer;
