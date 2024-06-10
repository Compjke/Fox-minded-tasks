import { Dayjs } from 'dayjs';

export interface IFormCreateEventValues {
	title: string;
	description: string;
	date: Dayjs;
	startTime: string;
	endTime: string;
	isForAllDay?: boolean;
	calendar: string;
}
