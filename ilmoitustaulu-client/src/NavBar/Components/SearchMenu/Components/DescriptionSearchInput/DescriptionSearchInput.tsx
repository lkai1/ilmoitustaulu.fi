import { useState } from 'react';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import Header from '../Header/Header';
import styles from './DescriptionSearchInput.module.css';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import DeselectorList
	from '../../../../../lib/CommonComponents/Inputs/DeselectorList/DeselectorList';
import Tooltip from '../../../../../lib/CommonComponents/UI/Tooltip/Tooltip';

const DescriptionSearchInput = () => {

	const [searchWord, setSearchWord] = useState('');
	const [searchWordList, setSearchWordList] = useState<Array<string | undefined>>([]);
	const [tooltipVisibility, setTooltipVisibility] = useState(false);

	return (
		<div className={styles['main']}>
			<Header
				value={'Sanahaku'}
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
			<IconButton
				labelIcon={AbcSharpIcon}
				label={'Valitse'}
				onClickFunction={() => { 
					if(searchWord) {
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

export default DescriptionSearchInput;