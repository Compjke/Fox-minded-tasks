import clsx from 'clsx';
import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import style from './Buttom.module.scss';
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string | null;
	icon?: JSX.Element | null;
	type?: 'submit' | 'button';
	className?: string;
	data_count?: string | undefined;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
	icon = null,
	text = null,
	type = 'button',
	className,
	data_count = undefined,
	disabled,
	onClick,
}: IProps) => {
	
	return (
		<button
			className={clsx(
				className,
				style.button,
				+data_count! > 0 && style.basketBtn
			)}
			type={type}
			datatype={data_count}
			disabled={disabled}
			onClick={onClick}
		>
			{icon}
			{text}
		</button>
	);
};

export default Button;
