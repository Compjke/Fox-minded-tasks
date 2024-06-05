import { RootStore } from '@/app/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';
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
	forAllDay: boolean;
	calendar: any; //! Rewrite!
	description: string;
}

const init: IEvent[] = [
	{
		calendar: '#9F2957',
		date: dayjs(),
		time: {
			start: '00:15 am',
			end: '01:00 am',
		},
		description: 'Test task text',
		forAllDay: false,
		title: 'Test title',
	},
	{
		calendar: '#16AF6E',
		date: dayjs().add(1, 'days'),
		time: {
			start: '02:30 am',
			end: '05:00 am',
		},
		description: 'Test-2 task text',
		forAllDay: false,
		title: 'Test-2 title',
	},
	{
		calendar: '#B8C42F',
		date: dayjs().add(2, 'days'),
		time: {
			start: '12:30 pm',
			end: '22:15 pm',
		},
		description: 'Test-2 task text',
		forAllDay: false,
		title: 'Very long very long very  long long long title',
	},
];

const eventSlice = createSlice({
	name: 'event',
	initialState: init,
	reducers: {},
});

// export const {} = eventSlice.actions

export const eventByDate = createSelector(
	[(state: RootStore) => state.eventReducer, (_, date) => date],

	(events, date) => {
		// console.log('memoized selector ran');
		return events.find(
			(event) =>
				event.date.toDate().toDateString() === date.toDate().toDateString()
		);
	}
);

export default eventSlice.reducer;
