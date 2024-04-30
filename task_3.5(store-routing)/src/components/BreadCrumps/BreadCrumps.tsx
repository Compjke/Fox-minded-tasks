import { NavLink, Outlet } from 'react-router-dom';
import style from './BreadCrumps.module.scss';
import clsx from 'clsx';
export const BreadCrumps = () => {

	return (
		<div className={'container-2'}>
			<ul className={style.breadCrumps}>
				<NavLink
					to={`card`}
					className={({ isActive, isPending }) =>
						isActive
							? clsx(style.active, style.navLink)
							: isPending
							? style.navLink
							: style.navLink
					}
				>
					Cart
				</NavLink>
				<NavLink
					to={`contact-info`}
					className={({ isActive, isPending }) =>
						isActive
							? clsx(style.active, style.navLink)
							: isPending
							? style.navLink
							: style.navLink
					}
				>
					Contact information
				</NavLink>
				<NavLink
            
					to={`shipment-info`}
					className={({ isActive, isPending }) =>
						isActive
							? clsx(style.active, style.navLink)
							: isPending
							? style.navLink
							: style.navLink
					}
				
				>
					Shipment information
				</NavLink>
			</ul>
			<Outlet />
		</div>
	);
};
