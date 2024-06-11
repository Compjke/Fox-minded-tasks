import { calcStyles } from '../libs/calculateStyles';
import { IEvent } from '../model/eventSlice';
import style from './events.module.scss';

interface Props {
	relativeTop: number;
	countEvents: number;
}

export default function Event({
	calendar,
	isForAllDay,
	time,
	date,
	title,
	relativeTop,
	countEvents,
}: IEvent & Props) {
	const { top, height, bgColor, maxWidth } = calcStyles(
		time.start,
		time.end,
		calendar.color,
		relativeTop,
		countEvents
	);

	return (
		<div
			className={style.event}
			style={{
				backgroundColor: bgColor,
				height,
				borderLeft: `4px solid ${calendar.color}`,
				top,
				maxWidth,
			}}
		>
			<h4 className={style.title}>{title}</h4>
			<div className={style.time}>
				{time?.start} - {time?.end}
			</div>
		</div>
	);
}
