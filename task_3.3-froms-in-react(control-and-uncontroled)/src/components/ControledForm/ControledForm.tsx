import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import style from './Forms.module.css';
import { useFormValidator } from '../../hooks/useFormValidate';

import { SubmitButton } from '../ui-kit/SubmitButton';
import { InputFieled } from '../ui-kit/InputField';

export const ControledForm = () => {
	const [readyToSubmit, setreadyToSubmit] = useState(false);
	const [formState, setformState] = useState({
		name: '',
		password: '',
		email: '',
		'confirm-password': '',
		checkbox: false,
	});
	const { errors, setErrors, validate } = useFormValidator(formState);
	// console.log('Control FORM RENDER');

	const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;
		setformState((prev) => ({
			...prev,
			[name]: name === 'checkbox' ? checked : value,
		}));
	};
	const handleSubmitFrom = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors(validate(formState));
		setreadyToSubmit(true);
	};

	useEffect(() => {
		// console.log(errors);
		if (Object.values(errors).every((e) => e === '') && readyToSubmit) {
			console.log('SUBMIT');
			alert(JSON.stringify(formState, null, 2));
		}
	}, [errors, formState, readyToSubmit]);
	return (
		<div className={style.formWrapper}>
			<h2>Controled Form</h2>
			<form className={style.form} onSubmit={handleSubmitFrom}>
				<InputFieled
					onChange={handleChangeField}
					value={formState.name}
					id='name'
					label='Username*'
					placeholder='Enter your username'
					error={errors?.name}
				/>
				<InputFieled
					onChange={handleChangeField}
					value={formState.email}
					id='email'
					label='Email*'
					placeholder='Enter your email'
					error={errors?.email}
				/>

				<InputFieled
					onChange={handleChangeField}
					value={formState.password}
					id='password'
					label='Password*'
					type='password'
					placeholder='Enter your password'
					hasIconBtn
					error={errors.password}
				/>
				<InputFieled
					onChange={handleChangeField}
					value={formState['confirm-password']}
					id='confirm-password'
					label='Confirm password*'
					type='password'
					placeholder='Confirm your password'
					hasIconBtn
					error={errors['confirm-password']}
				/>
				<InputFieled
					onChange={handleChangeField}
					checked={formState.checkbox}
					id='checkbox'
					label='I agree to the terms and conditions.'
					type='checkbox'
					placeholder='Confirm your password'
				/>
				<SubmitButton>Register</SubmitButton>
				<p>*Required field</p>
			</form>
		</div>
	);
};
