import { ReactNode } from 'react';
import { useToast } from './ui-kit/Toast';

function App() {
	const toasts = useToast();
	return (
		<div style={{ padding: '15px' }}>
			<h1>Toasts</h1>
			{toasts?.showToast('Error', 'error') as ReactNode}
			{toasts?.showToast('Success', 'success') as ReactNode}
		</div>
	);
}

export default App;
