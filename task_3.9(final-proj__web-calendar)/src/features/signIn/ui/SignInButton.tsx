import { useAppDispatch } from '@/app/store';
import { Button } from '@/shared/ui-kit/Button';
import { auth, googleAuthProvider } from '@/shared/libs/firebase';
import { signInWithPopup } from 'firebase/auth';
import { setUser } from '@/entities/user';

export const SignInButton = () => {
	const dispatch = useAppDispatch();
	const handleClick = () => {
		signInWithPopup(auth, googleAuthProvider)
			.then(({ user }) => {
				const { displayName, email, accessToken } = user;
				console.log(user);
				console.log(accessToken);
				dispatch(setUser({ displayName, email, accessToken }));
			})
			.catch((err) => console.log(err));
	};

	return (
		<Button
			onClick={handleClick}
			appereance='secondary'
			icon='google'
			label='Sign in with google'
		/>
	);
};
