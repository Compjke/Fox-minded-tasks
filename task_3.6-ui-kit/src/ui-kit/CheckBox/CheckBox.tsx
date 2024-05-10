import { InputHTMLAttributes, useState } from 'react';

import style from './checkbox.module.scss';
import { Icon } from '../Icon';

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	defaultState: boolean;
}

export const CheckBox = ({
	label,
	defaultState = false,
	...props
}: ICheckBox) => {
	const [isChecked, setIsChecked] = useState(defaultState);

	console.log(isChecked);
	const handleClick = () => {
		setIsChecked((prev) => !prev);
	};

	return (
		<label className={style.CheckBoxContainer}>
			<input
				className={style.input}
				checked={isChecked}
				onChange={handleClick}
				type='checkbox'
				{...props}
				// id='checkbox'
			/>
			{isChecked ? (
				<span className={style.filled}>
					<Icon name='checkbox-filled' />
				</span>
			) : (
				<span className={style.empty}>
					<Icon name='checkbox-empty' />
				</span>
			)}
			{label}
		</label>
	);
};
