import styles from './DeselectorList.module.css';
import { Dispatch, SetStateAction } from 'react';
import ListItem from './Components/ListItem/ListItem';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	//try removing undefined because string should be enough for empty array
	//also affects selector
	values: Array<string | undefined>;
	setValues: Dispatch<SetStateAction<Array<string | undefined>>>;
	label?: string;
	valueColor?: string;
}

const DeselectorList = ({
	values,
	setValues,
	label,
	valueColor,
}: Props) => {

	return (
		<div className={styles['main']}>
			<div className={styles['contentContainer']}>
				<p className={styles['label']}
					no-values={values[0] ?
						false.toString()
						:
						true.toString()
					}
				>
					{label}:
				</p>
				{values.map((value) => {
					return <ListItem
						key={uuidv4()}
						value={value}
						labelColor={valueColor}
						onClickFunction={() => {
							setValues(values.filter(valueToRemove =>
								value !== valueToRemove
							));
						}}
					/>;
				})}
			</div>
		</div>
	);
};

export default DeselectorList;