import { MouseEventHandler, ReactNode } from 'react';

import { Icon } from '../Icon';
import { createPortal } from 'react-dom';
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
		const target = e.target;
		if (target.className === style.modalWrapper) {
			onClose();
			return;
		}
	};

	const modal = (
		<div data-testid='modal' id='wrapper' className={style.modal}>
			<div
				data-testid='backdrop'
				className={style.modalWrapper}
				onClick={onWrapperClick}
			>
				<div className={style.modalContent}>
					<div className={style.modalTop}>
						<h3 className={style.modaltitle}>{title}</h3>
						<button
							className={style.modalCloseBtn}
							onClick={() => {
								onClose();
							}}
						>
							<Icon name='close' />
						</button>
					</div>
					<div className={style.content}>{children}</div>
				</div>
			</div>
		</div>
	);

	return createPortal(modal, document.getElementById('modal')!);
};
