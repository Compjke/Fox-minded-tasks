import { Toast } from '@/ui-kit/Toast';
import { IToast } from '@/ui-kit/Toast/Toast';
import dayjs from 'dayjs';
import { ReactNode, createContext, useMemo, useState } from 'react';
import styles from '@/ui-kit/Toast/toast.module.scss';
interface ToastContextValue {
	showToast: (message: string, type?: string) => void;
	hideToast: (id: number | string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [toast, setToast] = useState<IToast[]>([]);

	const showToast = (message: string, type?: string) => {
		const newToast = {
			id: dayjs().millisecond(),
			message,
			type,
		};
		setToast((prev) => [...prev, newToast]);
	};

	const hideToast = (id: number | string) => {
		setToast((prev) => prev.filter((item) => item.id !== id));
	};

	const contextValue = useMemo(
		() => ({
			showToast,
			hideToast,
		}),
		[]
	);

	return (
		<ToastContext.Provider value={contextValue}>
			<div className={styles.toasts}>
				{toast &&
					toast.map(({ message, id, type }) => (
						<Toast
							id={id}
							type={type}
							message={message}
							key={id}
							onClose={() => hideToast(id)}
						/>
					))}
			</div>
			{children}
		</ToastContext.Provider>
	);
};
