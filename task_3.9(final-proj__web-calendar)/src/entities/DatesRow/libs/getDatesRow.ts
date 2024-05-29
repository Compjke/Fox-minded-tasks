import { DISPLAY_COUNT_DAYS } from '@/shared/config/date';
import dayjs, { Dayjs } from 'dayjs';

export function getDaysBetweenCustom(
	start: Dayjs = dayjs(),
	step: 'prev' | 'next',
	end: number = DISPLAY_COUNT_DAYS
) {
	const range = [];
	let current = start;
	if (step === 'next') {
		for (let index = 0; index < end; index++) {
			range.push(current);
			current = current.add(1, 'days');
		}
	} else
		for (let index = 0; index < end; index++) {
			range.unshift(current);
			current = current.subtract(1, 'days');
		}
	return range;
}
