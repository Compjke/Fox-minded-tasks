import { useEffect, useMemo } from 'react';
import { PageTitle } from '@/ui-kit/PageTitle';
import { ProductCardBasket } from '@/components/ProductCardBasket';
import {
	orderInfoActions,
	useAppDispatch,
	useStateSelector,
} from '@/store';
import type { ProductCardBasket as ProductProps } from '@/store';
import { Button } from '@/ui-kit/Button';
import style from './BasketPage.module.scss';
import {  useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';

export const BasketPage = () => {
	const prodInBasket = useStateSelector((s) => s.products.basket);
	const dispatch = useAppDispatch();

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


	if (!prodInBasket.length) {
		return <div style={{ textAlign: 'center' }}>Your basket is empty 🧺</div>;
	}

	return (
		<div className={style.cardPage}>
			<PageTitle text='Card' />
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
					onClick={() => navigate(ROUTES.ContactInfo)}
					className={style.btnNextStep}
					text='Next Step'
				/>
			)}{' '}
		</div>
	);
};
