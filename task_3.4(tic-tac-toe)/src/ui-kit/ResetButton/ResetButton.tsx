import clsx from 'clsx';
import { resetGame } from 'src/store/gameSlice';
import { clearChat } from 'src/store/chatSlice';


import { ButtonHTMLAttributes } from 'react';
import style from './ResetButton.module.scss';
import { useDispatch } from 'react-redux';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ResetButton = ({ className }: Props) => {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(resetGame());
		dispatch(clearChat());
	};
	return (
		<button
			onClick={handleReset}
			className={clsx(style.resetButton, className)}
		>
			Reset
			
		</button>
	);
};
