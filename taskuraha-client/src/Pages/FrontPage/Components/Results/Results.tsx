import Result from './Components/Result/Result';
import styles from './Results.module.css';
import { v4 as uuidv4 } from 'uuid';

const Results = () => {
	const results = [0, 0, 0, 0, 0, 0, 0];
	return (
		<div className={styles['main']}>
			<div className={styles['resultsContainer']}>
				{results.map(() => {
					return <Result key={uuidv4()} />;
				})}
			</div>
		</div>
	);
};

export default Results;