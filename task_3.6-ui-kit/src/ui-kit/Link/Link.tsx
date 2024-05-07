import { AnchorHTMLAttributes, MouseEventHandler } from 'react';
import style from './link.module.scss';
import clsx from 'clsx';

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string;
	href: string;
	className?: string;
	disabled?: boolean;
	onClick: () => void;
}

export const Link = ({
	href,
	label,
	className,
	disabled = false,
	onClick,
}: ILink) => {
	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault();
      console.log('click')
		onClick && onClick();
	};
	return (
		<a
			onClick={handleClick}
			className={clsx(className, style.link, disabled && style.disabled)}
			href={href}
		>
			{label}
		</a>
	);
};
