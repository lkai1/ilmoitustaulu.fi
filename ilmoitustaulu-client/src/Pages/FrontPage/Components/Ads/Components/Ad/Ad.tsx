import styles from './Ad.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from 'react';
import IconButton from '../../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import AdModal from './Components/AdModal/AdModal';
import ImageIcon from '@mui/icons-material/Image';

interface Props {
	images: [{ id: number; image: string; }];
	type: string;
	location: string;
	price: number;
	description: string;
}

const Ad = ({
	images,
	type,
	location,
	price,
	description
}: Props) => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles['main']}>
			<div className={styles['imageContainer']}>
				{images[0] ?
					<div>
						<img className={styles['backgroundImage']} src={images[0].image}></img>
						<img className={styles['image']} src={images[0].image}></img>
					</div>
					:
					<ImageIcon style={{
						padding: 0, margin: 0,
						width: '100%', height: '100%', color: 'var(--colorLightGrey)'
					}} />
				}
			</div>
			<div className={styles['infoContainer']}>
				<p className={styles['typeText']}>{type}</p>
				<p className={styles['locationText']}>
					{location}
				</p>
				<p className={styles['priceText']}>{price}€</p>
			</div>
			<div className={styles['descriptionTextContainer']}>
				<div className={styles['descriptionTextFader']}></div>
				<p className={styles['descriptionText']}>
					{description}
				</p>
			</div>
			<div className={styles['buttonsContainer']}>
				<div className={styles['leftButtons']}>
					<IconButton
						labelIcon={FavoriteBorderIcon}
						labelColor={'var(--colorPastelRed)'}
						onClickFunction={() => { console.log('Suosikki'); }}
						buttonColor={'var(--colorWhite)'}
						border={'1px solid var(--colorLightGrey)'}
						padding={'5px'}
						margin={'5px'}
						iconFontSize={'var(--fontSizeMediumIcon)'}
						title={'Lisää suosikiksi'}
					/>
					<IconButton
						labelIcon={VisibilityOffIcon}
						labelColor={'var(--colorDarkGrey)'}
						onClickFunction={() => { console.log('Piilota'); }}
						buttonColor={'var(--colorWhite)'}
						border={'1px solid var(--colorLightGrey)'}
						padding={'5px'}
						margin={'5px'}
						iconFontSize={'var(--fontSizeMediumIcon)'}
						title={'Piilota'}
					/>
				</div>
				<div className={styles['rightButtons']}>
					<IconButton
						labelIcon={OpenInFullIcon}
						labelColor={'var(--colorLightBlack)'}
						onClickFunction={() => { setIsModalOpen(!isModalOpen); }}
						buttonColor={'var(--colorWhite)'}
						border={'1px solid var(--colorLightGrey)'}
						padding={'5px'}
						margin={'5px'}
						iconFontSize={'var(--fontSizeMediumIcon)'}
						title={'Avaa isompana'}
					/>
				</div>
			</div>
			<AdModal
				images={images}
				type={type}
				location={location}
				price={price}
				description={description}
				visibility={isModalOpen}
				setVisibility={setIsModalOpen}
			/>
		</div>
	);
};

export default Ad;