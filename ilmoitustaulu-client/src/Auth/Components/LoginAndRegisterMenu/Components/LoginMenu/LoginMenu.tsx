import styles from './LoginMenu.module.css';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from 'react';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextButton from '../../../../../lib/CommonComponents/Buttons/TextButton/TextButton';
import ErrorMessage from '../../../../../lib/CommonComponents/UI/ErrorMessage/ErrorMessage';

interface Props {
	setShowRegisterMenu: () => void;
}

const LoginMenu = ({
	setShowRegisterMenu
}: Props) => {

	const [username, setUsername] = useState('');
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
					value={username}
					setValue={setUsername}
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
					if (!username || !password) {
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
				label={'Uusi tili?'}
				labelColor={'var(--colorBrightBlue)'}
				onClickFunction={() => { setShowRegisterMenu(); }}
				width={'fit-content'}
			/>
		</div>
	);
};

export default LoginMenu;