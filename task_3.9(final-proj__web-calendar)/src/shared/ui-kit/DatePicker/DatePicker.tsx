import { generateDate, months } from '@/shared/libs/calendar';
import { MouseEventHandler } from 'react';

import { useAppDispatch } from '@/app/store';
import { changeDateInSmall,setSelectedDateInSmall } from '@/shared/models';
import { Icon } from '../Icon';
import clsx from 'clsx';
import style from './date_picker.module.scss';
import { useDate } from '@/shared/models/date/selectors';


const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

interface IDatePicker {
	disableHighlightToday?: boolean;
	canPickToday?: boolean;
}

export const DatePicker = ({
	disableHighlightToday = false,
	canPickToday = false,
}: IDatePicker) => {
	const { date, selectedDate } = useDate();
	const dispatch = useAppDispatch();

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		const action = e.currentTarget.attributes.datatype.value;
		if (action === 'prev') {
			dispatch(changeDateInSmall(date.month(date.month() - 1)));
		} else {
			dispatch(changeDateInSmall(date.month(date.month() + 1)));
		}
	};
	return (
		<div data-testid='date-picker' className={style.container}>
			<div className={style.panel}>
				<h3 className={style.yearAndMonth}>
					{months[date.month()]} {date.year()}
				</h3>
				<div className={style.panelActions}>
					<button
						type='button'
						onClick={handleClick}
						datatype='prev'
						className={style.panelBtn}
					>
						<Icon name='arrow-left' className={style.arrow} />
					</button>
					{canPickToday && (
						<button
							className={style.todayBtn}
							onClick={() => {
								dispatch(setSelectedDateInSmall(date));
							}}
						>
							Today
						</button>
					)}
					<button
						type='button'
						onClick={handleClick}
						datatype='next'
						className={style.panelBtn}
					>
						<Icon name='arrow-right' className={style.arrow} />
					</button>
				</div>
			</div>
			<div className={style.days}>
				{DAYS.map((d, ind) => (
					<span key={ind}>{d}</span>
				))}
			</div>
			<div className={style.calendar}>
				{generateDate(date.month(), date.year()).map(
					({ date, currentMonth, today }, ind) => {
						return (
							<span
								data-testid='date'
								onClick={() => {
									dispatch(setSelectedDateInSmall(date));
								}}
								key={ind}
								className={clsx(
									style.date,
									!currentMonth && style.illuminated,
									!disableHighlightToday && today && style.today,

									selectedDate?.toDate().toDateString() ===
										date.toDate().toDateString() && style.selected
								)}
							>
								{date.date()}
							</span>
						);
					}
				)}
			</div>
		</div>
	);
};
