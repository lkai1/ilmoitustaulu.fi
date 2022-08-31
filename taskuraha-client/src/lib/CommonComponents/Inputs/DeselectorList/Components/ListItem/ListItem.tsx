import styles from './ListItem.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface Props {
    value: string | undefined;
    onClickFunction: () => void;
}

const ListItem = ({
	value,
	onClickFunction
}: Props) => {

	return (
		<div className={styles['main']}>
			<div className={styles['contentContainer']}>
				<HighlightOffIcon
					onClick={() => { onClickFunction(); }}
					style={{
						color: 'var(--colorPastelRed)',
						fontSize: 'var(--fontSizeLargeIcon)',
						cursor: 'pointer'
					}}
				/>
				<p className={styles['label']}>
					{value}
				</p>
			</div>
		</div>
	);
};

export default ListItem;