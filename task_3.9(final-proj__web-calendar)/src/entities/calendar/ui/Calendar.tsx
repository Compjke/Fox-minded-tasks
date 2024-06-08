import { CheckBox } from '@/shared/ui-kit/CheckBox';
import { ICalendar } from '../model';
import style from './calendar.module.scss';

export default function Calendar({
	color,
	label,
}: Pick<ICalendar, 'color' | 'label'>) {
	return (
		<div className={style.calendar}>
			<CheckBox color={color} label={label} className={style.checkbox} />
		</div>
	);
}
