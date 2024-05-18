import { ButtonHTMLAttributes } from 'react';
import { EditIcon } from '../icons/EditIcon';
import style from './edit-btn.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const EditButton = ({ onClick, ...props }: IProps) => {
	return (
		<button
			{...props}
			onClick={onClick}
			title='Edit todo'
			className={style.btn}
		>
			<EditIcon />
		</button>
	);
};
