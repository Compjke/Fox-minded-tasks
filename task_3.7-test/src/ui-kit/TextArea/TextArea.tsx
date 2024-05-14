import { TextareaHTMLAttributes, useState } from 'react';
import style from './textarea.module.scss';
import clsx from 'clsx';

interface iTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	placeholder?: string;
	testValue?: string;
}

export const TextArea = ({
	label,
	placeholder = 'Type your description....',
	testValue = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
}: iTextArea) => {
	const [value, setValue] = useState(testValue || '');
	return (
		<div className={style.container}>
			<label className={style.label} htmlFor='textarea'>
				<span className={style.labelText}>{label}</span>
				<textarea
					placeholder={placeholder}
					className={clsx(style.textArea)}
					id='textarea'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				></textarea>
			</label>
		</div>
	);
};
