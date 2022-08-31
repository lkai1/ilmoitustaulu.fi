import styles from './LocationSelection.module.css';
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import Selector from '../../../../../lib/CommonComponents/Inputs/Selector/Selector';
import TextInput from '../../../../../lib/CommonComponents/Inputs/TextInput/TextInput';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../Header/Header';
import IconButton from '../../../../../lib/CommonComponents/Buttons/IconButton/IconButton';
import DeselectorList
	from '../../../../../lib/CommonComponents/Inputs/DeselectorList/DeselectorList';

const LocationSelection = () => {

	const [selectedProvinces, setSelectedProvinces] =
		useState<Array<string | undefined>>([]);
	const [selectedCities, setSelectedCities] =
		useState<Array<string | undefined>>([]);
	const [filterStr, setFilterStr] = useState('');
	const [selectedView, setSelectedView] = useState(0);

	const provinces = [
		'Kaikki maakunnat',
		'Satakunta',
		'Uusimaa',
		'Etelä-Pohjanmaa',
		'Pirkanmaa',
		'Lappi',
	];

	const cities = [
		'Kaikki kaupungit',
		'Pori',
		'Tampere',
		'Helsinki',
		'Rauma',
		'Oulu',
		'Hinnerjoki'
	];

	useEffect(() => {
		setFilterStr('');
	}, [selectedView]);

	interface props {
		selectedView: number;
		setSelectedView: Dispatch<SetStateAction<number>>
	}

	const ViewSelection = ({
		selectedView,
		setSelectedView
	}: props) => {
		return <div>
			{selectedView === 0 ?
				<IconButton
					label={'Kaupungit'}
					labelIcon={ArrowForwardIcon}
					onClickFunction={() => { setSelectedView(1); }}
					buttonColor={'var(--colorPastelRed)'}
					labelColor={'var(--colorWhite)'}
					width={'100%'}
					iconFontSize={'var(--fontSizeMediumIcon)'}
					labelFontSize={'var(--fontSizeMedium)'}
				/>
				:
				<IconButton
					labelIcon={ArrowBackIcon}
					onClickFunction={() => { setSelectedView(0); }}
					buttonColor={'var(--colorPastelRed)'}
					labelColor={'var(--colorWhite)'}
					width={'100%'}
					iconFontSize={'var(--fontSizeMediumIcon)'}
					labelFontSize={'var(--fontSizeMedium)'}
				/>
			}
		</div>;
	};

	const getFilteredValues = (
		values: Array<string | undefined>,
		filterStr: string
	) => {
		return values.filter(value =>
			value
				?.toLowerCase()
				.startsWith(filterStr.toLowerCase())
		);
	};

	return (
		<div className={styles['main']}>
			<Header value={'Sijainti'} />
			<div className={styles['contentContainer']}>
				{selectedView === 0 ?
					<Selector
						values={getFilteredValues(provinces, filterStr)}
						selectedValues={selectedProvinces}
						setSelectedValues={setSelectedProvinces}
					/>
					:
					<Selector
						values={getFilteredValues(cities, filterStr)}
						selectedValues={selectedCities}
						setSelectedValues={setSelectedCities}
					/>
				}
				<div className={styles['inputContainer']}>
					<TextInput
						value={filterStr}
						setValue={setFilterStr}
						placeHolder={'esim. uusimaa'}
						borderRadiusBottom={true}
						width={'100%'}
					/>
				</div>
				<ViewSelection
					selectedView={selectedView}
					setSelectedView={setSelectedView}
				/>
				<DeselectorList
					label='Maakunnat'
					values={selectedProvinces}
					setValues={setSelectedProvinces}
				/>
				<DeselectorList
					label='Kaupungit'
					values={selectedCities}
					setValues={setSelectedCities}
				/>
			</div>
		</div>
	);
};
export default LocationSelection;