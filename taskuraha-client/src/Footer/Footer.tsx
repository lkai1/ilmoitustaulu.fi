import Divider from '../lib/CommonComponents/UI/Divider/Divider';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles['main']}>
			<Divider
				color={'var(--colorVeryLightGrey)'}
				horizontal={true}
			/>
			<div className={styles['contentContainer']}>
				<p>Tietoa</p>
				<p>{`Copyright ${new Date().getFullYear()}`}</p>
			</div>
		</div>
	);
};

export default Footer;