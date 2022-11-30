import styles from './App.module.css';
import Footer from './Footer/Footer';
import FrontPage from './Pages/FrontPage/FrontPage';
import NavBar from './NavBar/NavBar';
import { AuthProvider } from './Contexts/AuthContext';

const App = () => {
	return (
		<div className={styles['main']}>
			<AuthProvider>
				<NavBar />
				<FrontPage />
				<Footer />
			</AuthProvider>
		</div>
	);
};

export default App;