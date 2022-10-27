import { useState } from 'react';
import LoginMenu from './Components/LoginMenu/LoginMenu';
import RegisterMenu from './Components/RegisterMenu/RegisterMenu';
import BurgerMenuButton
	from '../../../lib/CommonComponents/Buttons/BurgerMenuButton/BurgerMenuButton';
import DropDownMenu
	from '../../../lib/CommonComponents/UI/DropDownMenu/DropDownMenu';
import styles from './LoginAndRegisterMenu.module.css';

const LoginAndRegisterMenu = () => {

	const [viewSelection, setViewSelection] = useState(1);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className={styles['main']}>
			<DropDownMenu
				menuButton={<BurgerMenuButton
					lineColor={'var(--colorBlack)'}
					onClickFunction={() => {
						setIsMenuOpen(!isMenuOpen);
					}}
				/>}
				horizontalPosition={'-240px'}
				verticalPosition={'50px'}
				height={'fit-content'}
				width={'250px'}
				isOpen={isMenuOpen}
				setIsOpen={setIsMenuOpen}
				selectedView={viewSelection}
				padding={'15px'}
			>
				{viewSelection === 1 ?
					<LoginMenu
						setShowRegisterMenu={() => { setViewSelection(2); }}
					/>
					:
					viewSelection === 2 ?
						<RegisterMenu
							setShowLoginMenu={() => { setViewSelection(1); }}
						/>
						:
						<></>
				}
			</DropDownMenu>
		</div>
	);
};

export default LoginAndRegisterMenu;