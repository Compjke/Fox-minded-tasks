import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import style from './SendButton.module.scss';
import { AeroplaneIcon } from '../icons/AeroplaneIcon';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	onClick: () => void;
}

export const SendButton = ({
	className,
	onClick,
	type = 'submit',
	disabled,
}: Props) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={clsx(className, style.btn)}
		>
			<AeroplaneIcon />
		</button>
	);
};
