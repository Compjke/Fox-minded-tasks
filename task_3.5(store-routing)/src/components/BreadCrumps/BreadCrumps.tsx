import { NavLink, Outlet } from 'react-router-dom';
import style from './BreadCrumps.module.scss';
import clsx from 'clsx';
import { useStateSelector } from '@/store';
import { MouseEventHandler } from 'react';
import { ROUTES } from '@/routes/routes';
export const BreadCrumps = () => {
	// const location = useLocation()
	const contactInfo = useStateSelector((s) => s.orderInfo.contactInfo);
	const isSomeThingInBAsket =
		useStateSelector((s) => s.products.basket).length > 0;

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e): void => {
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
					to={ROUTES.CardInfo}
					className={({ isActive }) =>
						clsx(style.navLink, isActive && style.active)
					}
				>
					Cart
				</NavLink>
				<NavLink
					replace
					to={ROUTES.ContactInfo}
					onClick={handleClick}
					className={({ isActive }) =>
						clsx(style.navLink, isActive && style.active)
					}
				>
					Contact information
				</NavLink>
				<NavLink
					replace
					onClick={handleClick}
					to={ROUTES.ShipmentInfo}
					className={({ isActive }) =>
						clsx(style.navLink, isActive && style.active)
					}
				>
					Shipment information
				</NavLink>
			</ul>
			<Outlet />
		</div>
	);
};
