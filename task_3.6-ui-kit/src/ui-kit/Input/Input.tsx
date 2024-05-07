import { InputHTMLAttributes, useState } from 'react';
// import { Path, UseFormRegister, ErrorOption } from 'react-hook-form';
import style from './input.module.scss';
import { HidePasswordIcon, ShowPasswordIcon } from '../icons';
// import { IForm } from '../Form/Form';
import clsx from 'clsx';

// interface IInput extends InputHTMLAttributes<HTMLInputElement> {
// 	label: Path<IForm>;
// 	register: UseFormRegister<IForm>;
// 	error: ErrorOption | undefined ;
// 	labelText: string;
// 	id: string;
// }

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
	// label,
	placeholder,
	required,
	// register,
	error,
	labelText,
	disabled,
	id,
	value,
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
				// {...register(label)}
			/>
			{type === 'password' ? (
				showPassword ? (
					<button
						disabled={disabled}
						onClick={handleClick}
						className={style.icon}
					>
						<HidePasswordIcon />
					</button>
				) : (
					<button
						disabled={disabled}
						onClick={handleClick}
						className={style.icon}
					>
						<ShowPasswordIcon />
					</button>
				)
			) : null}
			{error && <span className={style.error}>{error.message}</span>}
		</div>
	);
};
