import clsx from 'clsx';
import style from './toast.module.scss';
import { useTimeout } from '@/hooks/useTimeout';
import { Icon } from '../Icon';


export type ToastType = 'info' | 'success' | 'error'
export interface IToast {
	id: number;
	message: string;
	onClose: () => void;
	type?: ToastType;
}

export const Toast = ({ message, onClose, type = 'info' }: IToast) => {
	useTimeout(() => {
		onClose();
	}, 4000);

	return (
		<div data-testid='toast' className={clsx(style.toast, style[type])}>
			<p className={style.toastMessage}>{message}</p>
			<button onClick={onClose} className={style.closeBtn}>
				<Icon name='close' />
			</button>
		</div>
	);
};
