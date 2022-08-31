import styles from './ResultModal.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Dispatch, SetStateAction } from 'react';
import Modal from '../../../../../../../../lib/CommonComponents/UI/Modal/Modal';
import IconButton from '../../../../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Props {
	picture: string;
	type: string;
	location: string;
	price: string;
	description: string;
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
}

const ResultModal = ({
	picture,
	type,
	location,
	price,
	description,
	visibility,
	setVisibility
}: Props) => {

	return (
		<Modal
			visibility={visibility}
			setVisibility={setVisibility}
		>
			<div className={styles['main']}>
				<div className={styles['imageContainer']}>
					<div className={styles['imageNavigationContainer']}>
						<div className={styles['arrowContainer']}>
							<NavigateBeforeIcon
								style={{
									fontSize: 'var(--fontSizeLargerIcon)',
									color: 'var(--colorWhite)'
								}}
							/>
						</div>
						<div className={styles['arrowContainer']}>
							<NavigateNextIcon
								style={{
									fontSize: 'var(--fontSizeLargerIcon)',
									color: 'var(--colorWhite)'
								}}
							/>
						</div>
					</div>
					<img className={styles['image']} src={picture}></img>
				</div>
				<div className={styles['infoContainer']}>
					<div className={styles['typeAndLocationTextContainer']}>
						<p className={styles['typeText']}>{type}</p>
						<p className={styles['locationText']}>
							{location}
						</p>
						<p className={styles['locationText']}>
							{'Keskuskatu 378'}
						</p>
					</div>
					<div className={styles['contactTextContainer']}>
						<p className={styles['contactText']}>
							{'+358407843451'}
						</p>
						<p className={styles['contactText']}>
							{'patenposti@posti.com'}
						</p>
					</div>
				</div>
				<p className={styles['priceText']}>{price}€</p>
				<div className={styles['descriptionTextContainer']}>
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
							border={'1px solid var(--colorGrey)'}
							padding={'5px'}
							margin={'5px'}
							iconFontSize={'var(--fontSizeMediumIcon)'}
						/>
						<IconButton
							labelIcon={VisibilityOffIcon}
							labelColor={'var(--colorDarkGrey)'}
							onClickFunction={() => {
								console.log('Piilota');
								setVisibility(false);
							}}
							buttonColor={'var(--colorWhite)'}
							border={'1px solid var(--colorGrey)'}
							padding={'5px'}
							margin={'5px'}
							iconFontSize={'var(--fontSizeMediumIcon)'}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ResultModal;