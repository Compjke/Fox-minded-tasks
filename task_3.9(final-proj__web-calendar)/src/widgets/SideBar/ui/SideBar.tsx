import { DatePickerFeature } from '@/features/DatePicker/ui';
import { Button } from '@/shared/ui-kit/Button';
import { useState } from 'react';
import { Calendars } from './Calendars';
import { CreateEventFeature } from '@/features/EventFeatures/ui';
import style from './sidebar.module.scss';

export const SideBar = () => {
	const [isModalOpen, setisModalOpen] = useState(false);

	return (
		<aside className={style.sidebar}>
			<CreateEventFeature
				isModalOpen={isModalOpen}
				setisModalOpen={setisModalOpen}
			/>
			<Button
				label='Create event'
				icon='plus'
				appereance='primary'
				className={style.button}
				onClick={() => setisModalOpen(true)}
			/>
			<DatePickerFeature />

			<Calendars />
		</aside>
	);
};
