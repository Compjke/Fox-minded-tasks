import { useStateSelector } from '@/store';
import { Navigate, useNavigate } from 'react-router-dom';
import style from './OrderInfoPage.module.scss';
import {
	ContactInfoIcon,
	ShipmentInfoIcon,
	SuccesOrderIcon,
	SummaryOrderIcon,
} from '@/ui-kit/icons';
import { OrderInfoCard } from '@/components/OrderInfoCard';
import { OrderSummaryCard } from '@/components/OrderSummaryCard';
import { Button } from '@/ui-kit/Button';
import clsx from 'clsx';
import { ROUTES } from '@/routes/routes';
export const OrderInfoPage = () => {
	const { isOrderReady, contactInfo, shipmentInfo } = useStateSelector(
		(s) => s.orderInfo
	);
	const navigate = useNavigate();
	if (!isOrderReady) {
		return <Navigate to='/' replace />;
	}

	return (
		<div className={clsx('container-2', style.page)}>
			<div className={style.infoText}>
				<SuccesOrderIcon />
				<h2 className={style.heading}>Thank you for your order!</h2>
				<p className={style.infoEmail}>
					The order confirmation email with details of your order and a link to
					track its progress has been sent to your email address.
				</p>
				<p className={style.orderStatus}>Your order # is 000000003 - PENDING</p>
				<p className={style.orderDate}>
					Order Date:{' '}
					{new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}
				</p>
			</div>

			<div className={style.personalInfo}>
				<OrderInfoCard
					heading='Contact Information'
					icon={<ContactInfoIcon />}
					info={Object.values(contactInfo)}
				/>
				<OrderInfoCard
					heading='Shipment information'
					icon={<ShipmentInfoIcon />}
					info={Object.values(shipmentInfo)}
				/>
			</div>
			<OrderSummaryCard icon={<SummaryOrderIcon />} title='Order summary' />

			<Button
				text='Continue shopping'
				className={style.btn}
				onClick={() => navigate(ROUTES.Root)}
			/>
		</div>
	);
};
