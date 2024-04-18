import { FormEvent, useRef } from 'react';
import { InputFiled, SubmitButton } from '../../ui-kit';
import style from '../Forms.module.css';
import {
	confirmPasswordValidator,
	emailValidator,
	nameValidator,
	passwordValidator,
} from '../../../utils/validators';

export const UncontroledForm = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passWordConfirmRef = useRef();
	const checkboxRef = useRef();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;

		const isValid = formElement.checkValidity();
		console.log(isValid);
		const firsInvalidField = formElement.querySelector(
			':invalid'
		) as HTMLInputElement;

		firsInvalidField?.focus();

		if (isValid) {
			const formData = new FormData(formElement);
			const formDataObj = Object.fromEntries(formData.entries());
			console.log(formDataObj);
		}
	};
	return (
		<div className={style.formWrapper}>
			<h2>Uncontroled Form</h2>
			<form className={style.form} onSubmit={handleSubmit}>
				<InputFiled
					ref={nameRef}
					id='name-2'
					label='Username*'
					placeholder='Enter your username'
					required
				/>
				<InputFiled
					ref={emailRef}
					required
					id='email-2'
					label='Email*'
					placeholder='Enter your email'
				/>

				<InputFiled
					required
					ref={passwordRef}
					id='password-2'
					label='Password*'
					type='password'
					placeholder='Enter your password'
					hasIconBtn
				/>
				<InputFiled
					required
					ref={passWordConfirmRef}
					id='confirm-password-2'
					label='Confirm password*'
					type='password'
					placeholder='Confirm your password'
					hasIconBtn
				/>
				<InputFiled
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
