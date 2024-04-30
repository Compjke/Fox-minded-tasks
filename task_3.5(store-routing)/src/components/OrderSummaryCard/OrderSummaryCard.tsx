import { useStateSelector } from '@/store';
import style from './orderSummaryCard.module.scss';
interface IProps {
	icon: JSX.Element;
	title: string;
}

export const OrderSummaryCard = ({ icon, title }: IProps) => {
	const prodBasket = useStateSelector((s) => s.products.basket);
	const { sum } = useStateSelector((s) => s.orderInfo.total);

	return (
		<div className={style.card}>
			<div className={style.top}>
				{icon}
				<h3 className={style.title}>{title}</h3>
			</div>
			<ul className={style.cardList}>
				{prodBasket.map(({ count, description, thumbnail, price }) => (
					<li className={style.item}>
						<div className={style.imgWrapper}>
							<img src={thumbnail} alt={description} />
						</div>
						<div className={style.productInfo}>
							<p className={style.prodDescription}>{description}</p>
							<p className={style.countPrice}>
								${price}, {count} {count > 1 ? 'products' : 'product'}
							</p>
						</div>
					</li>
				))}
			</ul>
			<div className={style.total}>
				<p className={style.light}>
					<span>Subtotal:</span>
					<span>${sum}</span>
				</p>
				<p className={style.light}>
					<span>Shipping & Handling: </span>
					<span>$0.00</span>
				</p>
				<p className={style.light}>
					<span>Tax: </span>
					<span>$0.00</span>
				</p>
				<p className={style.bold}>
					<span>Grand Total: </span>
					<span>${sum}</span>
				</p>
			</div>
		</div>
	);
};
