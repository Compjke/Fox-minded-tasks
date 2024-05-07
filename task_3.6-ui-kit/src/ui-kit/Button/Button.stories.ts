import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/ui-kit/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		bgColor: { control: 'color' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn(), isPlay: false },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NoIconPrimary: Story = {
	args: {
		appereance: 'primary',
		label: 'Primary',
		isPlay: true,
	},
};

export const WithIconPrimary: Story = {
	args: {
		appereance: 'primary',
		label: 'Primary',
		withIcon: true,
		isPlay: true,
	},
};

export const NoIconSecondary: Story = {
	args: {
		appereance: 'secondary',
		label: 'Secondary',
	},
};

export const WithIconSecondary: Story = {
	args: {
		appereance: 'secondary',
		label: 'Secondary',
		withIcon: true,
	},
};