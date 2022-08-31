import styles from './LoginMenu.module.css';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import TextInput from '../../lib/CommonComponents/Inputs/TextInput/TextInput';
import IconButton from '../../lib/CommonComponents/Buttons/IconButton/IconButton';
import TextButton from '../../lib/CommonComponents/Buttons/TextButton/TextButton';
import DropDownMenu from '../../lib/CommonComponents/UI/DropDownMenu/DropDownMenu';
import BurgerMenuButton from '../../lib/CommonComponents/Buttons/BurgerMenuButton/BurgerMenuButton';

const LoginMenu = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className={styles['main']}>
			<BurgerMenuButton
				lineColor={'var(--colorBlack)'}
				onClickFunction={() => { setIsMenuOpen(!isMenuOpen); }}
			/>
			<DropDownMenu
				horizontalPosition={'-220px'}
				verticalPosition={'15px'}
				height={'fit-content'}
				width={'250px'}
				isOpen={isMenuOpen}
			>
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
					onClickFunction={() => { console.log('Kirjaudu'); }}
					buttonColor={'var(--colorBrightBlue)'}
					labelFontSize={'var(--fontSizeMedium)'}
					iconFontSize={'var(--fontSizeMediumIcon)'}
					margin={'6px'}
					width={'100%'}
				/>
				<TextButton
					label={'Rekisteröidy'}
					labelColor={'var(--colorBrightBlue)'}
					onClickFunction={() => { console.log('Rekisteröidy'); }}
					width={'fit-content'}
				/>
			</DropDownMenu>
		</div>
	);
};

export default LoginMenu;