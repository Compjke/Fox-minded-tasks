import { RootStore } from '@/app/store';

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
	calendar: any; //! Rewrite!
	description: string;
}

const init: IEvent[] = [
	{
		calendar: '#16AF6E',
		date: dayjs().add(1, 'days'),
		time: {
			start: '00:00 am',
			end: '24:00 pm',
		},
		description: 'Test-2 for all day',
		isForAllDay: true,
		title: 'for all day',
	},
	{
		calendar: '#B8C42F',
		date: dayjs().add(2, 'days'),
		time: {
			start: '12:30 pm',
			end: '22:15 pm',
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
	[(state: RootStore) => state.eventReducer, (_, date) => date],

	(events, date) => {
		// console.log('memoized selector ran');
		return events.find(
			(event) =>
				dayjs(event.date).toDate().toDateString() ===
				date.toDate().toDateString()
		);
	}
);

export default eventSlice.reducer;
