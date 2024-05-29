import { createSlice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';


interface DaysOfWeek  {
   days : Dayjs.daysjs,
   
}


const daysOFWeekRowSLice = createSlice({
	name: 'days-of-week',
	initialState: {},
	reducers: {},
});
