import clsx from 'clsx';
import style from './pageTitle.module.scss';

export const PageTitle = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}) => {
	return <h3 className={clsx(style.title, className)}>{text}</h3>;
};
