import { DatesRow } from '@/entities/date-row/ui/DatesRow';
import style from './calendar.module.scss';

export default function Calnedar() {
	return (
		<div className={style.calendar}>
			<DatesRow />
		</div>
	);
}
