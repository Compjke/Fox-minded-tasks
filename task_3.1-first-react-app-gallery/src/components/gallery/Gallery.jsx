import style from './Galerry.module.scss';
import data from '../../assets/data/data.json';
import { PhotoCard } from '../PhotoCard/PhotoCard';

export const Gallery = () => {
	const { hits } = data;

	return (
		<div className={style.gallery}>
			{
				<ul className={style.galleryList}>
					{hits.map((card) => (
						<PhotoCard cardData={card} key={card.id} />
					))}
				</ul>
			}
		</div>
	);
};
