import { RootStore } from '@/app/store';
import { ICalendar } from '@/entities/calendar';

import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

export interface ITimeEvent {
	start: string;
	end: string;
}

export interface IEvent {
	id?: string;
	title: string;
	date: Dayjs;
	time: ITimeEvent;
	isForAllDay: boolean;
	calendar: ICalendar; //! Rewrite!
	description: string;
}

const init: IEvent[] = [
	{
		id: '1',
		calendar: {
			label: 'Personal',
			color: '#397e49',
			id: '#397e49',
			isDefault: true,
		},
		date: dayjs(),
		time: {
			start: '00:00 am',
			end: '01:30 am',
		},
		description: 'Test-2 for all day',
		isForAllDay: false,
		title: 'for all day',
	},
	{
		id: '2',
		calendar: {
			label: 'Calendar-2',
			color: '#439bdf',
			id: '#439bdf',
			isDefault: false,
		},
		date: dayjs().add(1, 'days'),
		time: {
			start: '00:30 pm',
			end: '03:15 pm',
		},
		description: 'Test-2 task text',
		isForAllDay: false,
		title: 'Very long very long very  long long long title',
	},
];

const eventSlice = createSlice({
	name: 'event',
	initialState: init,
	reducers: {
		addNewEvent: (state, action: PayloadAction<IEvent>) => {
			state.push(action.payload);
		},
	},
});

export const { addNewEvent } = eventSlice.actions;

export const eventByDate = createSelector(
	[(state: RootStore) => state.eventReducer, (_, date: Dayjs) => date],

	(events, date) => {
		// console.log('memoized selector ran');

		return events.filter(
			(event) =>
				dayjs(event.date).toDate().toDateString() ===
				date.toDate().toDateString()
		);
	}
);

export default eventSlice.reducer;
