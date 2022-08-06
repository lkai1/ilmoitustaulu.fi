import Result from './Components/Result';
import styles from './Results.module.css';

const Results = () => {
	const results = [0, 0, 0, 0, 0, 0, 0];
	return (
		<div className={styles['Results']}>
			{results.map((r, i) => {
				return <Result key={i} />;
			})}
		</div>
	);
};

export default Results;