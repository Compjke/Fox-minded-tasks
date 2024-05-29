import { getDaysBetweenCustom } from '../libs/getDatesRow';
import { useDate } from '@/shared/models/date/selectors';
import clsx from 'clsx';

import style from './dates-row.module.scss';
import { useStateSelector } from '@/app/store';

export const DatesRow = () => {
	const date = useStateSelector((s) => s.daysOfWeekReducer.days);
	return (
		<div className={style.row}>
			{getDaysBetweenCustom(date, 'next').map((date, ind) => (
				<div key={ind} className={clsx(style.dayWeek)}>
					<span style={{ fontWeight: 700 }}>{date.date()}</span>
					<span>{date.format('ddd').toUpperCase()}</span>
				</div>
			))}
		</div>
	);
};
