import { calcStyles } from '../libs/calculateStyles';
import { IEvent } from '../model/eventSlice';
import style from './events.module.scss';
export default function Event({
	calendar,
	forAllDay,
	time,
	date,
	title,
}: Exclude<IEvent, 'description'>) {
	const { top, height, bgColor } = calcStyles(time.start, time.end, calendar);

	return (
		<div
			className={style.event}
			style={{
				backgroundColor: bgColor,
				top,
				height,
				borderLeft: `4px solid ${calendar}`,
			}}
		>
			<h4 className={style.title}>{title}</h4>
			<div className={style.time}>
				{time?.start} - {time?.end}
			</div>
		</div>
	);
}
