import styles from './Frontpage.module.css';
import Results from './Components/Results/Results';
import Searchbar from './Components/Searchbar/Searchbar';
import Welcome from './Components/Welcome/Welcome';
import Pageselector from './Components/Pageselector/Pageselector';

const Frontpage = () => {
	return (
		<div className={styles['Frontpage']}>
			<Searchbar />
			<div className={styles['mainView']}>
				<Welcome />
				<Results />
				<Pageselector />
			</div>

		</div>
	);
};

export default Frontpage;