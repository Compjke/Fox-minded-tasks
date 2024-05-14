import { screen, render } from '@testing-library/react';

import { ToastProvider } from './ToastContext';
import { Toast } from './Toast';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { useToast } from './useToast';

const onClose = vi.fn();
const toasts = [
	<Toast id={1} message='Toast info' onClose={onClose} />,
	<Toast id={2} type='error' message='Toast error' onClose={onClose} />,
];

describe('Toast component', () => {
	it('renders without crashing', () => {
		render(<Toast id={1} message='Message' onClose={() => {}} />);
		expect(screen.getByText(/message/i)).toBeInTheDocument();
	});
	it('should render correct toast depend on type', () => {
		const { getByTestId } = render(
			<Toast id={2} type='success' message='Message' onClose={() => {}} />
		);
		expect(getByTestId('toast')).toHaveClass('success');
	});
	it('should clsoe toast after click close button', async () => {
		const { getByRole, queryByTestId } = render(
			<Toast id={2} type='success' message='Message' onClose={onClose} />
		);
		const btn = getByRole('button');

		await userEvent.click(btn);
		expect(onClose).toHaveBeenCalled();
		// expect(queryByTestId('toast')).toBeNull();
	});
});

describe('Toast conext component', () => {
	it('provides expected ToastCOntext obj to child elements', () => {
		const { getByText } = render(
			<ToastProvider>
				<Toast id={1} message='Message' onClose={() => {}} />
			</ToastProvider>
		);
		expect(useToast).toBeDefined();
		expect(getByText(/message/i)).toHaveTextContent('Message');
	});

});
