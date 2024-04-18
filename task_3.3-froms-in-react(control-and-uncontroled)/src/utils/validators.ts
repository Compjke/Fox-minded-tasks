export const nameValidator = (name: string) => {
	if (!name) {
		return 'Name is required';
	}
	return '';
};
export const emailValidator = (email: string) => {
	// eslint-disable-next-line no-useless-escape
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	if (!email) {
		return 'Email is required';
	} else if (!regex.test(email)) {
		return 'Incorrect email format';
	}
	return '';
};

export const passwordValidator = (password: string) => {
	if (!password) {
		return 'Password is required';
	} else if (password.length < 4) {
		return 'Password must have a minimum 8 characters';
	}
	return '';
};

export const confirmPasswordValidator = (
	confirmPassword: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	password: string
) => {
	if (!confirmPassword) {
		return 'Confirm password is required';
	} else if (confirmPassword.length < 4) {
		return 'Confirm password must have a minimum 8 characters';
	} else if (confirmPassword !== password) {
		return 'Passwords do not match';
	}
	return '';
};
