import styles from './Modal.module.css';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
	children: JSX.Element[] | JSX.Element;
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, visibility, setVisibility }: Props) => {

	useEffect(() => {
		//fix so that page does not shift to right
		const body: HTMLBodyElement | null = document.querySelector('body');
		if (visibility && body) {
			body.style.overflowY = 'hidden';
			body.style.marginRight = '100px';
		} else if (!visibility && body) {
			body.style.marginRight = '0px';
			body.style.overflowY = 'scroll';
		}
	}, [visibility]);

	return (
		<div className={styles['main']}
			is-visible={visibility.toString()}
		>
			<div className={styles['blocker']}
				onClick={() => {
					setVisibility(false);
				}}>
			</div>
			<div className={styles['contentContainer']}>
				{children}
			</div>
		</div>
	);
};

export default Modal;