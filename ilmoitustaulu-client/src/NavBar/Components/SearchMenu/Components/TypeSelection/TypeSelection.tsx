import styles from './TypeSelection.module.css';
import { useState } from 'react';
import CheckBoxSelector
	from '../../../../../lib/CommonComponents/Inputs/CheckBoxSelector/CheckBoxSelector';
import Header from '../Header/Header';

const TypeSelection = () => {

	const [selectedTypes, setSelectedTypes] =
		useState<Array<string | undefined>>([]);

	const types = [
		'Myydään',
		'Ostetaan',
		'Vuokrataan',
		'Etsitään',
		'Vaihdetaan',
		'Annetaan',
		'Palvelut',
		'Tapahtumat',
		'Muut'
	];

	return (
		<div className={styles['main']}>
			<Header
				value={'Ilmoituksen tyyppi'}
			/>
			<div className={styles['contentContainer']}>
				<CheckBoxSelector
					values={types}
					selectedValues={selectedTypes}
					setSelectedValues={setSelectedTypes}
					checkboxColor={'var(--colorBrightBlue)'}
				/>
			</div>
		</div>
	);
};

export default TypeSelection;