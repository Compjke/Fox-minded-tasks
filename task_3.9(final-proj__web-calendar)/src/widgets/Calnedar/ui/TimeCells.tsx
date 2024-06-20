import { getTimesArr } from '@/shared/libs';
import { Dayjs } from 'dayjs';
import { useStateSelector } from '@/app/store';
import { Event, eventByDate } from '@/entities/event';
import { isEventExist } from '../libs/isEventExist';

import { getEventsIntime, getTopForWrapperEvents } from '../libs';
import { memo, useMemo } from 'react';

import style from './calendar.module.scss';

interface TimeCelLs {
	date: Dayjs;
	indDate: number;
}

export const TimeCells = memo(({ date, indDate }: TimeCelLs) => {
	const eventsInDay = useStateSelector((s) => eventByDate(s, date));
	const allCalendars = useStateSelector((s) => s.calendarReducer.allCalendars);

	const activeCalendars = useStateSelector(
		(s) => s.calendarReducer.selectedCalendars
	);

	const filteredEvents = useMemo(
		() =>
			eventsInDay.filter((event) => activeCalendars.includes(event.calendarId)),
		[activeCalendars, eventsInDay]
	);

	return (
		<div className={style.timeCols}>
			{getTimesArr(60, 24).map((timeOfCell, ind) => (
				<div
					key={timeOfCell + date.toDate().toISOString()}
					className={style.timeCell}
					data-time={indDate === 0 && ind !== 0 ? timeOfCell : ''}
				>
					<div
						key={ind}
						className={style.eventsWrapper}
						style={{
							top: getTopForWrapperEvents(eventsInDay, timeOfCell) + 'px',
						}}
					>
						{filteredEvents.length
							? filteredEvents
									.filter((event) => isEventExist(event!, timeOfCell))
									.map((event) => {
										const calendar = allCalendars.find(
											(c) => c.id === event.calendarId
										);

										return (
											<Event
												relativeTop={getTopForWrapperEvents(
													eventsInDay,
													timeOfCell
												)}
												countEvents={
													getEventsIntime(eventsInDay, timeOfCell).length
												}
												id={event.id}
												color={calendar?.color as string}
												key={event.id}
												date={event.date}
												title={event.title}
												time={event.time}
												calendarId={event.calendarId}
												isForAllDay={event.isForAllDay}
												description={event.description}
											/>
										);
									})
							: null}
					</div>
				</div>
			))}
		</div>
	);
});
