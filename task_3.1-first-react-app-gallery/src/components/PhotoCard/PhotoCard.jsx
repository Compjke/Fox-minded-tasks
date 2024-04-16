import style from './PhotoCard.module.scss';
import PropTypes from 'prop-types';

export const PhotoCard = ({ cardData }) => {
	const { webformatURL, tags } = cardData;

	return (
		<li className={style.card}>
			<div className={style.cardImgWrapper} data-text={tags}>
				<img src={webformatURL} alt='' />
			</div>
		</li>
	);
};

PhotoCard.propTypes = {
	cardData: PropTypes.shape({
		webformatURL: PropTypes.string.isRequired,
		tags: PropTypes.string,
	}),
};
