import { ButtonHTMLAttributes, ReactNode } from 'react';
import style from './SubmitButton.module.css'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const SubmitButton = ({ type = 'submit', children } : Props) => {
	return <button className={style.submitBtn} type={type}>{children}</button>;
};
