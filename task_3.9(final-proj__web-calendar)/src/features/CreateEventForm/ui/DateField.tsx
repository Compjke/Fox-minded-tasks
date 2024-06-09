import { IFormCreateEventValues } from '@/shared/config/types';
import { DatePicker } from '@/shared/ui-kit/DatePicker';
import { Input } from '@/shared/ui-kit/Input';

import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { ErrorOption, UseFormRegister } from 'react-hook-form';
import style from './create-event-form.module.scss';

interface Props {
	register: UseFormRegister<IFormCreateEventValues>;
	error: ErrorOption | undefined;
}

export const DateField = ({ register, error }: Props) => {
	const [isDatePicking, setIsDatePicking] = useState(false);
	const [pickedDate, setPickedDate] = useState<Dayjs>(dayjs());

	return (
		<div className={style.date}>
			<Input
				register={register}
				label='date'
				id='date'
				labelText='Date'
				icon='clock'
				value={pickedDate?.format('dddd, MMMM, D')}
				onClick={() => setIsDatePicking(true)}
				error={error}
				readOnly
			/>
			{isDatePicking && (
				<DatePicker
					onDatePick={(date) => {
						setIsDatePicking(false);
						setPickedDate(date);
					}}
					selectedDate={pickedDate}
					className={style.datePicker}
				/>
			)}
		</div>
	);
};
