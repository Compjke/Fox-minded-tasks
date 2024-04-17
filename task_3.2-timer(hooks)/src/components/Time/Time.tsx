import { FC, useEffect, useRef } from 'react';
import { ITime } from '../../interfaces/time';
import style from './Timer.module.css';

export const Time: FC<ITime> = ({ currentTime }) => {
	const timeRef = useRef(0);

	useEffect(() => {
		timeRef.current += 1;
	}, [currentTime]);

	const formatTime = (s: number): string => {
		const seconds = ('0' + Math.floor((s / 1000) % 60)).slice(-2),
			minutes = ('0' + Math.floor((s / 1000 / 60) % 60)).slice(-2);
		return `${minutes}:${seconds}`;
	};
  
	return (
		<>
			<div className={style.time}>{formatTime(currentTime)}</div>
			<div>Number of time component renders: {timeRef.current}</div>
		</>
	);
};
0;
