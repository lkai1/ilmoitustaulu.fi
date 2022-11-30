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
import Modal from '../../../lib/CommonComponents/UI/Modal/Modal';
import IconButton from '../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import DropDownMenu from '../../../lib/CommonComponents/UI/DropDownMenu/DropDownMenu';
import KeywordSearchInput from './Components/KeywordSearchInput/KeywordSearchInput';

const SearchMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);


	return (
		<div className={styles['main']}>
			{window.innerWidth > 1300 ?
				<DropDownMenu
					menuButton={<IconButton
						label={'Ilmoitusten haku'}
						labelIcon={OpenInFullIcon}
						onClickFunction={() => { setIsMenuOpen(!isMenuOpen); }}
						iconFontSize={'var(--fontSizeMediumIcon)'}
						buttonColor={'var(--colorBrightBlue)'}
						labelFontSize={'var(--fontSizeMedium)'}
						labelColor={'var(--colorWhite)'}
					/>}
					verticalPosition={'50px'}
					horizontalPosition={'0px'}
					height={'550px'}
					width={'1100px'}
					isOpen={isMenuOpen}
					setIsOpen={setIsMenuOpen}
					padding={'20px'}
				>
					<div className={styles['dropDownMenu']}>
						<div>
							<TypeSelection />
							<PriceInput />
							<KeywordSearchInput />
						</div>
						<CategorySelection />
						<LocationSelection />
						<div style={{
							width: '30%',
							display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
							justifyContent: 'end'
						}}>
							<IconButton
								label={'Hae'}
								labelIcon={SearchIcon}
								iconFontSize={'var(--fontSizeMediumIcon)'}
								labelFontSize={'var(--fontSizeMedium)'}
								onClickFunction={() => { console.log('Hae'); }}
								buttonColor={'var(--colorBrightBlue)'}
								labelColor={'var(--colorWhite)'}
								width={'fit-content'}
								height={'fit-content'}
								margin={'10px'}
							/>
						</div>
					</div>
				</DropDownMenu>
				: 
				<div>
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
						<div className={styles['modalMenu']}>
							<TypeSelection />
							<CategorySelection />
							<LocationSelection />
							<KeywordSearchInput />
							<PriceInput />
							<IconButton
								label={'Hae'}
								labelIcon={SearchIcon}
								iconFontSize={'var(--fontSizeMediumIcon)'}
								labelFontSize={'var(--fontSizeMedium)'}
								onClickFunction={() => { console.log('Hae'); }}
								buttonColor={'var(--colorBrightBlue)'}
								labelColor={'var(--colorWhite)'}
								width={'fit-content'}
							/>
						</div>
					</Modal>
				</div>
			}
		</div>
	);
};
export default SearchMenu;