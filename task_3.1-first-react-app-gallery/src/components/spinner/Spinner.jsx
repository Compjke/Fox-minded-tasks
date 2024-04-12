import { FidgetSpinner } from 'react-loader-spinner';

export const Spinner = () => {
	return (
		<FidgetSpinner
			height={50}
			width={50}
			backgroundColor='rgba(0,0,0,0.4)'
			ballColors={['#ffac00', '#00ff00', '#0000ff']}
		/>
	);
};
