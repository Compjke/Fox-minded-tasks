import { Modal } from '@/shared/ui-kit/Modal';
import { EventForm } from './EventForm/EventForm';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	setisModalOpen: Dispatch<SetStateAction<boolean>>;
	isModalOpen: boolean;
}

export const CreateEventFeature = ({ isModalOpen, setisModalOpen }: Props) => {
	return (
		<Modal
			nodeId='modalFullScreen'
			viewMode='fullScreen'
			title='Create event'
			isOpen={isModalOpen}
			onClose={() => setisModalOpen(false)}
		>
			<EventForm setModalState={setisModalOpen} />
		</Modal>
	);
};
