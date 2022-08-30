import styles from './BurgerMenuButton.module.css';

interface Props {
    lineColor: string;
    onClickFunction: () => void;
}

const BurgerMenuButton = ({ lineColor, onClickFunction }: Props) => {

	return (
		<div className={styles['main']}
			onClick={() => { onClickFunction(); }}
		>
			<span className={styles['line']}
				style={{ backgroundColor: lineColor }}></span>
			<span className={styles['line']}
				style={{ backgroundColor: lineColor }}></span>
			<span className={styles['line']}
				style={{ backgroundColor: lineColor }}></span>
		</div>
	);
};

export default BurgerMenuButton;