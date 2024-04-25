import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import style from './SendButton.module.scss';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	onClick: () => void;
}

export const SendButton = ({
	className,
	onClick,
	type = 'submit',
	disabled,
}: Props) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={clsx(className, style.btn)}
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12.815 12.197L5.28296 13.453C5.19636 13.4674 5.1151 13.5044 5.04734 13.5603C4.97958 13.6161 4.92772 13.6888 4.89696 13.771L2.29996 20.728C2.05196 21.368 2.72096 21.978 3.33496 21.671L21.335 12.671C21.4596 12.6087 21.5645 12.513 21.6378 12.3945C21.7111 12.2759 21.7499 12.1393 21.7499 12C21.7499 11.8606 21.7111 11.724 21.6378 11.6055C21.5645 11.487 21.4596 11.3912 21.335 11.329L3.33496 2.32899C2.72096 2.02199 2.05196 2.63299 2.29996 3.27199L4.89796 10.229C4.92857 10.3114 4.98038 10.3843 5.04815 10.4403C5.11591 10.4963 5.19725 10.5335 5.28396 10.548L12.816 11.803C12.8623 11.8111 12.9043 11.8353 12.9346 11.8713C12.9649 11.9074 12.9814 11.9529 12.9814 12C12.9814 12.0471 12.9649 12.0926 12.9346 12.1286C12.9043 12.1647 12.8623 12.1889 12.816 12.197H12.815Z'
					fill='white'
				/>
			</svg>
		</button>
	);
};
