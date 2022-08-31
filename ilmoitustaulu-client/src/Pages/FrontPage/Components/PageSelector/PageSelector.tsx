import styles from './PageSelector.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PageSelector = () => {
	const buttons = [1, 2, 3, 4, 5, 6];
	const [page, setPage] = useState(0);

	return (
		<div className={styles['main']}>
			<div className={styles['buttonsContainer']}>
				{buttons.map((button, i, array) => {
					return <div className={styles['button']}
						onClick={() => {
							setPage(i);
						}}
						is-first={(i === 0).toString()}
						is-last={(i === array.length - 1).toString()}
						is-selected={(page === i).toString()}
						key={uuidv4()}
					>
						{button}
					</div>;
				})}
			</div>
		</div>
	);
};

export default PageSelector;