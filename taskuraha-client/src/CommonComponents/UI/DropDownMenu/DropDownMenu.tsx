import styles from './DropDownMenu.module.css';

interface Props {
	children: JSX.Element | JSX.Element[];
	verticalPosition: string;
	horizontalPosition: string;
	height: string;
	width: string;
	isOpen: boolean;
}

const DropDownMenu = ({
	children,
	verticalPosition,
	horizontalPosition,
	height,
	width,
	isOpen
}: Props) => {
	
	return (
		<div className={styles['main']}
			is-open={isOpen.toString()}
		>
			<div className={styles['contentContainer']}
				style={{
					left: horizontalPosition,
					top: verticalPosition,
					height: height,
					width: width
				}}>
				{children}
			</div>
		</div>
	);
};

export default DropDownMenu;