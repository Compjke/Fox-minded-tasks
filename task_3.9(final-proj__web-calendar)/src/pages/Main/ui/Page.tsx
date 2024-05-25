import { useAppDispatch } from '@/app/store';
import { User } from '@/entities/user';
import { resetUser } from '@/entities/user/model/userSlice';
import { auth } from '@/shared/libs/firebase';
import { redirect } from '@tanstack/react-router';
import { signOut } from 'firebase/auth';

export const Page = () => {
	const dispatch = useAppDispatch();
	return (
		<>
			<h2>MAIN APP</h2>
			<div>
				<User />
			</div>
			<button
				onClick={() => {
					console.log(auth);
					dispatch(resetUser());
					signOut(auth);
					redirect({ to: '/login' });
				}}
			>
				out
			</button>
		</>
	);
};
