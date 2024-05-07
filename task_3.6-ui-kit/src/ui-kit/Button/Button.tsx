import { PLayIcon } from '@/ui-kit/icons/PLayIcon';
import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { PauseIcon } from '../icons/PauseIcon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	withIcon?: boolean;
	label: string;
	appereance: 'primary' | 'secondary';
	onClick?: () => void;
	disabled?: boolean;
	bgColor?: string;
	isPlay?: boolean
}

export const Button = ({
	appereance = 'primary',
	label,
	withIcon = false,
	disabled = false,
	onClick,
	bgColor,
	isPlay
}: IProps) => {
	return (
		<button
			style={{ backgroundColor: bgColor }}
			disabled={disabled}
			onClick={onClick}
			className={clsx(
				style.button,
				appereance === 'primary' && style.primary,
				appereance === 'secondary' && style.secondary
			)}
		>
			{withIcon && isPlay && <PLayIcon />}
			{withIcon && !isPlay && <PauseIcon />}
			{label}
		</button>
	);
};
