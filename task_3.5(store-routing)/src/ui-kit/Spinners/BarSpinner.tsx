import { CSSProperties } from 'react';
import { BarLoader } from 'react-spinners';

const override: CSSProperties = {
	display: 'block',
	margin: '20% auto',
	borderColor: 'green',
};

export function BarSpinner() {
	return (
		<BarLoader
			color='#00ae1c'
			cssOverride={override}
			loading
			height={10}
			width={'90%'}
			aria-label='Loading Spinner'
			data-testid='loader'
		/>
	);
}
