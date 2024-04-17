import { FC, memo, useRef } from 'react';
import { ProffesionalButton } from '../ui-kit';
import style from './Actions.module.css';

interface IProps {
	isRunning: boolean;
	onPlayPause: (arg: boolean) => void;
	onResetTime: (arg: number) => void;
}

const ActionsC: FC<IProps> = ({ isRunning, onPlayPause, onResetTime }) => {
	// console.log('Actions');
	const actionRef = useRef(0);
	actionRef.current += 1;

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
			<ProffesionalButton
				onClick={isRunning ? handleClickPause : handleClickPlay}
				kindOf={isRunning ? 'pause' : 'play'}
				text={isRunning ? 'pause' : 'play'}
			/>
			{isRunning && (
				<ProffesionalButton
					onClick={handleClickReset}
					kindOf='reset'
					text='Reset'
				/>
			)}

			<div>Number of action component renders: {actionRef.current}</div>
		</div>
	);
};

export const Actions = memo(ActionsC);
