import { useEffect, useState } from 'react';
import Ad from './Components/Ad/Ad';
import styles from './Ads.module.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { AdType } from '../../../../types/AdTypes';

const Ads = () => {
	const [adsState, setAdsState] = useState([]);

	useEffect(() => {
		axios.get('/api/Ad')
			.then((response) => {
				const data = response.data;
				setAdsState(data);
			});
	}, []);

	return (
		<div className={styles['main']}>
			<div className={styles['adsContainer']}>
				{adsState.map((ad: AdType) => {
					return <Ad
						key={uuidv4()}
						type={ad.type.name}
						images={ad.images}
						location={ad.address.streetAddress}
						price={ad.price}
						description={ad.description}
					/>;
				})}
			</div>
		</div>
	);
};

export default Ads;