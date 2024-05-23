import { useUser } from '../model';
import style from './user.module.scss';

export const User = () => {
	const { displayName, email } = useUser();
	return (
		<div className={style.user}>
			<span>{displayName}</span>
			<span>{email}</span>
		</div>
	);
};
