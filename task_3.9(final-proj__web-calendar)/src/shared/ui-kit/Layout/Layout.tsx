import { ReactNode } from '@tanstack/react-router';
import style from './layout.module.scss';
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
		<div className={style.root}>
			{headerSlot}
			<div>
				{sidebarSlot}
				{mainContentSlot}
			</div>
			{footerSlot}
		</div>
	);
};
