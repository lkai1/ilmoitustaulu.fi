import styles from './FrontPage.module.css';
import Ads from './Components/Ads/Ads';
import Welcome from './Components/Welcome/Welcome';
import PageSelector from './Components/PageSelector/PageSelector';


const Frontpage = () => {
	return (
		<div className={styles['main']}>
			<Welcome />
			<Ads />
			<PageSelector />
		</div>
	);
};

export default Frontpage;