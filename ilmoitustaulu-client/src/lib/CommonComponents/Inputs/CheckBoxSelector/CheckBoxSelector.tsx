import styles from './CheckBoxSelector.module.css';
import { Dispatch, SetStateAction } from 'react';
import CheckBox from './Components/CheckBoxes/CheckBox';
import { v4 as uuidv4 } from 'uuid';

interface props {
	values: Array<string | undefined>;
	selectedValues: Array<string | undefined>;
	setSelectedValues: Dispatch<SetStateAction<
		Array<string | undefined>
	>>;
	checkboxColor: string;
}

const CheckBoxSelector = ({
	values,
	selectedValues,
	setSelectedValues,
	checkboxColor
}: props) => {

	const getCheckBoxes = ({
		values,
		selectedValues,
		setSelectedValues,
		checkboxColor
	}: props) => {
		return values.map((value) => {
			return <CheckBox
				key={uuidv4()}
				value={value}
				selectedValues={selectedValues}
				setSelectedValues={setSelectedValues}
				color={checkboxColor}
			/>;
		});
	};

	return (
		<div className={styles['main']}>
			{getCheckBoxes({ values, selectedValues, setSelectedValues, checkboxColor })}
		</div>
	);
};

export default CheckBoxSelector;