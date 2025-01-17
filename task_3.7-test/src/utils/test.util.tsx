import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeContextProvider } from '@/context/index';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
