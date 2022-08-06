import styles from './Button.module.css';


interface Button {
    number: number;
}

const Button = ({ number }: Button) => {
	return (
		<div className={styles['Button']}>
			{number}
		</div>
	);
};

export default Button;