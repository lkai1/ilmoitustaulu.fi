import styles from './App.module.css';
import Footer from './Footer/Footer';
import Frontpage from './Frontpage/Frontpage';
import Navbar from './Navbar/Navbar';

const App = () => {
	return (
		<div className={styles['App']}>
			<Navbar />
			<Frontpage />
			<Footer />
		</div>
	);
};

export default App;