import styles from './App.module.css';
import Footer from './Footer/Footer';
import FrontPage from './Pages/FrontPage/FrontPage';
import NavBar from './NavBar/NavBar';

const App = () => {
	return (
		<div className={styles['main']}>
			<NavBar />
			<FrontPage />
			<Footer />
		</div>
	);
};

export default App;