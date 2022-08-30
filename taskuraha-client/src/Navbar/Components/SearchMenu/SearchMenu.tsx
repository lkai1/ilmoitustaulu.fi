import styles from './SearchMenu.module.css';
import { useState } from 'react';
import LocationSelection
	from './Components/LocationSelection/LocationSelection';
import PriceInput from './Components/PriceInput/PriceInput';
import TypeSelection from './Components/TypeSelection/TypeSelection';
import CategorySelection
	from './Components/CategorySelection/CategorySelection';
import SearchIcon from '@mui/icons-material/Search';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Modal from '../../../CommonComponents/UI/Modal/Modal';
import IconButton from '../../../CommonComponents/Buttons/IconButton/IconButton';

const SearchMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className={styles['main']}>
			<IconButton
				label={'Ilmoitusten haku'}
				labelIcon={OpenInFullIcon}
				onClickFunction={() => { setIsMenuOpen(!isMenuOpen); }}
				iconFontSize={'var(--fontSizeMediumIcon)'}
				buttonColor={'var(--colorBrightBlue)'}
				labelFontSize={'var(--fontSizeMedium)'}
				labelColor={'var(--colorWhite)'}
			/>
			<Modal
				visibility={isMenuOpen}
				setVisibility={setIsMenuOpen}
			>
				<div className={styles['menu']}>
					<TypeSelection />
					<CategorySelection />
					<LocationSelection />
					<PriceInput />
					<IconButton
						label={'Hae'}
						labelIcon={SearchIcon}
						iconFontSize={'var(--fontSizeMediumIcon'}
						labelFontSize={'var(--fontSizeMedium)'}
						onClickFunction={() => { console.log('Hae'); }}
						buttonColor={'var(--colorPastelRed'}
						labelColor={'var(--colorWhite)'}
						width={'fit-content'}
					/>
				</div>
			</Modal>
		</div>
	);
};
export default SearchMenu;