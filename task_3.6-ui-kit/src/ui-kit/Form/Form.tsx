import { Button } from '@/ui-kit/Button';
import { Input } from '@/ui-kit/Input';
import style from './form.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
	.object({
		userName: yup.string().min(2).required(),
		password: yup
			.string()
			.min(5)
			.required('Password must been at least 5 symbols'),
	})
	.required();

export interface IForm {
	userName: string;
	password: string;
}

export const Form = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
		// formState,
	} = useForm<IForm>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IForm) => {
		console.log(data);
	};

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={style.fields}>
				<Input
					register={register}
					id='user-name'
					label='userName'
					required
					labelText='User name'
					placeholder='Enter your name'
					error={errors.userName}
				/>
				<Input
					id='password'
					register={register}
					label='password'
					labelText='Password'
					required
					placeholder='Enter your last name'
					error={errors.password}
				/>
			</div>
			<Button appereance='primary' label='submit'/>
		</form>
	);
};
