import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	appereance: 'primary' | 'secondary';
	onClick?: () => void;
	disabled?: boolean;
	bgColor?: string;
	isPlay?: boolean;
	icon?: JSX.Element;
	icon_2?: JSX.Element;
}

export const Button = ({
	appereance = 'primary',
	label,
	disabled = false,
	onClick,
	bgColor,
	isPlay,
	icon,
	icon_2,
	...props
}: IProps) => {
	return (
		<button
			style={{ backgroundColor: bgColor }}
			disabled={disabled}
			onClick={onClick}
			className={clsx(style.button, style[appereance])}
			{...props}
		>
			{icon && isPlay && icon}
			{icon_2 && !isPlay && icon_2}
			{label}
		</button>
	);
};
