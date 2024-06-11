import { getTimesArr } from '@/shared/libs';
import { Dayjs } from 'dayjs';
import { useStateSelector } from '@/app/store';
import { Event, eventByDate } from '@/entities/event';
import { isEventExist } from '../libs/isEventExist';

import { getEventsIntime, getTopForWrapperEvents } from '../libs';
import style from './calendar.module.scss';

interface TimeCelLs {
	date: Dayjs;
}

export const TimeCells = ({ date }: TimeCelLs) => {
	const eventsInDay = useStateSelector((s) => eventByDate(s, date));

	return (
		<div className={style.timeCols}>
			{getTimesArr(60, 24).map((timeOfCell, ind) => (
				<div key={ind} className={style.timeCell}>
					<div
						key={timeOfCell}
						className={style.eventsWrapper}
						style={{
							top: getTopForWrapperEvents(eventsInDay, timeOfCell) + 'px',
						}}
					>
						{eventsInDay.length
							? eventsInDay.map((event) => {
									if (isEventExist(event!, timeOfCell)) {
										return (
											<Event
												relativeTop={getTopForWrapperEvents(
													eventsInDay,
													timeOfCell
												)}
												countEvents={
													getEventsIntime(eventsInDay, timeOfCell).length
												}
												key={event.id}
												date={event.date}
												title={event.title}
												time={event.time}
												calendar={event.calendar}
												isForAllDay={event.isForAllDay}
												description={event.description}
											/>
										);
									}
								})
							: null}
					</div>
				</div>
			))}
		</div>
	);
};
