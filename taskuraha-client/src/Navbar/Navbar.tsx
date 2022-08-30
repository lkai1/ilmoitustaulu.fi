import SearchMenu from './Components/SearchMenu/SearchMenu';
import styles from './NavBar.module.css';
import Divider from '../CommonComponents/UI/Divider/Divider';
import LoginMenu from '../Login/LoginMenu/LoginMenu';

const NavBar = () => {

	return (
		<div className={styles['main']}>
			<div className={styles['contentContainer']}>
				<div className={styles['leftContainer']}>
					<div className={styles['logoContainer']}>
						<p className={styles['logoText']}>ilmoitustaulu.fi</p>
					</div>
					<SearchMenu />
				</div>
				<LoginMenu />
			</div>
			<Divider
				horizontal={true}
				color={'var(--colorVeryLightGrey)'}
			/>
		</div>
	);
};

export default NavBar;