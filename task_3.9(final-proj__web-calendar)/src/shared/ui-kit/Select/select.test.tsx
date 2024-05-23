import { screen, render } from '@testing-library/react';

import { Select } from './Select';
import { vi } from 'vitest';
import { getTimesArr } from '@/shared/libs/time';
import dayjs from 'dayjs';
import userEvent from '@testing-library/user-event';
// import { InputHTMLAttributes } from 'react';

describe('Select time component', () => {
	const options = getTimesArr();
	const onSelect = vi.fn();
	it('should render select time component', () => {
		render(<Select label='Test label' options={options} onSelect={() => {}} />);

		expect(screen.getByText(/Test label/i)).toBeInTheDocument();
	});
	it('should be current time in select time component by default', () => {
		const { getByRole } = render(
			<Select label='Test label' options={options} onSelect={() => {}} />
		);
		const input = getByRole('textbox').value;
		expect(input).toEqual(dayjs().format('HH:mm a'));
	});
	it('should be hide select iptions by default', () => {
		const { queryByRole } = render(
			<Select label='Test label' options={options} onSelect={() => {}} />
		);
		const list = queryByRole('listbox');
		expect(list).not.toBeInTheDocument();
	});
	it('should show select options when hover on select', async () => {
		const { getByRole } = render(
			<Select label='Test label' options={options} onSelect={onSelect} />
		);
		const input = getByRole('textbox');
		await userEvent.hover(input, {});
		const list = getByRole('list');
		expect(list).toBeInTheDocument();
	});
	it('should highlight selected item', async () => {
		const { getByRole, getAllByTestId } = render(
			<Select label='Test label' options={options} onSelect={onSelect} />
		);
		const input = getByRole('textbox');
		await userEvent.hover(input, {});
		const items = getAllByTestId('select-item');
		await userEvent.click(items[0]);
		expect(items[0]).toHaveClass('selected');
	});
});
