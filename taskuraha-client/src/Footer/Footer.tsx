import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles['Footer']}>
			<p>Tietoa</p>
			<p>{`Copyright ${new Date().getFullYear()}`}</p>
		</div>
	);
};

export default Footer;