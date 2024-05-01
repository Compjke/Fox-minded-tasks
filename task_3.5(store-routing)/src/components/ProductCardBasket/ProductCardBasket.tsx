import { Button } from '@/ui-kit/Button';
import style from './PProductCardBasket.module.scss';
import { DeleteIcon, MinusIcon, PlusIcon } from '@/ui-kit/icons';
import clsx from 'clsx';
import { productsActions, useAppDispatch, useStateSelector } from '@/store';

interface IProps {
	className?: string;
	imgSrg: string;
	description: string;
	price: number;
	count: number;
	title: string;
	id?: number;
}

export const ProductCardBasket = ({
	count,
	description,
	imgSrg,
	price,
	className,
	title,
	id,
}: IProps) => {
	const dispatch = useAppDispatch();
	
	const handleIncrementProduct = (id) => {};

	return (
		<li className={clsx(className, style.card)}>
			<div className={style.cardImgWrapper}>
				<img src={imgSrg} alt={title} />
			</div>
			<div className={style.cardInfo}>
				<div className={style.cardInfoTop}>
					<p className={style.description}>{description}</p>
					<Button
						className={style.deleteBtn}
						onClick={() => dispatch(productsActions.deleteProduct(id))}
						text='Delete'
						icon={<DeleteIcon />}
					/>
				</div>
				<div className={style.cardInfoBottom}>
					<div className={style.cardActions}>
						<Button
							className={style.cardAction}
							onClick={() =>
								dispatch(
									productsActions.changeCountProd({ id, type: 'decrement' })
								)
							}
							icon={<MinusIcon />}
							disabled={count === 1}
						/>

						<span>{count}</span>
						<Button
							className={style.cardAction}
							onClick={() =>
								dispatch(
									productsActions.changeCountProd({ id, type: 'increment' })
								)
							}
							icon={<PlusIcon />}
						/>
					</div>
					<div className={style.price}>
						Price:<span>${price * count}</span>
					</div>
				</div>
			</div>
		</li>
	);
};
