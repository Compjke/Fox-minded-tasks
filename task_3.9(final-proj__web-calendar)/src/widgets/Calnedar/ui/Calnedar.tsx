import { DatesRow } from '@/entities/date-row/ui/DatesRow';
import style from './calendar.module.scss';
import TimesCol from './TimesCol';

export default function Calnedar() {
	return (
		<section className={style.calendar}>
			<TimesCol />
			<DatesRow />
		</section>
	);
}
