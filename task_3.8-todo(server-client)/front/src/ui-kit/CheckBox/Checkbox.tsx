import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import style from './checkbox.module.scss';
import { EmptyCheckBox, FilledCheckBox } from '../icons';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	onChahge: () => void;
	completed: boolean;
	className?: string;
}

export const Checkbox = ({
	completed,
	onChahge,
	className,
	...props
}: IProps) => {
	return (
		<label className={style.checkbox}>
			<input
				onChange={onChahge}
				checked={completed}
				type='checkbox'
				className={clsx(style.hidden, className)}
				{...props}
			/>
         {completed ? <FilledCheckBox/> : <EmptyCheckBox/>}

		</label>
	);
};
