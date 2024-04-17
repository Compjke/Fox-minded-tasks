import { FC } from 'react';
import { IButton } from '../../interfaces/timer';
import clsx from 'clsx';
import styles from './MyButton.module.css';

export const MyButton: FC<IButton> = ({
	text,
	onClick,
	kindOf,
	props,
}) => {
	const iconSrc = {
		play: '/play.svg',
		pause: '/pause.svg',
		reset: null,
	}[kindOf];
	return (
		<button
			onClick={onClick}
			{...props}
			className={clsx(styles.button, styles[kindOf])}
		>
			<img src={iconSrc ?? ''} alt='' />
			{text}
		</button>
	);
};
