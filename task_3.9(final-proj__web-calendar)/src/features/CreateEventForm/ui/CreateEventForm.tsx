import { Input } from '@/shared/ui-kit/Input';
import { useEffect } from 'react';

import { CheckBox } from '@/shared/ui-kit/CheckBox';
import { TextArea } from '@/shared/ui-kit/TextArea';
import { Select } from '@/shared/ui-kit/Select';
import { Button } from '@/shared/ui-kit/Button';

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
import { IFormCreateEventValues } from '@/shared/config/types';
import { useToast } from '@/shared/ui-kit/Toast';

import dayjs from 'dayjs';
import style from './create-event-form.module.scss';

interface Props {
	setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateEventForm({ setModalState }: Props) {
	const dispatch = useAppDispatch();
	const toast = useToast();
	const methods = useForm<IFormCreateEventValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			startTime: '00:00 am',
			endTime: '00:00 am',
			isForAllDay: false,
			description: '',
			title: '',
			date: dayjs(),
		},
	});
	const {
		handleSubmit,
		formState: { errors },
		formState,
		getValues,
		register,
		reset,
		control,
	} = methods;
	console.log(dayjs().toDate().toDateString());
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
		setModalState(false);
		toast?.showToast(`Event ${data.title} was created`, 'success');
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState.isSubmitSuccessful, reset]);
	return (
		<FormProvider {...methods}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='title'
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							register={register}
							label='title'
							placeholder='Type your title for event...'
							icon='text-icon'
							labelText='Title'
							id='text'
							error={errors.title}
						/>
					)}
				/>

				<div className={style.timeDate}>
					<Controller
						name='date'
						control={control}
						defaultValue={getValues().date}
						render={({ field }) => (
							<DateField {...field} register={register} error={errors.date} />
						)}
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
						<CheckBox
							{...field}
							ref={field.ref}
							className={style.checkbox}
							label='All day'
						/>
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
