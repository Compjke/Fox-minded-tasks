import { FormEvent, useEffect, useRef } from 'react';
import style from '../ControledForm/Forms.module.css';
import { InputFieled } from '../ui-kit/InputField';
import { SubmitButton } from '../ui-kit/SubmitButton';
import { useFormValidator } from '../../hooks/useFormValidate';

export const UncontroledForm = () => {
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const passWordConfirmRef = useRef<HTMLInputElement | null>(null);
	const checkboxRef = useRef<HTMLInputElement | null>(null);

	const { errors, setErrors, validate } = useFormValidator({
		name: '',
		password: '',
		email: '',
		'confirm-password': '',
	});
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const formElement = e.target as HTMLFormElement;

		// const firsInvalidField = formElement.querySelector(
		// 	':invalid'
		// ) as HTMLInputElement;
		// firsInvalidField?.focus();
		const name = nameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const confirmPassword = passWordConfirmRef.current?.value;
		setErrors(
			validate({
				name,
				email,
				password,
				'confirm-password': confirmPassword,
			})
		);
	};

	useEffect(() => {
		console.log(errors);
		if (Object.values(errors).every((e) => e === '')) {
			console.log('SUBMIT');
		}
	}, [errors]);
	return (
		<div className={style.formWrapper}>
			<h2>Uncontroled Form</h2>
			<form className={style.form} onSubmit={handleSubmit}>
				<InputFieled
					ref={nameRef}
					id='name-2'
					label='Username*'
					placeholder='Enter your username'
					required
					error={errors.name}
				/>
				<InputFieled
					ref={emailRef}
					required
					id='email-2'
					label='Email*'
					placeholder='Enter your email'
					error={errors.email}
				/>

				<InputFieled
					required
					error={errors.password}
					ref={passwordRef}
					id='password-2'
					label='Password*'
					type='password'
					placeholder='Enter your password'
					hasIconBtn
				/>
				<InputFieled
					required
					error={errors['confirm-password']}
					ref={passWordConfirmRef}
					id='confirm-password-2'
					label='Confirm password*'
					type='password'
					placeholder='Confirm your password'
					hasIconBtn
				/>
				<InputFieled
					ref={checkboxRef}
					id='checkbox-2'
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
