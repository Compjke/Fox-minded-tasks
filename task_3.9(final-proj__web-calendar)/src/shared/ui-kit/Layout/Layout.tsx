import { ReactNode } from '@tanstack/react-router';

interface LayoutSockets {
	headerSlot: ReactNode;
	sidebarSlot: ReactNode;
	mainContentSlot: ReactNode;
	footerSlot?: ReactNode;
}

export const Layout = ({
	headerSlot,
	mainContentSlot,
	footerSlot,
	sidebarSlot,
}: LayoutSockets) => {
	return (
		<div>
			<header>{headerSlot}</header>
			<div>
				{sidebarSlot}
				{mainContentSlot}
			</div>
			<footer>{footerSlot}</footer>
		</div>
	);
};
