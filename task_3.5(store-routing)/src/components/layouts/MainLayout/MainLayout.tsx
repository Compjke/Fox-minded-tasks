import { ReactNode } from 'react';
import { Header } from '../../Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
