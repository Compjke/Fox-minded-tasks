import { FC } from 'react';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './ProffesionalButton.module.css';

interface PropsBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	kindOf: string;
	onClick: () => void;
	props?: object;
	isRunning?: boolean;
}

const ICON_SRC = {
	play: '/play.svg',
	pause: '/pause.svg',
};

export const ProffesionalButton: FC<PropsBtn> = ({ text, onClick, kindOf, props }) => {
	return (
		<button
			onClick={onClick}
			{...props}
			className={clsx(styles.button, styles[kindOf])}
		>
			{ICON_SRC[kindOf as keyof object] && (
				<img src={ICON_SRC[kindOf as keyof typeof ICON_SRC]} alt={kindOf} />
			)}
			{text}
		</button>
	);
};
