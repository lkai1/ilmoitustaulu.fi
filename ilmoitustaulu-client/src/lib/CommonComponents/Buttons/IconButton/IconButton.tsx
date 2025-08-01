import { SvgIconComponent } from '@mui/icons-material';
import styles from './IconButton.module.css';

interface Props {
	label?: string;
	labelIcon: SvgIconComponent;
	onClickFunction: () => void;
	buttonColor?: string;
	labelColor?: string;
	width?: string;
	height?: string;
	border?: string;
	iconFontSize?: string;
	margin?: string;
	labelFontSize?: string;
	padding?: string;
	title?: string;
}

const IconButton = ({
	label,
	labelIcon,
	onClickFunction,
	buttonColor,
	labelColor,
	width,
	height,
	border,
	iconFontSize,
	margin,
	labelFontSize,
	padding,
	title,
}: Props) => {

	const LabelIcon = labelIcon;

	return (
		<button
			className={styles['button']}
			style={{
				backgroundColor: buttonColor,
				width: width,
				height: height,
				border: border,
				margin: margin,
				padding: padding ? padding : 'var(--paddingBasic)'
			}}
			onClick={() => {
				onClickFunction();
			}}
			title={title}
		>
			<p className={styles['label']}
				style={{
					color: labelColor,
					fontSize: labelFontSize,
					marginRight: label ? '3px' : '0'
				}}
			>
				{label}
			</p>
			<LabelIcon
				style={{
					fontSize: iconFontSize,
					color: labelColor
				}} />
		</button>
	);
};

export default IconButton;