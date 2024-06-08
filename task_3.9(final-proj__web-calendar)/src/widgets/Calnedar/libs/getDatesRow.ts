import { DISPLAY_COUNT_DAYS } from '@/shared/config/date';
import dayjs, { Dayjs } from 'dayjs';


export function getDaysBetweenCustom(
	start: Dayjs = dayjs(),
	end: number = DISPLAY_COUNT_DAYS
) {
	const range = [];
	let current = start;

	for (let index = 0; index < end; index++) {
		range.push(current);
		current = current.add(1, 'days');
	}
	return range;
}
