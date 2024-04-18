import {
	ChangeEventHandler,
	ForwardedRef,
	InputHTMLAttributes,
	forwardRef,
	useState,
} from 'react';
import style from './InputField.module.css';
import { EyeButton } from '../EyeButton/EyeButton';
import clsx from 'clsx';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	type?: string;
	id: string;
	value?: string;
	hasIconBtn?: boolean;
	onChange?: ChangeEventHandler;
	placeholder?: string;
	rest?: object;
	className?: string;
	checked?: boolean;
	error?: string;
	required?: boolean;
	ref?: ForwardedRef<HTMLInputElement> | null;
}

export const InputFiled = forwardRef(
	(
		{
			hasIconBtn,
			id,
			label,
			type = 'text',
			onChange,
			placeholder,
			rest,
			value,
			className,
			error,
			required,
		}: InputProps,
		ref
	) => {
		const [typeState, setTypeState] = useState<string>(type);

		return (
			<div className={style.field}>
				<label
					className={clsx(
						type === 'checkbox' ? style.labelChekbox : style.label
					)}
				>
					{label}
					<input
						required={required}
						ref={ref}
						className={clsx(className, style.input, error && style.invalid)}
						type={typeState}
						onChange={onChange}
						name={id}
						id={id}
						value={value}
						placeholder={placeholder}
						{...rest}
					/>

					{hasIconBtn && (
						<EyeButton currentType={typeState} onChangeType={setTypeState} />
					)}
				</label>
				{error && <span className={style.invalid}>{error}</span>}
			</div>
		);
	}
);
