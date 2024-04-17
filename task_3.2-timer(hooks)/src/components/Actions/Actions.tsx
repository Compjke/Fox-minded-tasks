import { memo, useCallback, useEffect, useRef } from 'react';
import { MyButton } from '../ui';
import style from './Actions.module.css';
import { IActions } from '../../interfaces/timer';

const ActionsC = ({ isRunning, onPlayPause, onResetTime }: IActions) => {
	// console.log('Actions');
	const actionRef = useRef(0);
	
	useEffect(() => {
		actionRef.current += 1;
	}, [isRunning]);

	const handleClickPlay = () => {
		onPlayPause(true);
	};
	const handleClickPause = () => {
		onPlayPause(false);
	};
	const handleClickReset = () => {
		onPlayPause(false);
		onResetTime(0);
	};

	return (
		<div className={style.actions}>
			<MyButton
				onClick={isRunning ? handleClickPause : handleClickPlay}
				kindOf={isRunning ? 'pause' : 'play'}
				text={isRunning ? 'pause' : 'play'}
			/>
			{isRunning && (
				<MyButton onClick={handleClickReset} kindOf='reset' text='Reset' />
			)}

			<div>Number of action component renders: {actionRef.current}</div>
		</div>
	);
};

export const Actions = memo(ActionsC);
