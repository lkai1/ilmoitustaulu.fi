import SearchMenu from './Components/SearchMenu/SearchMenu';
import styles from './NavBar.module.css';
import LoginAndRegisterMenu
	from '../Auth/Components/LoginAndRegisterMenu/LoginAndRegisterMenu';

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
				<LoginAndRegisterMenu />
			</div>
		</div>
	);
};

export default NavBar;