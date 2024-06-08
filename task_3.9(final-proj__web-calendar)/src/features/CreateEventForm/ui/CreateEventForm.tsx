import { Input } from '@/shared/ui-kit/Input';
import { useState } from 'react';
import { DatePicker } from '@/shared/ui-kit/DatePicker';
import { CheckBox } from '@/shared/ui-kit/CheckBox';
import { TextArea } from '@/shared/ui-kit/TextArea';
import { Select } from '@/shared/ui-kit/Select';
import { Button } from '@/shared/ui-kit/Button';
import { IFormCreateEventValues } from '@/shared/config/types';
import {
	Controller,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import { TestTimepicker } from '@/shared/ui-kit/TimePicker/TimePicker';
import { yupResolver } from '@hookform/resolvers/yup';

import dayjs, { Dayjs } from 'dayjs';
import style from './create-event-form.module.scss';
import { schema } from '../model/yupSchema';
import { useAppDispatch, useStateSelector } from '@/app/store';
import { addNewEvent } from '@/entities/event/model/eventSlice';

export default function CreateEventForm() {
	const dispatch = useAppDispatch();
	const methods = useForm<IFormCreateEventValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			startTime: '00:00 am',
			endTime: '00:00 am',
			isForAllDay: false,
		},
	});
	const {
		handleSubmit,
		formState: { errors },
		getValues,
		register,
		reset,
		control,
	} = methods;
	const [isDatePicking, setIsDatePicking] = useState(false);
	const [pickedDate, setPickedDate] = useState<Dayjs>(dayjs());
	const calendars = useStateSelector((s) => s.calendarReducer);
	const onSubmit: SubmitHandler<IFormCreateEventValues> = (data) => {
		console.log(data);
		console.log(dayjs(data.date).set('y', new Date().getFullYear()));
		dispatch(
			addNewEvent({
				title: data.title,
				calendar: data.calendar,
				date: dayjs(data.date).set('y', new Date().getFullYear()),
				description: data.description,
				isForAllDay: data.isForAllDay!,
				time: {
					start: data.startTime,
					end: data.endTime,
				},
			})
		);
		reset();
	};

	return (
		<FormProvider {...methods}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					label='title'
					placeholder='Type your title for event...'
					icon='text-icon'
					labelText='Title'
					id='text'
					error={errors.title}
				/>
				<div className={style.timeDate}>
					<div className={style.date}>
						<Input
							register={register}
							label='date'
							id='date'
							labelText='Date'
							icon='clock'
							value={pickedDate?.format('dddd, MMMM, D') ?? ''}
							onClick={() => setIsDatePicking(true)}
							error={errors.date}
						/>
						{isDatePicking && (
							<DatePicker
								onDatePick={(date) => {
									setIsDatePicking(false);
									setPickedDate(date);
								}}
								selectedDate={dayjs()}
								className={style.datePicker}
							/>
						)}
					</div>

					<TestTimepicker
						controls={{ control, name: 'startTime' }}
						required
						defaultValue={getValues().startTime}
						labelText='Time'
						// error={errors.startTime}
					/>
					{'-'}
					<TestTimepicker
						controls={{ control, name: 'endTime' }}
						required
						defaultValue={getValues().endTime}
					/>
				</div>

				<Controller
					name='isForAllDay'
					control={control}
					render={({ field }) => (
						<CheckBox {...field} className={style.checkbox} label='All day' />
					)}
				/>

				<Select
					register={register}
					registerLabel='calendar'
					icon='calendar'
					label='Calendar'
					options={calendars}
				/>
				<TextArea
					register={register}
					registerLabel='description'
					label='Description'
					icon='description'
					error={errors.description}
				/>

				<Button className={style.submitBtn} appereance='primary' label='Save' />
			</form>
		</FormProvider>
	);
}
