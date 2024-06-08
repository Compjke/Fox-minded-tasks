import { Calendar, ICalendar } from '@/entities/calendar';
import { CreateCalendar } from '@/features/CreateCalendar';
import { Button } from '@/shared/ui-kit/Button';
import style from './sidebar.module.scss';

interface Props {
	calendars: ICalendar[];
}

export const Calendars = ({ calendars }: Props) => {
	return (
		<div className={style.calendars}>
			<div className={style.calendarsTop}>
				<h3 className={style.calendarsTitle}>My calendars</h3>
				<Button icon='plus' className={style.btn} />
			</div>
			<ul className={style.calendarsList}>
				{calendars.map(({ color, label }) => (
					<li className={style.calendarItem} key={label}>
						<Calendar color={color} label={label} />
					</li>
				))}
			</ul>
		</div>
	);
};
