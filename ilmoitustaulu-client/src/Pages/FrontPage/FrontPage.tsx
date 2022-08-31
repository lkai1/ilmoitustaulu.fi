import styles from './FrontPage.module.css';
import Results from './Components/Results/Results';
import Welcome from './Components/Welcome/Welcome';
import PageSelector from './Components/PageSelector/PageSelector';


const Frontpage = () => {
	return (
		<div className={styles['main']}>
			<Welcome />
			<Results />
			<PageSelector />
		</div>
	);
};

export default Frontpage;