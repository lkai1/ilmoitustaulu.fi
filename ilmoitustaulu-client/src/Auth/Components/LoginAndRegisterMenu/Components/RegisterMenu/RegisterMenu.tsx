import styles from './RegisterMenu.module.css';
import LoginIcon from '@mui/icons-material/Login';
import { useContext, useState } from 'react';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextButton from '../../../../../lib/CommonComponents/Buttons/TextButton/TextButton';
import ErrorMessage from '../../../../../lib/CommonComponents/UI/ErrorMessage/ErrorMessage';
import { AuthContext } from '../../../../../Contexts/AuthContext';

interface Props {
	setShowLoginMenu: () => void;
}

const RegisterMenu = ({
	setShowLoginMenu
}: Props) => {

	const authContext = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordVerify, setPasswordVerify] = useState('');
	const [city, setCity] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<div className={styles['main']}>
			<div className={styles['inputContainer']}>
				<ErrorMessage
					message={errorMessage}
					setMessage={setErrorMessage}
					margin={'6px'}
				/>
				<TextInput
					value={email}
					setValue={setEmail}
					placeHolder={'sähköposti'}
					width={'100%'}
					borderRadiusTop={true}
				/>
				<TextInput
					value={password}
					setValue={setPassword}
					placeHolder='salasana'
					width={'100%'}
				/>
				<TextInput
					value={passwordVerify}
					setValue={setPasswordVerify}
					placeHolder='vahvista salasana'
					width={'100%'}
				/>
				<TextInput
					value={city}
					setValue={setCity}
					placeHolder={'Kaupunki'}
					width={'100%'}
					borderRadiusBottom={true}
				/>
			</div>
			<IconButton
				label={'Rekisteröidy'}
				labelColor={'var(--colorWhite)'}
				labelIcon={LoginIcon}
				onClickFunction={() => {
					if (!email || !password || !passwordVerify || !city) {
						setErrorMessage('Täytä kaikki kentät');
					}
					if (password === passwordVerify) {
						authContext?.register(email, password, city);
					} else setErrorMessage('Salasanat eivät täsmää');
				}}
				buttonColor={'var(--colorBrightBlue)'}
				labelFontSize={'var(--fontSizeMedium)'}
				iconFontSize={'var(--fontSizeMediumIcon)'}
				margin={'6px'}
				width={'100%'}
			/>
			<TextButton
				label={'Sinulla on jo tili?'}
				labelColor={'var(--colorBrightBlue)'}
				onClickFunction={() => { setShowLoginMenu(); }}
				width={'fit-content'}
			/>
		</div>
	);
};

export default RegisterMenu;