import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon';
import { ICONS } from '@/constans/iconConstans';

type Keys = keyof typeof ICONS;
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	appereance: 'primary' | 'secondary';
	onClick?: () => void;
	disabled?: boolean;
	bgColor?: string;
	icon?: (typeof ICONS)[Keys];
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
			{icon && <Icon name={icon} />}
			{label}
		</button>
	);
};
