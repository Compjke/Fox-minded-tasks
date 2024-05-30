import { useAppDispatch } from '@/app/store';
import {
	changeDateInSmall,
	useDate,
	setSelectedDateInSmall,
} from '@/entities/date';
import { DatePicker } from '@/shared/ui-kit/DatePicker';
import { Dayjs } from 'dayjs';
import { MouseEventHandler } from 'react';

export const PickDateInDatePicker = () => {
	const { date, selectedDate } = useDate();
	const dispatch = useAppDispatch();

	const handleChangheMonth: MouseEventHandler = (e) => {
		const action = e.currentTarget.attributes.datatype.value;
		if (action === 'prev') {
			dispatch(changeDateInSmall(date.month(date.month() - 1)));
		} else {
			dispatch(changeDateInSmall(date.month(date.month() + 1)));
		}
	};

	const handleDatePick = (date: Dayjs) => {
		dispatch(setSelectedDateInSmall(date));
	};
	return (
		<DatePicker
			date={date}
			onDateChange={handleChangheMonth}
			selectedDate={selectedDate}
			onDatePick={handleDatePick}
		/>
	);
};

export default PickDateInDatePicker;
