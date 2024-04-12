import { useEffect, useState } from 'react';
import { Spinner } from '../spinner/Spinner';
import cl from './galerry.module.scss';
import Photos from './Photos';
import data from '../../assets/data/data.json';

function Gallery() {
	const [gallery, setGallery] = useState([]);

	useEffect(() => {
		const { hits } = data;
		setGallery(hits);
	}, []);
	return (
		<div className={cl.gallery}>
			{gallery.length > 0 ? <Photos photoArr={gallery} /> : <Spinner />}
		</div>
	);
}

export default Gallery;
