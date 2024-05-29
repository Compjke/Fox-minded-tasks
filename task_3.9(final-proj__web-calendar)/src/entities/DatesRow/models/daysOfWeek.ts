import { createSlice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

interface DaysOfWeek {
	days: Dayjs;
}

const initialState: DaysOfWeek = {
	days: dayjs(),
};

const daysOFWeekRowSLice = createSlice({
	name: 'days-of-week',
	initialState,
	reducers: {
		setNextDaysOfWeek: (state, action) => {
			state.days = action.payload;
		},
		setPrevDaysOfWeek: (state, action) => {
			state.days = action.payload;
		},
	},
});

export const { setNextDaysOfWeek, setPrevDaysOfWeek } =
	daysOFWeekRowSLice.actions;

export default daysOFWeekRowSLice.reducer;
