import { Button } from '@/ui-kit/Button';
import { InputField } from '@/ui-kit/InputField';
import { useForm } from 'react-hook-form';
import style from './shipmentForm.module.scss';
import { SelectField } from '@/ui-kit/SelectField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	orderInfoActions,
	useAppDispatch,
	useStateSelector,
} from '@/store';
import { redirect, useNavigate } from 'react-router-dom';

const schema = yup.object({
	address: yup.string().required('Address is required'),
	apartment: yup.string(),
	city: yup.string().required('City is required'),
	country: yup.string().required('Country is required'),
	state: yup.string().required('State is required'),
	zipCode: yup.string().required('Zip is required'),
});

export interface IFormShipmentValues {
	address: string;
	apartment?: string;
	city: string;
	country: string;
	state: string;
	zipCode: string;
}

export const ShipmentForm = () => {
	const { address, city, country, state, zipCode, apartment } =
		useStateSelector((s) => s.orderInfo.shipmentInfo);
	const dispatch = useAppDispatch();
	const navigate = useNavigate()
	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<IFormShipmentValues>({
		defaultValues: {
			address,
			city,
			country,
			state,
			zipCode,
			apartment,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IFormShipmentValues) => {
		dispatch(orderInfoActions.addShipmentInfo(data));
		navigate('/order-info')
	};

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={style.fields}>
				<div className={style.topFields}>
					<InputField
						required
						label='address'
						placeholder='Enter your adress'
						labelText='Address (No P. O. Boxes)'
						error={errors.address}
						register={register}
					/>
					<InputField
						placeholder='Enter your apartment information'
						labelText='Apartment, suite etc. (optional)'
						error={errors.apartment}
						label='apartment'
						register={register}
					/>
					<InputField
						required
						placeholder='Enter your city'
						labelText='City'
						label='city'
						error={errors.city}
						register={register}
					/>
				</div>
				<div className={style.bottomFields}>
					<SelectField
						error={errors.country}
						labelText='Country/Region'
						required
						register={register}
						options={['New York', 'Kiev', 'Raklyandiya']}
						label='country'
						placeholder='Select your country/region'
					/>
					<SelectField
						error={errors.state}
						labelText='State'
						required
						register={register}
						options={['Tam gde i ded bidon', 'Other']}
						label='state'
						placeholder='Select your state'
					/>
					<InputField
						error={errors.zipCode}
						labelText='ZIP code'
						required
						register={register}
						label='zipCode'
						placeholder='Enter your ZIP code'
					/>
				</div>
			</div>
			<Button text='Submit Form' type='submit' />
		</form>
	);
};
