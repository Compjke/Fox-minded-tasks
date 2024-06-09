import { Input } from '@/shared/ui-kit/Input';
import { useEffect } from 'react';

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
import { schema } from '../model/yupSchema';
import { useAppDispatch, useStateSelector } from '@/app/store';
import { addNewEvent } from '@/entities/event/model/eventSlice';
import { DateField } from './DateField';
import style from './create-event-form.module.scss';

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
		formState,
		getValues,
		register,
		reset,
		watch,
		control,
	} = methods;
	console.log(errors);
	const calendars = useStateSelector((s) => s.calendarReducer);
	const onSubmit: SubmitHandler<IFormCreateEventValues> = (data) => {
		console.log(data);
		dispatch(
			addNewEvent({
				title: data.title,
				calendar: data.calendar,
				date: data.date,
				description: data.description,
				isForAllDay: data.isForAllDay!,
				time: {
					start: data.startTime,
					end: data.endTime,
				},
			})
		);
	};
	console.log(watch('date'));
	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState.isSubmitSuccessful, reset]);
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
					<DateField
						control={control}
						register={register}
						error={errors.date}
					/>
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
