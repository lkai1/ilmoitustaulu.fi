import styles from './Welcome.module.css';

const Welcome = () => {
	return (
		<div className={styles['main']}>
			<div className={styles['logoContainer']}>
				<img className={styles['logoImage']} />
				<p className={styles['logoText']}>ilmoitustaulu.fi</p>
			</div>
			<p className={styles['welcomeText']}>
				Koko Suomen ilmoitukset löydät täältä.
			</p>
		</div>
	);
};

export default Welcome;