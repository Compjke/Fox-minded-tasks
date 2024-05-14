import { useLocalStorage } from '@/hooks';
import { ReactNode, createContext, useEffect } from 'react';

// interface IThemeContext {
// 	theme?: string;
// 	setTheme?: (theme: string) => void;
// }

export const ThemeContext = createContext([]);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	// const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalStorage('theme', 'light');

	useEffect(() => {
		const root = document.querySelector(':root');
		if (theme === 'dark') root?.classList.add('dark');
		else root?.classList.remove('dark');
	});
	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};
