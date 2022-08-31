import styles from './Selector.module.css';
import { Dispatch, SetStateAction } from 'react';
import Selections from './Components/Selections/Selections';

interface props {
	values: Array<string | undefined>;
	selectedValues: Array<string | undefined>;
	setSelectedValues: Dispatch<SetStateAction<
		Array<string | undefined>
	>>;
}

const Selector = ({ values, selectedValues, setSelectedValues }: props) => {

	return (
		<div className={styles['main']}>
			<Selections
				values={values}
				selectedValues={selectedValues}
				setSelectedValues={setSelectedValues}
			/>
		</div>
	);
};

export default Selector;