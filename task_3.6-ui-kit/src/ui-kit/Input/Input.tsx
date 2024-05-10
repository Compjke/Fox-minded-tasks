import { InputHTMLAttributes, useState } from 'react';

import style from './input.module.scss';

import clsx from 'clsx';
import { Icon } from '../Icon';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	labelText: string;
	error?: {
		message: string;
	};
	id: string;
	value?: string;
}

export const Input = ({
	type,
	placeholder,
	required,
	error,
	labelText,
	disabled,
	id,
	value,
	...props
}: IInput) => {
	const [showPassword, setShowPassword] = useState(true);
	const [currentType, setType] = useState(type);

	const handleClick = () => {
		const cur = currentType === 'password' ? 'text' : type;
		console.log(currentType);
		setType(cur);
		setShowPassword(!showPassword);
	};

	return (
		<div className={style.container}>
			<label className={style.label} htmlFor={id}>
				{labelText}
				{required && '*'}
			</label>
			<input
				value={value}
				disabled={disabled}
				placeholder={placeholder}
				type={currentType}
				className={clsx(style.input, error && style.errorBorder)}
				{...props}
			/>
			{type === 'password' ? (
				showPassword ? (
					<button
						disabled={disabled}
						onClick={handleClick}
						className={style.icon}
					>
						<Icon name='hide-password' />
					</button>
				) : (
					<button
						disabled={disabled}
						onClick={handleClick}
						className={style.icon}
					>
						<Icon name='show-password' />
					</button>
				)
			) : null}
			{error && <span className={style.error}>{error.message}</span>}
		</div>
	);
};
