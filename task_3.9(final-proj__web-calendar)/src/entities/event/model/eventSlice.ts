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
	date: string;
	time: ITimeEvent;
	isForAllDay: boolean;
	calendar: any; //! Rewrite!
	description: string;
}

const init: IEvent[] = [
	{
		id: '1',
		calendar: '#16AF6E',
		date: 'Sunday, June, 9',
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
		calendar: '#B8C42F',
		date: 'Monday, June, 10',
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
		const res: IEvent[] = [];
		events.map(
			(event) => {
				// console.log(dayjs(event.date));
				// console.log(date.format('dddd, MMMM, D'));
				if (event.date === date.format('dddd, MMMM, D')) {
					res.push(event);
				}
				// console.log(res);
			}
			// (event) =>
			// 	dayjs(event.date).toDate().toDateString() ===
			// 	date.toDate().toDateString()
		);
		return res;
	}
);

export default eventSlice.reducer;
