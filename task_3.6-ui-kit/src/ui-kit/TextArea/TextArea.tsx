import { TextareaHTMLAttributes, useState } from 'react';
import style from './textarea.module.scss';
import clsx from 'clsx';

interface iTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	placeholder?: string;
	value?: string;
}

export const TextArea = ({
	label,
	placeholder = 'Type your description....',
	value = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
}: iTextArea) => {
	const [isFocus, setisFocus] = useState(false);
	const [testValue, setTestValue] = useState(value);
	return (
		<div className={style.container}>
			<label className={style.label} htmlFor='textarea'>
				<span
					onClick={() => setisFocus((prev) => !prev)}
					className={style.labelText}
				>
					{label}
				</span>
				<textarea
					placeholder={placeholder}
					className={clsx(style.textArea, isFocus && style.wide)}
					id='textarea'
					value={testValue}
					onChange={(e) => setTestValue(e.target.value)}
				></textarea>
			</label>
		</div>
	);
};
