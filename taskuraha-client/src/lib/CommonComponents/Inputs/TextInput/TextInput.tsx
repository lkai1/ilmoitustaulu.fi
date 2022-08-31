import { Dispatch, SetStateAction } from 'react';
import styles from './TextInput.module.css';

interface props {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    placeHolder: string;
    borderRadiusTop?: boolean;
    borderRadiusBottom?: boolean;
	width?: string;
}

const TextInput = ({
	value,
	setValue,
	placeHolder,
	borderRadiusTop,
	borderRadiusBottom,
	width
}: props) => {

	return (
		<div className={styles['main']}
			style={{
				width:width
			}}
		>
			<input className={styles['input']}
				is-first={borderRadiusTop?.toString()}
				is-last={borderRadiusBottom?.toString()}
				placeholder={placeHolder}
				type="text"
				value={value}
				onChange={(e) => {
					e.preventDefault();
					setValue(e.target.value);
				}} />
		</div>
	);
};

export default TextInput;