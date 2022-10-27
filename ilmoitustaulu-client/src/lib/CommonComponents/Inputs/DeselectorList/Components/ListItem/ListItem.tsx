import styles from './ListItem.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface Props {
	value: string | undefined;
	onClickFunction: () => void;
	labelColor?: string;
}

const ListItem = ({
	value,
	onClickFunction,
	labelColor,
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
				<p className={styles['label']}
					style={{ color: labelColor }}
				>
					{value}
				</p>
			</div>
		</div>
	);
};

export default ListItem;