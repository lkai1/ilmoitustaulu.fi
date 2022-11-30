import styles from './AdModal.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Dispatch, SetStateAction } from 'react';
import Modal from '../../../../../../../../lib/CommonComponents/UI/Modal/Modal';
import IconButton from '../../../../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageIcon from '@mui/icons-material/Image';

interface Props {
	images: [{ id: number; image: string; }];
	type: string;
	location: string;
	price: number;
	description: string;
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
}

const AdModal = ({
	images,
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
					<div className={styles['imageContainer']}>
						{images[0] ?
							<div>
								<img className={styles['backgroundImage']}
									src={images[0].image}></img>
								<img className={styles['image']}
									src={images[0].image}></img>
							</div>
							:
							<ImageIcon style={{
								width: '100%', height: '230px', color: 'var(--colorLightGrey)'
							}} />
						}
					</div>
				</div>
				<p className={styles['typeText']}>{type}</p>
				<div className={styles['infoContainer']}>
					<div className={styles['typeAndLocationTextContainer']}>
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
							border={'1px solid var(--colorLightGrey)'}
							padding={'5px'}
							margin={'5px'}
							iconFontSize={'var(--fontSizeMediumIcon)'}
							title={'Lisää suosikiksi'}
						/>
						<IconButton
							labelIcon={VisibilityOffIcon}
							labelColor={'var(--colorDarkGrey)'}
							onClickFunction={() => {
								setVisibility(false);
							}}
							buttonColor={'var(--colorWhite)'}
							border={'1px solid var(--colorLightGrey)'}
							padding={'5px'}
							margin={'5px'}
							iconFontSize={'var(--fontSizeMediumIcon)'}
							title={'Piilota'}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AdModal;