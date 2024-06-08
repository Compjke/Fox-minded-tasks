import { getTimesArr } from '@/shared/libs';
import { Dayjs } from 'dayjs';
import { useStateSelector } from '@/app/store';
import { Event, eventByDate } from '@/entities/event';
import { isEventExist } from '../libs/isEventExist';
import style from './calendar.module.scss';

interface TimeCelLs {
	date: Dayjs;
}

export const TimeCells = ({ date }: TimeCelLs) => {
	const event = useStateSelector((s) => eventByDate(s, date));
	
	return (
		<div className={style.timeCols}>
			{getTimesArr(60, 24).map((time) => (
				<div key={time} className={style.timeCell}>
					{event
						? isEventExist(event!, time) && (
								<Event
									date={event.date}
									title={event.title}
									time={event.time}
									calendar={event.calendar}
									isForAllDay={event.isForAllDay}
									description={event.description}
								/>
							)
						: null}
				</div>
			))}
		</div>
	);
};
