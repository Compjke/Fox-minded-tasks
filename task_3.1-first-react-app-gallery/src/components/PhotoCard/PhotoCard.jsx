import cl from './PhotoCard.module.scss';
import PropTypes from 'prop-types';

export const PhotoCard = ({ cardData }) => {
	const { webformatURL, tags } = cardData;

	return (
		<li className={cl.card}>
			<div className={cl.card__img__wrapper} data-text={tags}>
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
