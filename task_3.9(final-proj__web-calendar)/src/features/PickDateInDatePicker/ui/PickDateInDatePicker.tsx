import { useAppDispatch } from '@/app/store';
import { useDate, setSelectedDateInSmall } from '@/entities/date';
import { DatePicker } from '@/shared/ui-kit/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { MouseEventHandler, useState } from 'react';

export const PickDateInDatePicker = () => {
	const { selectedDate } = useDate();
	
	const dispatch = useAppDispatch();


	const handleDatePick = (date: Dayjs) => {
		dispatch(setSelectedDateInSmall(date));
	};
	return (
		<DatePicker
			selectedDate={selectedDate}
			onDatePick={handleDatePick}
		/>
	);
};

export default PickDateInDatePicker;
