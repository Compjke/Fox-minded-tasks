import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';


const meta = {
	title: 'Select',
	component: Select,
	tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectDefault: Story = {
	args: {
		isOpen : false,
      label : 'Time'
      
	},
};
export const SelectOpened: Story = {
	args: {
		isOpen : true,
      label : 'Time'

	},
};
