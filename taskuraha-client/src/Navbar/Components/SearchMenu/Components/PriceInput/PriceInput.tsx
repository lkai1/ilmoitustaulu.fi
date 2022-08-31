import styles from './PriceInput.module.css';
import { useState } from 'react';
import Header from '../Header/Header';
import NumberInput from '../../../../../lib/CommonComponents/Inputs/NumberInput/NumberInput';

const PriceInput = () => {

	const [minPrice, setMinPrice] = useState<number | string>('');
	const [maxPrice, setMaxPrice] = useState<number | string>('');

	return (
		<div className={styles['main']}>
			<Header
				value={'Hinta'}
			/>
			<div className={styles['contentContainer']}>
				<NumberInput
					value={minPrice}
					setValue={setMinPrice}
					placeHolder={'min. €'}
					borderRadiusTop={true}
					borderRadiusBottom={true}
				/>
				<p className={styles['lineText']}>-</p>
				<NumberInput
					value={maxPrice}
					setValue={setMaxPrice}
					placeHolder={'max. €'}
					borderRadiusTop={true}
					borderRadiusBottom={true}
				/>
			</div>
		</div>
	);
};

export default PriceInput;