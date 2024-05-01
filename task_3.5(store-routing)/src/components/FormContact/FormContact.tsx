import { Button } from '@/ui-kit/Button';
import { InputField } from '@/ui-kit/InputField';
import style from './FormContact.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { Form, useLoaderData } from 'react-router-dom';
import { orderInfoActions } from '@/store/slices/orderInfoSlice';
import { useAppDispatch, useStateSelector } from '@/store';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-useless-escape
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const schema = yup
	.object({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().nullable().email().required(),
		phone: yup
			.string()
			.required()
			.matches(phoneRegExp, 'Phone number is not valid'),
	})
	.required();

export interface IFormContactValues {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export const FormContact = () => {
	// const actions = useActionCreators(orderInfoActions)

	const { email, firstName, lastName, phone } = useStateSelector(
		(s) => s.orderInfo.contactInfo
	);
	// console.log(blocker)
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		formState: { errors },
		handleSubmit,
		register,
		// formState,
	} = useForm<IFormContactValues>({
		defaultValues: {
			firstName,
			lastName,
			email,
			phone,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IFormContactValues) => {
		// console.log(data);
		dispatch(orderInfoActions.addInfoContacts(data));
		navigate('/info/shipment-info');
	};

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={style.fields}>
				<InputField
					register={register}
					label='firstName'
					required
					labelText='First Name'
					placeholder='Enter your name'
					error={errors.firstName}
				/>
				<InputField
					register={register}
					label='lastName'
					labelText='Last Name'
					required
					placeholder='Enter your last name'
					error={errors.lastName}
				/>
				<InputField
					register={register}
					label='email'
					labelText='Email'
					required
					type='email'
					placeholder='Enter your email'
					error={errors.email}
				/>
				<InputField
					register={register}
					labelText='Phone'
					required
					placeholder='Enter your phone'
					type='tel'
					label='phone'
					error={errors.phone}
				/>
			</div>
			<Button onClick={() => {}} text='Next Step' type='submit' />
		</form>
	);
};
