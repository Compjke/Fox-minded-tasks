import { useState } from 'react';

import {
	confirmPasswordValidator,
	emailValidator,
	nameValidator,
	passwordValidator,
} from '../utils/validators';

interface IFormStateError {
	name: string;
	password: string;
	email: string;
	'confirm-password': string;
	checkbox?: boolean;
}

export const useFormValidator = (form: IFormStateError) => {
	const [errors, setErrors] = useState({});

	const validate = (values: typeof form): object => {
		const errors: IFormStateError | object = {};
		errors.name = nameValidator(values.name);
		errors.email = emailValidator(values.email);
		errors.password = passwordValidator(values.password);
		errors['confirm-password'] = confirmPasswordValidator(
			values['confirm-password'],
			values.password
		);

		return errors;
	};

	return {
		setErrors,
		errors,
		validate,
	};
};
