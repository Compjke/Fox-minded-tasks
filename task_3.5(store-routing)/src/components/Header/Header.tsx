import clsx from 'clsx';
import style from './Header.module.scss';
import { BasketIcon } from '@/ui-kit/icons';
import { Button } from '@/ui-kit/Button';
import { Link } from 'react-router-dom';
import {useStateSelector } from '@/store';

export const Header = () => {
	const dataCount = useStateSelector((s) => s.products.basket).length;
	return (
		<header className={style.header}>
			<div className={clsx(style.headerInner, 'container')}>
				<Link to='/'>
					<img src='/images/logo.svg' alt='' />
				</Link>
				<Link to='/info/card'>
					<Button
						className={style.cardButton}
						text='Cart'
						onClick={() => {}}
						icon={<BasketIcon />}
						data_count={dataCount.toString()}
					/>
				</Link>
			</div>
		</header>
	);
};
