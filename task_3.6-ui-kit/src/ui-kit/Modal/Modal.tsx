import { MouseEventHandler, ReactNode } from 'react';
import { CloseIcon } from '../icons';
import style from './modal.module.scss';

interface IModal {
	title: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ children, title, isOpen = false, onClose }: IModal) => {
	if (!isOpen) return null;

	const onWrapperClick: MouseEventHandler = (e) => {
		const target: HTMLDivElement = e.target;
		if (target.className === style.modalWrapper) onClose();
		return;
	};

	return (
		<div id='wrapper' className={style.modal}>
			<div className={style.modalWrapper} onClick={onWrapperClick}>
				<div className={style.modalContent}>
					<div className={style.modalTop}>
						<h3 className={style.modaltitle}>{title}</h3>
						<button className={style.modalCloseBtn} onClick={onClose}>
							<CloseIcon />
						</button>
					</div>
					<div className={style.content}>{children}</div>
				</div>
			</div>
		</div>
	);
};
