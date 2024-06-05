import { getTimesArr } from '@/shared/libs';
import style from './calendar.module.scss';

const TimesCol = () => {
	return (
		<div className={style.times}>
			{getTimesArr(60, 24)
				.slice(1)
				.map((time) => (
					<span key={time} className={style.time}>
						{time}
					</span>
				))}
		</div>
	);
};

export default TimesCol;
