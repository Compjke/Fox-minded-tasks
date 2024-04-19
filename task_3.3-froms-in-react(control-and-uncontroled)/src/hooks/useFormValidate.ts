import { useState } from 'react';

import {
	confirmPasswordValidator,
	emailValidator,
	nameValidator,
	passwordValidator,
} from '../utils/validators';

interface IFormStateError {
	name: string | undefined;
	password: string | undefined;
	email: string | undefined;
	'confirm-password': string | undefined;
}

type IErrors = {
	name?: string;
	password?: string;
	email?: string;
	'confirm-password'?: string;
};

export const useFormValidator = (form: IFormStateError) => {
	const [errors, setErrors] = useState<IErrors>({});

	const validate = (values: typeof form): IErrors => {
		const errors: IErrors = {};
		errors.name = nameValidator(values.name!);
		errors.email = emailValidator(values.email!);
		errors.password = passwordValidator(values.password!);
		errors['confirm-password'] = confirmPasswordValidator(
			values['confirm-password']!,
			values.password!
		);

		return errors;
	};

	return {
		setErrors,
		errors,
		validate,
	};
};
