import { useEffect, useMemo, useState } from 'react';
import { PageTitle } from '@/ui-kit/PageTitle';
import { ProductCardBasket } from '@/components/ProductCardBasket';
import {
	orderInfoActions,
	productsActions,
	useAppDispatch,
	useStateSelector,
} from '@/store';
import type { ProductCardBasket as ProductProps } from '@/store';
import { Button } from '@/ui-kit/Button';
import style from './BasketPage.module.scss';
import { unstable_usePrompt, useBlocker, useNavigate } from 'react-router-dom';

export const BasketPage = () => {
	const prodInBasket = useStateSelector((s) => s.products.basket);
	const dispatch = useAppDispatch();
	// Block navigating elsewhere when data has been entered into the input
	// unstable_usePrompt({
	// 	message: 'Are you sure?',
	// 	when: ({ currentLocation, nextLocation }) =>
	// 		value !== '' && currentLocation.pathname !== nextLocation.pathname,
	// });
	const blocker = useBlocker(
		({ currentLocation, historyAction, nextLocation }) => {
			// console.log('curLocation: ', currentLocation);
			// console.log('historyActon: ', historyAction);
			// console.log('nextLocation: ', nextLocation);
			if (
				historyAction === 'POP' ||
				historyAction === 'REPLACE' ||
				nextLocation.pathname === '/'
			) {
				return false;
			}
			return (
				prodInBasket.length < 1 ||
				nextLocation.pathname === '/info/shipment-info'
			);
		}
	);
	// console.log(blocker);
	const navigate = useNavigate();
	const countTotal = useMemo(
		() =>
			prodInBasket.reduce(
				(acc, { price, count }) => {
					acc.sum += price * count;
					acc.totalCount += count;
					return acc;
				},
				{ sum: 0, totalCount: 0 }
			),
		[prodInBasket]
	);

	useEffect(() => {
		dispatch(orderInfoActions.updateTotalPrice(countTotal));
	}, [countTotal, dispatch]);

	useEffect(() => {
		if (
			blocker.state === 'blocked' &&
			blocker.location.pathname === '/info/contact-info'
		) {
			// Notification.requestPermission()
			// .then(permission => {
			// 	if(permission === 'granted'){
			// 		new Notification('ne mojesh')
			// 	}
			// })
			alert('Need to add something to proceed to checkout');
		}
		if (
			blocker.state === 'blocked' &&
			blocker.location.pathname === '/info/shipment-info'
		) {
			// Notification.requestPermission()
			// .then(permission => {
			// 	if(permission === 'granted'){
			// 		new Notification('ne mojesh')
			// 	}
			// })
			alert('Fill previous step');
		}
	}, [blocker, prodInBasket.length]);

	const renderProdInBasket = (prodInBasket: ProductProps[]) => {
		if (!prodInBasket.length) {
			return <div style={{ textAlign: 'center' }}>Your basket is empty 🧺</div>;
		}
		return (
			<ul className={style.productList}>
				{prodInBasket.map(
					({
						id,
						description,
						price,
						thumbnail,
						title,
						count,
					}: ProductProps) => (
						<ProductCardBasket
							key={id}
							id={id}
							count={count}
							description={description}
							imgSrg={thumbnail}
							title={title}
							price={price}
							className=''
						/>
					)
				)}
			</ul>
		);
	};

	return (
		<div className={style.cardPage}>
			<PageTitle text='Card' />
			{renderProdInBasket(prodInBasket)}
			<div className={style.total}>
				<p>
					Together:{' '}
					<span>
						{countTotal.totalCount}{' '}
						{countTotal.totalCount > 1 ? 'products' : 'product'}
					</span>
				</p>
				<p>
					Sum: <span>${countTotal.sum}</span>
				</p>
			</div>
			{countTotal.totalCount > 0 && (
				<Button
					onClick={() => navigate('/info/contact-info')}
					className={style.btnNextStep}
					text='Next Step'
				/>
			)}{' '}
		</div>
	);
};
