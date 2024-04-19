import { FormEvent, useEffect, useRef } from 'react';
import style from '../ControledForm/Forms.module.css';
import { InputFieled } from '../ui-kit/InputField';
import { SubmitButton } from '../ui-kit/SubmitButton';
import { useFormValidator } from '../../hooks/useFormValidate';

export const UncontroledForm = () => {
	// const nameRef = useRef<HTMLInputElement | null>(null);
	// const emailRef = useRef<HTMLInputElement | null>(null);
	// const passwordRef = useRef<HTMLInputElement | null>(null);
	// const passWordConfirmRef = useRef<HTMLInputElement | null>(null);
	// const checkboxRef = useRef<HTMLInputElement | null>(null);

	const { errors, setErrors, validate } = useFormValidator({
		name: '',
		password: '',
		email: '',
		'confirm-password': '',
	});
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const formData = new FormData(formElement);
		const formObj = Object.fromEntries(formData);
		const { name2, email2, password2, confirm_password } = formObj;
		setErrors(
			validate({
				name: name2 as string,
				email: email2 as string,
				password: password2 as string,
				'confirm-password': confirm_password as string,
			})
		);
	};

	useEffect(() => {
		console.log(errors);
		if (
			Object.values(errors).length &&
			Object.values(errors).every((e) => e === '')
		) {
			alert('SUBMIT');
		}
	}, [errors]);
	return (
		<div className={style.formWrapper}>
			<h2>Uncontroled Form</h2>
			<form className={style.form} onSubmit={handleSubmit}>
				<InputFieled
					// ref={nameRef}
					id='name2'
					label='Username*'
					placeholder='Enter your username'
					error={errors.name}
				/>
				<InputFieled
					// ref={emailRef}

					id='email2'
					label='Email*'
					placeholder='Enter your email'
					error={errors.email}
				/>

				<InputFieled
					error={errors.password}
					// ref={passwordRef}
					id='password2'
					label='Password*'
					type='password'
					placeholder='Enter your password'
					hasIconBtn
				/>
				<InputFieled
					error={errors['confirm-password']}
					// ref={passWordConfirmRef}
					id='confirm_password'
					label='Confirm password*'
					type='password'
					placeholder='Confirm your password'
					hasIconBtn
				/>
				<InputFieled
					// ref={checkboxRef}
					id='checkbox2'
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
