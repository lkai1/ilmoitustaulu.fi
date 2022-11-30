import { useState } from 'react';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import Header from '../Header/Header';
import styles from './KeywordSearchInput.module.css';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import DeselectorList
	from '../../../../../lib/CommonComponents/Inputs/DeselectorList/DeselectorList';
import Tooltip from '../../../../../lib/CommonComponents/UI/Tooltip/Tooltip';
import DropDownMenu from '../../../../../lib/CommonComponents/UI/DropDownMenu/DropDownMenu';
import { v4 as uuidv4 } from 'uuid';

const KeywordSearchInput = () => {

	const [searchWord, setSearchWord] = useState('');
	const [searchWordList, setSearchWordList] = useState<Array<string | undefined>>([]);
	const [tooltipVisibility, setTooltipVisibility] = useState(false);

	const keywords = ['Automaatti', 'Sauna', 'Parveke', 'Astianpesukone'];

	//first show startswith then show includes

	return (
		<div className={styles['main']}>
			<Header
				value={'Avainsanahaku'}
			/>
			<div className={styles['inputContainer']}>
				<TextInput
					value={searchWord}
					setValue={setSearchWord}
					placeHolder={'esim. katsastettu'}
					borderRadiusBottom={true}
					borderRadiusTop={true}
				/>
			</div>
			<DropDownMenu
				menuButton={<span></span>}
				verticalPosition={'-210px'}
				horizontalPosition={'0px'}
				isOpen={!!searchWord}
				setIsOpen={() => { return null; }}
				height={'150px'}
				width={'280px'}
			>
				<div className={styles['keyWordSearchList']}>
					{keywords.map((kw) => <p key={uuidv4()}>{kw}</p>)}
				</div>
			</DropDownMenu>
			<IconButton
				labelIcon={AbcSharpIcon}
				label={'Valitse'}
				onClickFunction={() => {
					if (searchWord) {
						setSearchWordList([...searchWordList, searchWord]);
						setSearchWord('');
					}
				}}
				buttonColor={'var(--colorBrightBlue)'}
				labelColor={'var(--colorWhite)'}
				width={'100%'}
				iconFontSize={'var(--fontSizeMediumIcon)'}
				labelFontSize={'var(--fontSizeMedium)'}
			/>
			<Tooltip
				horizontalPosition={'50px'}
				verticalPosition={'0px'}
				onHoverElement={
					<p
						style={{
							backgroundColor: 'var(--colorVeryLightGrey)',
							padding: '10px',
							height: 'fit-content',
							width: 'fit-content',
							borderRadius: '4px',
							margin: '10px 0px 10px 0px'
						}}
					>
						Valinnat: {searchWordList.length}
					</p>
				}
				hasItems={!!searchWordList.length}
				visibility={tooltipVisibility}
				setVisibility={setTooltipVisibility}
			>
				<DeselectorList
					values={searchWordList}
					setValues={setSearchWordList}
					label={'Hakusanat'}
				/>
			</Tooltip>
		</div>
	);
};

export default KeywordSearchInput;