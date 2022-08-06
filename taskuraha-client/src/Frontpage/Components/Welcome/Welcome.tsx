import styles from './Welcome.module.css';

const Welcome = () => {
	return (
		<div className={styles['Welcome']}>
			<div className={styles['logoContainer']}>
				<p className={styles['logoText']}>taskuraha.net</p>
				<img className={styles['logoImage']} />
			</div>
			<p className={styles['welcomeText']}>
                Tervetuloa taskuraha.nettiin
			</p>
		</div>
	);
};

export default Welcome;