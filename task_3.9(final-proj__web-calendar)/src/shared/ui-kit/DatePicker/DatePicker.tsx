import { generateDate, months } from '@/shared/libs/calendar';
import { Icon } from '../Icon';
import clsx from 'clsx';
import style from './date_picker.module.scss';

import { Dayjs } from 'dayjs';
import { MouseEventHandler } from 'react';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

interface IDatePicker {
	disableHighlightToday?: boolean;
	canPickToday?: boolean;
	date: Dayjs;
	selectedDate: Dayjs;
	onDateChange: MouseEventHandler<HTMLButtonElement>;
	onDatePick: (date: Dayjs) => void;
}

export const DatePicker = ({
	disableHighlightToday = false,
	canPickToday = false,
	date,
	selectedDate,
	onDateChange,
	onDatePick,
}: IDatePicker) => {
	return (
		<div data-testid='date-picker' className={style.container}>
			<div className={style.panel}>
				<h3 className={style.yearAndMonth}>
					{months[date.month()]} {date.year()}
				</h3>
				<div className={style.panelActions}>
					<button
						type='button'
						onClick={onDateChange}
						datatype='prev'
						className={style.panelBtn}
					>
						<Icon name='arrow-left' className={style.arrow} />
					</button>
					{canPickToday && (
						<button className={style.todayBtn} onClick={onDateChange}>
							Today
						</button>
					)}
					<button
						type='button'
						onClick={onDateChange}
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
								onClick={() => onDatePick(date)}
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
