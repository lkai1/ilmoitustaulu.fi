import styles from './CategorySelection.module.css';
import { useState } from 'react';
import Selector from '../../../../../lib/CommonComponents/Inputs/Selector/Selector';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import Header from '../Header/Header';
import DeselectorList
	from '../../../../../lib/CommonComponents/Inputs/DeselectorList/DeselectorList';
import Tooltip from '../../../../../lib/CommonComponents/UI/Tooltip/Tooltip';

const CategorySelection = () => {

	const [selectedCategories, setSelectedCategories] =
		useState<Array<string | undefined>>([]);
	const [filterStr, setFilterStr] = useState('');
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