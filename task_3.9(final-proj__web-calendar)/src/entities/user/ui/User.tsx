import { useUser } from '../model';
import style from './user.module.scss';

export const User = () => {
	const { displayName } = useUser();
	return (
		<div className={style.user}>
			<span>{displayName}</span>
			<span className={style.avatar}>
				{displayName && displayName[0].toUpperCase()}
			</span>
		</div>
	);
};
