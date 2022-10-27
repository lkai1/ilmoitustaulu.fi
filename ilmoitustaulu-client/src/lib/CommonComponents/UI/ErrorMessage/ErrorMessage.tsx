import { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './ErrorMessage.module.css';

interface Props {
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
    margin: string;
}

const ErrorMessage = ({
	message,
	setMessage,
	margin
}: Props) => {

	useEffect(() => {
		if (!message) return;
		setTimeout(() => {
			setMessage('');
		}, 4000);
	}, [message]);

	return (
		<div className={styles['main']}
			is-message={Boolean(message).toString()}
			style={{
				margin: margin
			}}
		>
			<p className={styles['messageText']}>
				{message}
			</p>
		</div>
	);
};

export default ErrorMessage;