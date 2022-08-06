import styles from './Searchbar.module.css';
import Slider from './Components/Slider/Slider';
import Categorymenu from './Components/Categorymenu/Categorymenu';


const Searchbar = () => {
	return (
		<div className={styles['Searchbar']}>
			<div className={styles['search']}>
				<Categorymenu />
				<Slider />
				<div className={styles['searchButton']}>
					<p>Hae</p>
				</div>
			</div>
			<img className={styles['advertisement']} />
		</div>
	);
};

export default Searchbar;