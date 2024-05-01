import { NavLink, Outlet, useLocation } from 'react-router-dom';
import style from './BreadCrumps.module.scss';
import clsx from 'clsx';
import { useStateSelector } from '@/store';
import { MouseEventHandler } from 'react';
export const BreadCrumps = () => {
	// const location = useLocation()
	const contactInfo = useStateSelector((s) => s.orderInfo.contactInfo);
	const isSomeThingInBAsket =
		useStateSelector((s) => s.products.basket).length > 0;

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		const path = e.target.pathname.split('/')[2];
		console.log(path);

		switch (path) {
			case 'contact-info':
				if (!isSomeThingInBAsket) {
					alert('Add something in basket for next step');
					e.preventDefault();
				}
				break;
			case 'shipment-info':
				if (!isSomeThingInBAsket) {
					alert('Add something in basket for next step');
					e.preventDefault();
				} else if (Object.values(contactInfo).every((f) => f === '')) {
					alert('Fill contact info for next step');
					e.preventDefault();
				}
				break;
			default:
				return;
		}
	};

	return (
		<div className={'container-2'}>
			<ul className={style.breadCrumps}>
				<NavLink
					onClick={handleClick}
					replace
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
					replace
					to={`contact-info`}
					onClick={handleClick}
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
					replace
					onClick={handleClick}
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
