import { LegacyRef, forwardRef, useState } from 'react';

import { Icon } from '../Icon';
import clsx from 'clsx';

import style from './checkbox.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { IFormCreateEventValues } from '@/shared/config/types';

interface ICheckBox {
	label?: string;
	defaultState?: boolean;
	className?: string;
	color?: string;
	register?: UseFormRegister<IFormCreateEventValues>;
}

export const CheckBox = forwardRef(
	(
		{ label, defaultState = false, className, color, ...props }: ICheckBox,
		ref: LegacyRef<HTMLInputElement> | undefined
	) => {
		// const { field } = useController(controls as UseControllerProps<IFormCreateEventValues>);
		const [isChecked, setIsChecked] = useState(defaultState);
		// console.log(props);
		const { onChange } = props;
		const handleClick = () => {
			setIsChecked((prev) => !prev);

			onChange && onChange(!isChecked);
		};

		return (
			<label className={clsx(style.CheckBoxContainer, className)}>
				<input
					ref={ref}
					className={style.input}
					checked={isChecked}
					onChange={handleClick}
					type='checkbox'
					// {...props}
					// id='checkbox'
				/>
				{isChecked ? (
					<span
						className={clsx(style.filled, !color && style.filledColorDefault)}
					>
						<Icon color={color} name='checkbox-filled' />
					</span>
				) : (
					<span className={style.empty}>
						<Icon name='checkbox-empty' />
					</span>
				)}
				{label}
			</label>
		);
	}
);
