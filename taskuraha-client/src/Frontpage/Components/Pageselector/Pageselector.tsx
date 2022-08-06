import styles from './Pageselector.module.css';
import Button from './Components/Button';

const Pageselector = () => {
	const buttons = [1, 2, 3, 4, 5, 6];
	return (
		<div className={styles['Pageselector']}>
			{buttons.map((button, i) => {
				return <Button key={i} number={button}></Button>;
			})}
		</div>
	);
};

export default Pageselector;