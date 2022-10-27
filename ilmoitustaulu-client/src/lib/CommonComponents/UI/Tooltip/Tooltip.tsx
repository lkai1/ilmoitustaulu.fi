import { Dispatch, SetStateAction } from 'react';
import styles from './Tooltip.module.css';

interface Props {
	children: JSX.Element | JSX.Element[];
	verticalPosition: string;
	horizontalPosition: string;
	onHoverElement: JSX.Element;
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
	hasItems: boolean;
}

const Tooltip = ({
	children,
	horizontalPosition,
	verticalPosition,
	onHoverElement,
	visibility,
	setVisibility,
	hasItems
}: Props) => {

	return (
		<div className={styles['main']}>
			<div className={styles['childrenContainer']}
				style={{
					left: horizontalPosition,
					top: verticalPosition
				}}
				is-visible={visibility.toString()}
				onMouseLeave={() => { setVisibility(false); }}
			>
				{children}
			</div>
			<div className={styles['onHoverElement']}
				onMouseEnter={() => { hasItems ? setVisibility(true) : null; }}
			>
				{onHoverElement}
			</div>
		</div>
	);
};

export default Tooltip;