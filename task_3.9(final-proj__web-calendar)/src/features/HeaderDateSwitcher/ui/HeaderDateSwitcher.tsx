import { useAppDispatch } from '@/app/store';
import { changeDateInHeader, useDate } from '@/entities/date';
import { Button } from '@/shared/ui-kit/Button';
import style from './change-date-header.module.scss';

export default function HeaderDateSwitcher() {
	const { selectedDate } = useDate();
	const dispatch = useAppDispatch();
	const handleChangeDate = (action: 'prevWeek' | 'nextWeek' | 'today') => {
		dispatch(changeDateInHeader(action));
	};

	return (
		<div className={style.root}>
			<Button
				appereance='primary'
				label='Today'
				onClick={() => handleChangeDate('today')}
			/>
			<div className={style.actions}>
				<Button
					className={style.btn}
					icon='arrow-left'
					onClick={() => handleChangeDate('prevWeek')}
				/>
				<Button
					className={style.btn}
					icon='arrow-right'
					onClick={() => handleChangeDate('nextWeek')}
				/>
			</div>
			<span className={style.date}>{selectedDate.format('MMMM YYYY')}</span>
		</div>
	);
}
