import { FormContact } from '@/components/FormContact';
// import { useStateSelector } from '@/store';

import { PageTitle } from '@/ui-kit/PageTitle';
// import { useEffect } from 'react';

// import { useBlocker } from 'react-router-dom';

export const ContactInfoForm = () => {
	// const contactInfo = useStateSelector((s) => s.orderInfo.contactInfo);
	// const blocker = useBlocker(
	// 	({ nextLocation }) =>
	// 		nextLocation.pathname === '/info/shipment-info' &&
	// 		Object.values(contactInfo).every((f) => f === '')
	// );

	// useEffect(() => {
	// 	if (blocker.state === 'blocked') {
	// 		alert(
	// 			'Please complete this form to proceed to the next ste and click "Next step"'
	// 		);
	// 	}
	// }, [blocker , contactInfo]);
	return (
		<div>
			<PageTitle text='Contact information' />
			{/* <FormContact blocker={blocker} /> */}
			<FormContact  />
		</div>
	);
};
