import styles from './Header.module.css';


interface props {
	value: string;
}

const Header = ({ value }: props) => {
	return (
		<div className={styles['main']}>
			<div className={styles['headerContainer']}>
				<p className={styles['headerText']}>
					{value}
				</p>
			</div>
		</div>
	);
};

export default Header;