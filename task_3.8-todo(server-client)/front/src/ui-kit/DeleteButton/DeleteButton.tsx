import { ButtonHTMLAttributes } from 'react';
import { DeleteIcon } from '../icons/DeleteIcon';
import style from './delete-btn.module.scss';
import clsx from 'clsx';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	className?: string;
}

export const DeleteButton = ({
	onClick,
	className,
	label,
	...props
}: IProps) => {
	return (
		<button
			{...props}
			onClick={onClick}
			title={label ? label : 'Delete todo'}
			className={clsx(style.btn, className)}
		>
			<DeleteIcon />
			{label && label}
		</button>
	);
};
