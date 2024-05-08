import { InputHTMLAttributes, useState } from 'react';
import { CheckBoxEmpty, CheckBoxFilled } from '@/ui-kit/icons';
import style from './checkbox.module.scss';

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	defaultState: boolean;
}

export const CheckBox = ({ label, defaultState = false ,...props}: ICheckBox) => {
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
					<CheckBoxFilled />
				</span>
			) : (
				<span className={style.empty}>
					<CheckBoxEmpty />
				</span>
			)}
			{label}
		</label>
	);
};
