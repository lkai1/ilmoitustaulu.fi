import styles from './CheckBox.module.css';
import CheckIcon from '@mui/icons-material/Check';
import { Dispatch, SetStateAction } from 'react';

interface props {
	value: string | undefined;
	selectedValues: Array<string | undefined>;
	setSelectedValues: Dispatch<SetStateAction<
		Array<string | undefined>
	>>;
	color: string;
}

const CheckBox = ({
	value,
	selectedValues,
	setSelectedValues,
	color
}: props) => {

	const handleCheckBoxClick = (
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
			<div className={styles['button']}
				onClick={() => {
					handleCheckBoxClick(value, selectedValues, setSelectedValues);
				}}
				is-selected={selectedValues.includes(value).toString()}
				style={selectedValues.includes(value) ? { backgroundColor: color } : {}}
			>
				<CheckIcon
					style={{
						fontSize: 'var(--fontBasicIcon)',
						display: selectedValues.includes(value)
							? 'inline-block'
							: 'none'
					}}
				/>
			</div>
			<p className={styles['label']}>{value}</p>
		</div>
	);
};

export default CheckBox;