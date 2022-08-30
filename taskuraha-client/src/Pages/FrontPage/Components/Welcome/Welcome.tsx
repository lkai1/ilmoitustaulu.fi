import styles from './Welcome.module.css';

const Welcome = () => {
	//maybe replace this with an advertisement?
	return (
		<div className={styles['main']}>
			<div className={styles['logoContainer']}>
				<img className={styles['logoImage']} />
				<p className={styles['logoText']}>ilmoitustaulu.fi</p>
			</div>
			<p className={styles['welcomeText']}>
				Tervetuloa ilmoitustaulu.fi:hin
			</p>
		</div>
	);
};

export default Welcome;