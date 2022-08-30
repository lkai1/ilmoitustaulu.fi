import styles from './TextButton.module.css';

interface Props {
    label?: string;
    onClickFunction: () => void;
    buttonColor?: string;
    labelColor?: string;
    width?: string;
    border?: string;
    iconFontSize?: string;
    margin?: string;
}

const TextButton = ({
	label,
	onClickFunction,
	labelColor,
	width,
	border,
	margin
}: Props) => {

	return (
		<button
			className={styles['button']}
			style={{
				width: width,
				border: border,
				margin: margin
			}}
			onClick={() => {
				onClickFunction();
			}}>
			<p className={styles['label']}
				style={{
					color: labelColor
				}}
			>
				{label}
			</p>
		</button>
	);
};

export default TextButton;