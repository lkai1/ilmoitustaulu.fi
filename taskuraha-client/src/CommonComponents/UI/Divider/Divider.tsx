import styles from './Divider.module.css';

interface Props {
    color: string;
    vertical?: boolean;
    horizontal?: boolean;
}

const Divider = ({ color, vertical, horizontal }: Props) => {
	return (
		<div className={styles['main']}
			style={{ backgroundColor: color }}
			is-vertical={vertical?.toString()}
			is-horizontal={horizontal?.toString()}
		>
		</div>
	);
};

export default Divider;