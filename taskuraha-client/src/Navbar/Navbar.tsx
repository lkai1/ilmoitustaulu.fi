import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className={styles['Navbar']}>
			<div className={styles['logoContainer']}>
				<p>taskuraha.net</p>
			</div>
			<div className={styles['menuContainer']}>
				<div className={styles['burgerContainer']}
					onClick={() => { setIsMenuOpen(!isMenuOpen); }}
				>
					<span className={styles['burgerLine']}></span>
					<span className={styles['burgerLine']}></span>
					<span className={styles['burgerLine']}></span>
				</div>
				{isMenuOpen ?
					<div className={styles['menu']}>
						<input className={styles['input']}
							placeholder='käyttäjänimi tai sähköposti'
							type="text"
							value={username}
							onChange={(e) => {
								e.preventDefault();
								setUsername(e.target.value);
							}} />
						<input className={styles['input']}
							placeholder='salasana'
							type="password"
							value={password}
							onChange={(e) => {
								e.preventDefault();
								setPassword(e.target.value);
							}} />
						<div className={styles['submitButton']}>Kirjaudu</div>
					</div> : null}
			</div>
		</div>
	);
};

export default Navbar;