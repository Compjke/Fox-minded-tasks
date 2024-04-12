import { useEffect, useState } from 'react';
import cl from './header.module.scss';
import dateFormat from 'dateformat';
function Header() {
	return (
		<header className={cl.header}>
			<div className={cl.header__inner}>
				<Time />
				<div className={cl.header__system}>
					<img
						src='/public/system.png'
						alt='system-icons'
					/>
				</div>
			</div>
		</header>
	);
}

function Time() {
	const [currentTime, setcurrentTime] = useState(null);

	useEffect(() => {
		const now = dateFormat(new Date(), 'isoTime');
		const interval = setInterval(() => {
			setcurrentTime(now);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [currentTime]);

	return (
		<div className={cl.header__time}>
			{currentTime ? currentTime : dateFormat(new Date(), 'isoTime')}
		</div>
	);
}

export default Header;
