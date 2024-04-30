import {
	ProductsEntity,
	isProductExistInBasket,
	productsActions,
	useAppDispatch,
	useStateSelector,
} from '@/store';
import { Button } from '@/ui-kit/Button';
import { AddedToCardIcon, PlusIcon } from '@/ui-kit/icons';
import { memo, useState } from 'react';
import style from './ProductItem.module.scss';
export interface IPropsProduct {
	imgSrc: string;
	id: number | string;
	title: string;
	description: string;
	price: number | string;
}

export const ProductItem = memo(
	({ description, id, thumbnail, price, title }: ProductsEntity) => {
		const dispatch = useAppDispatch();
		const handleAddToCard = () => {
			dispatch(productsActions.addToBasket(id));
		};
		const isProdInBasket = useStateSelector((s) =>
			isProductExistInBasket(s, id)
		);

		return (
			<li className={style.card}>
				<div className={style.cardImgWrapper}>
					<img className={style.cardImg} src={thumbnail} alt={title} />
				</div>
				<div className={style.info}>
					<h3 className={style.cardTitle}>{title}</h3>
					<p className={style.cardDesqr}>{description}</p>
					<p className={style.cardPrice}>${price}</p>
					<Button
						onClick={() => {
							console.log(id);
							handleAddToCard();
						}}
						className={style.cardBtn}
						disabled={isProdInBasket}
						text={isProdInBasket ? 'Added' : 'Add to card'}
						icon={isProdInBasket ? <AddedToCardIcon /> : <PlusIcon />}
					/>
				</div>
			</li>
		);
	}
);
