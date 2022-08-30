import styles from './Result.module.css';
import placeholder from './placeholder.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from 'react';
import Modal from '../../../../../../CommonComponents/UI/Modal/Modal';
import IconButton from '../../../../../../CommonComponents/Buttons/IconButton/IconButton';

const Result = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	//refactor this last
	return (
		<div className={styles['main']}>
			<Modal
				visibility={isModalOpen}
				setVisibility={setIsModalOpen}
			>
				<div></div>
			</Modal>
			<div className={styles['imageContainer']}>
				<img className={styles['image']} src={placeholder}></img>
			</div>
			<div className={styles['infoContainer']}>
				<p className={styles['typeText']}>MYYDÄÄN</p>
				<p className={styles['locationText']}>
					Pohjois-pohjanmaa, Helsinki
				</p>
				<p className={styles['priceText']}>475€</p>
			</div>
			<div className={styles['descriptionTextContainer']}>
				<div className={styles['descriptionTextFader']}></div>
				<p className={styles['descriptionText']}>
					Myydään kuvassa näkyvä ehjä ja täysin toimiva puuvene.
					Mukaan tulee airot ja 2 kappaletta pelastusliivejä.
					hugytfdrfghujikolpkojihugyftgyhuhjhghfghjihgfghjikjhkugfhjkjhgfhjhjghgh
					Mutta jos teet sen niin ettäsillä ei o
				</p>
			</div>
			<div className={styles['buttonsContainer']}>
				<div className={styles['leftButtons']}>
					<IconButton
						labelIcon={FavoriteBorderIcon}
						labelColor={'red'}
						onClickFunction={() => { console.log('Suosikki'); }}
						buttonColor={'var(--colorWhite)'}
						border={'1px solid var(--colorGrey)'}
						padding={'5px'}
						margin={'5px'}
						iconFontSize={'var(--fontSizeMediumIcon)'}
					/>
					<IconButton
						labelIcon={VisibilityOffIcon}
						labelColor={'var(--colorBlack)'}
						onClickFunction={() => { console.log('Piilota'); }}
						buttonColor={'var(--colorWhite)'}
						border={'1px solid var(--colorGrey)'}
						padding={'5px'}
						margin={'5px'}
						iconFontSize={'var(--fontSizeMediumIcon)'}
					/>
				</div>
				<div className={styles['rightButtons']}>
					<IconButton
						labelIcon={OpenInFullIcon}
						labelColor={'var(--colorBlack)'}
						onClickFunction={() => { setIsModalOpen(!isModalOpen); }}
						buttonColor={'var(--colorWhite)'}
						border={'1px solid var(--colorGrey)'}
						padding={'5px'}
						margin={'5px'}
						iconFontSize={'var(--fontSizeMediumIcon)'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Result;