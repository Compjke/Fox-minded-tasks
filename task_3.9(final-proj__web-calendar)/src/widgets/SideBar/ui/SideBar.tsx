import { DatePickerFeature } from '@/features/DatePicker/ui';
import { Button } from '@/shared/ui-kit/Button';
import { useState } from 'react';
import { Modal } from '@/shared/ui-kit/Modal';
import { CreateEventForm } from '@/features/CreateEventForm';
import style from './sidebar.module.scss';
import { useStateSelector } from '@/app/store';
import { Calendars } from './Calendars';
import { ColorPicker } from '@/shared/ui-kit/ColorPicker';

export const SideBar = () => {
	const [isModalOpen, setisModalOpen] = useState(false);
	const calendars = useStateSelector((s) => s.calendarReducer);
	console.log(calendars);
	return (
		<aside className={style.sidebar}>
			<Modal
				title='Create event'
				isOpen={isModalOpen}
				onClose={() => setisModalOpen(false)}
			>
				<CreateEventForm />
			</Modal>
			<Button
				label='Create event'
				icon='plus'
				appereance='primary'
				className={style.button}
				onClick={() => setisModalOpen(true)}
			/>
			<DatePickerFeature />

			<Calendars calendars={calendars} />
	
		</aside>
	);
};
