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
	const eventsInDay = useStateSelector((s) => eventByDate(s, date));

	return (
		<div className={style.timeCols}>
			{getTimesArr(60, 24).map((time, ind) => (
				<div key={ind} className={style.timeCell}>
					{eventsInDay.length
						? eventsInDay.map((event) => {
								if (isEventExist(event!, time)) {
									return (
										<Event
											date={event.date}
											title={event.title}
											time={event.time}
											calendar={event.calendar}
											isForAllDay={event.isForAllDay}
											description={event.description}
											key={event.id}
										/>
									);
								}
							})
						: null}
				</div>
			))}
		</div>
	);
};
