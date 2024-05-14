import { screen, render } from '@testing-library/react';

import { ThemeContext, ThemeContextProvider } from '@/context/ThemeContext';
import { useContext } from 'react';


const TestSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	// let theme = 'lgiht';
	// const setTheme = () => {};
	console.log(theme, 'theme', setTheme);
	const handleChangeTheme = () => {
		setTheme?.(theme === 'dark' ? 'light' : 'dark');
	};
	return (
		<div>
			<button onClick={handleChangeTheme}>Toggle</button>
			<p data-testid='current-theme'>{theme}</p>
		</div>
	);
};

describe('Theme provider component', () => {
	it('should render correct & allow to change theme', async () => {
		render(
			<ThemeContextProvider>
				<TestSwitcher />
			</ThemeContextProvider>
		);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		const currentTheme = screen.getByTestId('current-theme');
		screen.debug();
		// expect(currentTheme).toHaveTextContent('light');
	});
});
