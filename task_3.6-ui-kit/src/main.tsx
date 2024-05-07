import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ThemeContextProvider } from './context/ThemeContext.tsx';
import { ToastProvider } from './context/ToastContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<ToastProvider>
				<App />
			</ToastProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);
