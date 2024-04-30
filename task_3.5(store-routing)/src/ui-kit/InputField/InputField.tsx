import { InputHTMLAttributes } from 'react';
import { ErrorOption, Path, UseFormRegister } from 'react-hook-form';
import { IFormContactValues } from '@/components/FormContact/FormContact';
import styles from './inputField.module.scss';
import clsx from 'clsx';
import { IFormShipmentValues } from '@/components/ShipmentForm/ShipmentForm';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label: Path<IFormContactValues> | Path<IFormShipmentValues>;
	register: UseFormRegister<any>;
	error: ErrorOption | undefined;
	labelText: string;
}

export const InputField = ({
	type,
	label,
	placeholder,
	required,
	register,
	error,
	labelText,
}: IProps) => {
	return (
		<label className={styles.field}>
			<span className={styles.label}>
				{labelText}
				{required && '*'}
			</span>
			<input
				// autoComplete={'off'}
				className={clsx(styles.input, error && styles.error)}
				placeholder={placeholder}
				type={type}
				{...register(label)}
			/>
			{error && <span className={styles.errorText}>{error.message}</span>}
		</label>
	);
};
