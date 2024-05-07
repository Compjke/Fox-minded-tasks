import { generateDate, months } from '@/utils/calendar';
import style from './date_picker.module.scss';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { MouseEventHandler, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const currentDate = dayjs();

export const DatePicker = () => {
	const [date, setDate] = useState(currentDate);
	const [selectedDate, setSelectedDate] = useState(currentDate);

	console.log(selectedDate.toDate().toDateString());

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		const action = e.currentTarget.attributes.datatype.value;
		if (action === 'prev') {
			setDate(date.month(date.month() - 1));
		} else {
			setDate(date.month(date.month() + 1));
		}
	};
	return (
		<div className={style.container}>
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
						<ArrowLeftIcon className={style.arrow} />
					</button>
					<button
						className={style.todayBtn}
						onClick={() => {setDate(currentDate) ; setSelectedDate(currentDate)}}
					>
						Today
					</button>
					<button
						type='button'
						onClick={handleClick}
						datatype='next'
						className={style.panelBtn}
					>
						<ArrowRightIcon className={style.arrow} />
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
								onClick={() => setSelectedDate(date)}
								key={ind}
								className={clsx(
									style.date,
									!currentMonth && style.illuminated,
									today && style.today,
									selectedDate.toDate().toDateString() ===
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