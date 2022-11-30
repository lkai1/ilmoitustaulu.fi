import styles from './CategorySelection.module.css';
import { useState, Dispatch, SetStateAction } from 'react';
import Selector from '../../../../../lib/CommonComponents/Inputs/Selector/Selector';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import Header from '../Header/Header';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeselectorList
	from '../../../../../lib/CommonComponents/Inputs/DeselectorList/DeselectorList';
import Tooltip from '../../../../../lib/CommonComponents/UI/Tooltip/Tooltip';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';

const CategorySelection = () => {

	const [selectedCategories, setSelectedCategories] =
		useState<Array<string | undefined>>([]);
	const [filterStr, setFilterStr] = useState('');
	const [selectedView, setSelectedView] = useState(0);
	const [tooltipVisibility, setTooltipVisibility] = useState(false);

	const categories = [
		'Kaikki kategoriat',
		'Autot',
		'Asunnot',
		'Pihatyöt',
		'Polkupyörät',
		'Siivous',
		'Lumityöt',
		'Muu'
	];

	const getFilteredValues = (
		values: Array<string | undefined>,
		filterStr: string
	) => {
		return values.filter(value =>
			value
				?.toLowerCase()
				.startsWith(filterStr.toLowerCase())
		);
	};

	interface props {
		selectedView: number;
		setSelectedView: Dispatch<SetStateAction<number>>
	}

	const ViewSelection = ({
		selectedView,
		setSelectedView
	}: props) => {
		return <div>
			{selectedView === 0 ?
				<IconButton
					label={'Alakategoriat'}
					labelIcon={ArrowForwardIcon}
					onClickFunction={() => { setSelectedView(1); }}
					buttonColor={'var(--colorBrightBlue)'}
					labelColor={'var(--colorWhite)'}
					width={'100%'}
					iconFontSize={'var(--fontSizeMediumIcon)'}
					labelFontSize={'var(--fontSizeMedium)'}
				/>
				:
				<IconButton
					labelIcon={ArrowBackIcon}
					onClickFunction={() => { setSelectedView(0); }}
					buttonColor={'var(--colorBrightBlue)'}
					labelColor={'var(--colorWhite)'}
					width={'100%'}
					iconFontSize={'var(--fontSizeMediumIcon)'}
					labelFontSize={'var(--fontSizeMedium)'}
				/>
			}
		</div>;
	};

	return (
		<div className={styles['main']}>
			<Header
				value={'Kategoria'}
			/>
			<div className={styles['contentContainer']}>
				<Selector
					values={getFilteredValues(categories, filterStr)}
					selectedValues={selectedCategories}
					setSelectedValues={setSelectedCategories}
				/>
				<div className={styles['inputContainer']}>
					<TextInput
						value={filterStr}
						setValue={setFilterStr}
						placeHolder={'esim. pihatyöt'}
						borderRadiusBottom={true}
						width={'100%'}
					/>
				</div>
				<ViewSelection
					selectedView={selectedView}
					setSelectedView={setSelectedView}
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
							Valinnat: {selectedCategories.length}
						</p>
					}
					hasItems={!!selectedCategories.length}
					visibility={tooltipVisibility}
					setVisibility={setTooltipVisibility}
				>
					<DeselectorList
						label='Kategoriat'
						values={selectedCategories}
						setValues={setSelectedCategories}
					/>
				</Tooltip>
			</div>
			
		</div>
	);
};

export default CategorySelection;