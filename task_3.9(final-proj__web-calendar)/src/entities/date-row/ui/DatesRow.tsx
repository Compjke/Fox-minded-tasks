import { useStateSelector } from '@/app/store';
import { getDaysBetweenCustom } from '../libs/getDatesRow';
import dayjs from 'dayjs';
import clsx from 'clsx';
import style from './dates-row.module.scss';

export const DatesRow = () => {
	const selectedDate = useStateSelector((s) => s.dateReducer.selectedDate);
	return (
		<div className={style.row}>
			{getDaysBetweenCustom(selectedDate).map((date) => (
				<div className={style.wrapper} key={date.day()}>
					<div
						className={clsx(
							style.dayWeek,
							date.toDate().toDateString() ===
								dayjs().toDate().toDateString() && style.today
						)}
					>
						<span style={{ fontWeight: 700 }}>{date.date()}</span>
						<span>{date.format('ddd').toUpperCase()}</span>
					</div>
				</div>
			))}
		</div>
	);
};
