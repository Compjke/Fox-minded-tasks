import cl from './galerry.module.scss';
import PropTypes from 'prop-types';

function Photos({ photoArr }) {
	console.log(photoArr);
	return (
		<ul className={cl.gallery__list}>
			{photoArr.map((el) => {
				return (
					<li key={el.id} className={cl.gallery__list__item}>
						<div className={cl.gallery__list__item__imgWrapper} data-name={el.tags}>
							<img src={el.webformatURL} alt='random photo' data={el.tags} />
						</div>
					</li>
				);
			})}
		</ul>
	);
}

Photos.propTypes = {
	photoArr: PropTypes.array,
};

export default Photos;
