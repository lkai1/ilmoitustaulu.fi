import { Dispatch, SetStateAction } from 'react';
import styles from './NumberInput.module.css';

interface props {
    value: number | undefined;
    setValue: Dispatch<SetStateAction<number | undefined>>;
    placeHolder: string;
    borderRadiusTop?: boolean;
    borderRadiusBottom?: boolean;
}

const NumberInput = ({
	value,
	setValue,
	placeHolder,
	borderRadiusTop,
	borderRadiusBottom
}: props) => {

	return (
		<div className={styles['main']}>
			<input className={styles['input']}
				is-first={borderRadiusTop?.toString()}
				is-last={borderRadiusBottom?.toString()}
				placeholder={placeHolder}
				type="number"
				value={value}
				onChange={(e) => {
					e.preventDefault();
					setValue(Number(e.target.value));
				}} />
		</div>
	);
};

export default NumberInput;