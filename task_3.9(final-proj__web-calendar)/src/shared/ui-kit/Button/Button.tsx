import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon';

import { IconName } from '../Icon/Icon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	appereance: 'primary' | 'secondary';
	onClick?: () => void;
	disabled?: boolean;
	bgColor?: string;
	icon?: IconName;
}

export const Button = ({
	appereance = 'primary',
	label,
	disabled = false,
	onClick,
	bgColor,
	icon,
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
			{icon && <Icon role='icon' name={icon} />}
			{label}
		</button>
	);
};
