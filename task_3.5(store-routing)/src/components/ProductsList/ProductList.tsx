import { useStateSelector } from '@/store';
import style from './ProductList.module.scss';
import { ProductItem } from '../ProductCard';
import clsx from 'clsx';

// export const ProductList = ({ products }: { products: ProductsEntity[] }) => {
export const ProductList = () => {
	const prod = useStateSelector((state) => state.products.productsArray);
	
	return (
		<ul className={clsx(style.productList, 'container')}>
			{prod?.length > 1 &&
				prod?.map(
					({ id, description, thumbnail, title, price }) => (
						<ProductItem
							key={id}
							description={description}
							id={id}
							thumbnail={thumbnail}
							price={price}
							title={title}
						/>
					)
				)}
		</ul>
	);
};
