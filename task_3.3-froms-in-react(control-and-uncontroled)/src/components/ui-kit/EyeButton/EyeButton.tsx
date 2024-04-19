import { Dispatch, SetStateAction, useState } from 'react';
import style from './EyeButton.module.css';

interface Props {
	onChangeType: Dispatch<SetStateAction<string>>;
	currentType: string;
}

const img = {
	close: '/icons/close-eye.svg',
	open: '/icons/open-eye.svg',
};

export const EyeButton = ({ onChangeType, currentType }: Props) => {
	const [showPasswors, setShowPassword] = useState(false);

	const handleClick = () => {
		const type = currentType === 'text' ? 'password' : 'text';
		setShowPassword((prev) => !prev);
		onChangeType(type);
	};

	return (
		<button type='button' onClick={handleClick} className={style.eye}>
			<img src={showPasswors ? img.open : img.close} alt='eye' />
		</button>
	);
};
