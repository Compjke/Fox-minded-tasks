import { EventHandler, MouseEventHandler } from 'react';
import { CloseIcon } from '../icons';
import style from './modal.module.scss';

interface IModal {
	title: string;
	text: string;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ text, title, isOpen = false, onClose }: IModal) => {
	const onWrapperClick: MouseEventHandler = (e) => {
		const target: HTMLDivElement = e.target;
		if (target.className === style.modalWrapper) onClose();
		return;
	};
	return (
		<>
			{isOpen && (
				<div id='wrapper' className={style.modal}>
					<div className={style.modalWrapper} onClick={onWrapperClick}>
						<div className={style.modalContent}>
							<div className={style.modalTop}>
								<h3 className={style.modaltitle}>{title}</h3>
								<button className={style.modalCloseBtn} onClick={onClose}>
									<CloseIcon />
								</button>
							</div>
							<div className={style.modalText}>{text}</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
