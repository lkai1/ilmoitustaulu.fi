import styles from './CategorySelection.module.css';
import { useState } from 'react';
import Selector from '../../../../../CommonComponents/Inputs/Selector/Selector';
import TextInput from '../../../../../CommonComponents/Inputs/TextInput/TextInput';
import Header from '../Header/Header';

const CategorySelection = () => {

	const [selectedCategories, setSelectedCategories] =
		useState<Array<string | undefined>>([]);
	const [filterStr, setFilterStr] = useState('');

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
		return values.filter((value) => {
			return value
				?.toLowerCase()
				.startsWith(filterStr.toLowerCase());
		});
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
			</div>
		</div>
	);
};

export default CategorySelection;