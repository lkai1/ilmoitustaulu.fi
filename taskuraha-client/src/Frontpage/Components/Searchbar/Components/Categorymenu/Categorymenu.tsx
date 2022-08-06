import styles from './Categorymenu.module.css';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Categorymenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className={styles['Categorymenu']}>
			<div className={styles['menuButton']}
				onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
				<p>Kategoria</p>
				{isMenuOpen ?
					<KeyboardArrowUpIcon style={
						{ fontSize: '18px' }
					} />
					:
					<KeyboardArrowDownIcon style={
						{ fontSize: '18px' }
					} />
				}

			</div>
			{isMenuOpen
				? <div className={styles['menu']}>Pihatyöt</div>
				: null}
		</div>
	);
};
export default Categorymenu;