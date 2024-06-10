import { useStateSelector } from '@/app/store';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { getDaysBetweenCustom } from '../libs/getDatesRow';
import { TimeCells } from './TimeCells';
import TimesCol from './TimesCol';
import style from './calendar.module.scss';

export default function Calnedar() {
	const selectedDate = useStateSelector((s) => s.dateReducer.selectedDate);

	return (
		<section className={style.calendar}>
			<TimesCol />
			<div className={style.row}>
				{getDaysBetweenCustom(selectedDate).map((date) => (
					<div key={date.toString()} className={style.col}>
						<div className={style.wrapper} key={date.day()}>
							<div
								className={clsx(
									style.dayWeek,
									date.toDate().toDateString() ===
										dayjs().toDate().toDateString() && style.today
								)}
							>
								<span style={{ fontWeight: 700 }}>{date.date()}</span>
								<span className={style.day}>
									{date.format('ddd').toUpperCase()}
								</span>
							</div>
						</div>
						<TimeCells date={date} />
					</div>
				))}
			</div>
		</section>
	);
}
