import style from './confirm-edit-btn.module.scss';
import { ConfirmEdit } from '../icons';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const ConfirmEditButton = ({ onClick, ...props }: IProps) => {
	return (
		<button
			onClick={onClick}
			{...props}
			title='Confirm changes todo'
			className={style.btn}
		>
			<ConfirmEdit />
		</button>
	);
};
