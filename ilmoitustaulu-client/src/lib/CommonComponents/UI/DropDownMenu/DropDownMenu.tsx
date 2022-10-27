import { createRef, Dispatch, SetStateAction, useEffect } from 'react';
import styles from './DropDownMenu.module.css';

interface Props {
	children: JSX.Element | JSX.Element[];
	menuButton: JSX.Element;
	verticalPosition: string;
	horizontalPosition: string;
	height: string;
	width: string;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	selectedView?: number;
	padding?: string;
}

const DropDownMenu = ({
	children,
	menuButton,
	verticalPosition,
	horizontalPosition,
	height,
	width,
	isOpen,
	setIsOpen,
	selectedView,
	padding,
}: Props) => {

	const ref = createRef<HTMLDivElement>();

	useEffect(() => {
		//figure out correct type for e
		const checkIfClickedOutside = (e: any) => {
			if (isOpen && ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isOpen, selectedView]);

	return (
		<div className={styles['main']}
			ref={ref}
		>
			{menuButton}
			<div className={styles['contentContainer']}
				is-open={isOpen.toString()}
				style={{
					left: horizontalPosition,
					top: verticalPosition,
					height: height,
					width: width,
					padding: padding
				}}>
				{children}
			</div>
		</div>
	);
};

export default DropDownMenu;