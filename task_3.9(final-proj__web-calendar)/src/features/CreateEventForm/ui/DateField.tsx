import { IFormCreateEventValues } from '@/shared/config/types';
import { DatePicker } from '@/shared/ui-kit/DatePicker';
import { Input } from '@/shared/ui-kit/Input';

import { LegacyRef, forwardRef, useState } from 'react';
import { ErrorOption, UseFormRegister } from 'react-hook-form';
import style from './create-event-form.module.scss';

interface Props {
	register: UseFormRegister<IFormCreateEventValues>;
	error: ErrorOption | undefined;
}

export const DateField = forwardRef(
	(
		{ register, error, ...props }: Props,
		ref: LegacyRef<HTMLInputElement> | undefined
	) => {
		const [isDatePicking, setIsDatePicking] = useState(false);
		
		return (
			<div className={style.date}>
				<Input
					ref={ref}
					register={register}
					label='date'
					id='date'
					labelText='Date'
					icon='clock'
					value={props.value.format('dddd, MMMM, D')}
					onClick={() => setIsDatePicking(true)}
					error={error}
					readOnly
				/>
				{isDatePicking && (
					<DatePicker
						onDatePick={(date) => {
							setIsDatePicking(false);
							props?.onChange(date);
						}}
						selectedDate={props.value}
						className={style.datePicker}
					/>
				)}
			</div>
		);
	}
);
