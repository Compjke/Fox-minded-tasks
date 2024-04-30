import { ShipmentForm } from '@/components/ShipmentForm';
import { PageTitle } from '@/ui-kit/PageTitle';


export const ShipmentFormPage = () => {
	return (
		<div>
			<PageTitle text='Shipment information' />
			<ShipmentForm/>
		</div>
	);
};
