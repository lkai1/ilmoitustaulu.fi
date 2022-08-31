import styles from './Selections.module.css';
import { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface props {
    values: Array<string | undefined>;
    selectedValues: Array<string | undefined>;
    setSelectedValues: Dispatch<SetStateAction<
        Array<string | undefined>
    >>;
}

const Selections = ({
	values,
	selectedValues,
	setSelectedValues
}: props) => {

	const handleSelectionClick = (
		value: string | undefined,
		selectedValues: Array<string | undefined>,
		setSelectedValues: Dispatch<SetStateAction<
            Array<string | undefined>
        >>
	) => {
		selectedValues.includes(value) ?
			setSelectedValues(selectedValues
				.filter(selectedValue =>
					selectedValue !== value))
			:
			setSelectedValues([...selectedValues, value]);
	};

	return (
		<div className={styles['main']}>
			{values?.map((value) => {
				return <div
					className={styles['selection']}
					key={uuidv4()}
					is-selected={selectedValues.includes(value).toString()}
					onClick={() => {
						handleSelectionClick(
							value,
							selectedValues,
							setSelectedValues
						);
					}}
				>
					{value}
				</div>;
			})}
		</div>
	);
};

export default Selections;