import { FC, useMemo, useRef } from 'react';

import style from './Timer.module.css';

interface IProps {
	currentTime: number;
}

export const Time: FC<IProps> = ({ currentTime }) => {
	const timeRef = useRef(0);
	timeRef.current += 1;

	const formatTime = useMemo(
		() =>
			(s: number): string => {
				const seconds = ('0' + Math.floor((s / 1000) % 60)).slice(-2),
					minutes = ('0' + Math.floor((s / 1000 / 60) % 60)).slice(-2);
				return `${minutes}:${seconds}`;
			},
		[]
	);

	return (
		<>
			<div className={style.time}>{formatTime(currentTime)}</div>
			<div>Number of time component renders: {timeRef.current}</div>
		</>
	);
};
0;
