import { colorsArr } from '@/shared/config';
import { createSlice } from '@reduxjs/toolkit';

export interface ICalendar {
	label: string;
	color: (typeof colorsArr)[number];
	isDefault: boolean;
}

const init: ICalendar[] = [
	{
		color: '#6c7ac4',
		label: 'Personal',
		isDefault: true,
	},
	{
		color: '#439bdf',
		label: 'Calendar-2',
		isDefault: false,
	},
	{
		color: '#16af6e',
		label: 'Calendar-3',
		isDefault: false,
	},
];

const calendarSlice = createSlice({
	name: 'calendar',
	initialState: init,
	reducers: {},
});

// export const {} = calendarSlice.actions

export default calendarSlice.reducer;
