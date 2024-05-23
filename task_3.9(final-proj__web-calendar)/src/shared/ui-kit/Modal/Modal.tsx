import { MouseEventHandler, ReactNode, useState } from 'react';

import style from './modal.module.scss';
import { Icon } from '../Icon';

interface IModal {
	title: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ children, title, isOpen = false, onClose }: IModal) => {
	const [modalShow, setModalShow] = useState(isOpen);
	if (!modalShow) return null;

	const onWrapperClick: MouseEventHandler = (e) => {
		const target: HTMLDivElement = e.target;
		if (target.className === style.modalWrapper) {
			onClose();
			setModalShow(false);
			return;
		}
	};

	return (
		<div data-testid='modal' id='wrapper' className={style.modal}>
			<div data-testid='backdrop' className={style.modalWrapper} onClick={onWrapperClick}>
				<div className={style.modalContent}>
					<div className={style.modalTop}>
						<h3 className={style.modaltitle}>{title}</h3>
						<button
							className={style.modalCloseBtn}
							onClick={() => {
								onClose();
								setModalShow(false);
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
};
