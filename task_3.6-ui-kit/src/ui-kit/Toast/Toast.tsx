import clsx from 'clsx';
import style from './toast.module.scss';
import { CloseIcon } from '../icons';
import { useTimeout } from '@/hooks/useTimeout';
import { Icon } from '../Icon';

export interface IToast {
	id: number | string;
	message: string;
	onClose?: () => void;
	type?: string;
}

export const Toast = ({ message, onClose, type = 'info' }: IToast) => {
	useTimeout(() => {
		onClose();
	}, 5000);

	return (
		<div className={clsx(style.toast, style[type])}>
			<p className={style.toastMessage}>{message}</p>
			<button onClick={onClose} className={style.closeBtn}>
				<Icon name='close' />
			</button>
		</div>
	);
};
