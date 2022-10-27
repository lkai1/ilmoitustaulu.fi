import styles from './RegisterMenu.module.css';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextButton from '../../../../../lib/CommonComponents/Buttons/TextButton/TextButton';
import ErrorMessage from '../../../../../lib/CommonComponents/UI/ErrorMessage/ErrorMessage';

interface Props {
	setShowLoginMenu: () => void;
}

const RegisterMenu = ({
	setShowLoginMenu
}: Props) => {
	//email username or both? is username even needed?
	const [username, setUsername] = useState('');
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
					value={username}
					setValue={setUsername}
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
					if (!username || !password || !passwordVerify || !city) {
						setErrorMessage('Täytä kaikki kentät');
					}
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