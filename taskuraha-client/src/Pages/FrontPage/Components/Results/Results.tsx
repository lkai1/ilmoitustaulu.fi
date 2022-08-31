import Result from './Components/Result/Result';
import styles from './Results.module.css';
import { v4 as uuidv4 } from 'uuid';
import placeholder from './placeholder.jpg';
import placeholder2 from './placeholder2.jpg';
import placeholder3 from './placeholder3.png';

const Results = () => {
	const results = [0, 0, 0, 0, 0, 0, 0];
	return (
		<div className={styles['main']}>
			<div className={styles['resultsContainer']}>
				{results.map((result, i) => {
					return <Result key={uuidv4()}
						picture={i % 3 === 0 ?
							placeholder3
							:
							i % 2 === 0 ?
								placeholder2
								:
								placeholder
						}
						type={i % 3 === 0 ?
							'Palvelut'
							:
							i % 2 === 0 ?
								'Etsitään'
								:
								'Myydään'}
						location={'Uusimaa, Helsinki'}
						price={'40'}
						description={i % 3 === 0 ?
							'Tarjotaan hiustenleikkuuta halvalla.'
							:
							i % 2 === 0 ?
								'Etsitään ruohonleikkaajaa pientä taskurahaa vastaan.'
								:
								'Myynnissä kuin uusi soutuvene. Vene on itse valmistettu puusta.'}
					/>;
				})}
			</div>
		</div>
	);
};

export default Results;