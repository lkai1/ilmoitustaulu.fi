import styles from './LoginMenu.module.css';
import LoginIcon from '@mui/icons-material/Login';
import { useState, useContext } from 'react';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextButton from '../../../../../lib/CommonComponents/Buttons/TextButton/TextButton';
import ErrorMessage from '../../../../../lib/CommonComponents/UI/ErrorMessage/ErrorMessage';
import { AuthContext } from '../../../../../Contexts/AuthContext';

interface Props {
	setShowRegisterMenu: () => void;
}

const LoginMenu = ({
	setShowRegisterMenu
}: Props) => {

	const authContext = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<div className={styles['main']}>
			<ErrorMessage
				message={errorMessage}
				setMessage={setErrorMessage}
				margin={'6px'}
			/>
			<div className={styles['inputContainer']}>
				<TextInput
					value={email}
					setValue={setEmail}
					placeHolder={'käyttäjänimi tai sähköposti'}
					borderRadiusTop={true}
					width={'100%'}
				/>
				<TextInput
					value={password}
					setValue={setPassword}
					placeHolder='salasana'
					borderRadiusBottom={true}
					width={'100%'}
				/>
			</div>
			<IconButton
				label={'Kirjaudu'}
				labelColor={'var(--colorWhite)'}
				labelIcon={LoginIcon}
				onClickFunction={() => {
					if (!email || !password) {
						setErrorMessage('Täytä kaikki kentät');
					}
					authContext?.login(email, password);
				}}
				buttonColor={'var(--colorBrightBlue)'}
				labelFontSize={'var(--fontSizeMedium)'}
				iconFontSize={'var(--fontSizeMediumIcon)'}
				margin={'6px'}
				width={'100%'}
			/>
			<TextButton
				label={'Uusi tili?'}
				labelColor={'var(--colorBrightBlue)'}
				onClickFunction={() => { setShowRegisterMenu(); }}
				width={'fit-content'}
			/>
		</div>
	);
};

export default LoginMenu;