import { SelectHTMLAttributes } from 'react';
import { ErrorOption, Path, UseFormRegister } from 'react-hook-form';

import styles from './selectField.module.scss';
import clsx from 'clsx';
import { IFormShipmentValues } from '@/components/ShipmentForm/ShipmentForm';

interface IProps extends SelectHTMLAttributes<HTMLInputElement> {
	label: Path<IFormShipmentValues>;
	register: UseFormRegister<IFormShipmentValues>;
	error: ErrorOption | undefined;
	options: string[];
	labelText: string;
	placeholder: string;
}

export const SelectField = ({
	error,
	label,
	required,
	register,
	options,
	labelText,
	placeholder,
}: IProps) => {
	return (
		<label className={styles.field}>
			<span className={styles.label}>
				{labelText}
				{required && '*'}
			</span>
			<select
				className={clsx(styles.select, error && styles.error)}
				{...register(label)}
			>
				<option value='' selected hidden disabled>
					{placeholder}
				</option>
				{options.map((opt) => (
					<option key={opt} value={opt}>{opt}</option>
				))}
			</select>
			{error && <span className={styles.errorText}>{error.message}</span>}
		</label>
	);
};
