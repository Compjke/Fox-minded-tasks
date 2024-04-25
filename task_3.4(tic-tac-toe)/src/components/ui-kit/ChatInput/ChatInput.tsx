import { InputHTMLAttributes } from 'react';
import styles from './ChatInput.module.scss';
import clsx from 'clsx';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
	message: string;
	className?: string;
}

export const ChatInput = ({ message, onChange, className }: Props) => {
	return (
		<input
			className={clsx(styles.input, className)}
			value={message}
			onChange={onChange}
		/>
	);
};
