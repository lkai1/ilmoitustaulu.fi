import {
	ChangeEvent,
	useCallback,
	useEffect,
	useState,
	useRef
} from 'react';
import styles from './Slider.module.css';

const Slider = () => {
	const min = 0;
	const max = 100;
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef<HTMLInputElement>(null);
	const maxValRef = useRef<HTMLInputElement>(null);
	const range = useRef<HTMLDivElement>(null);

	const getPercent = useCallback(
		(value: number) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	);

	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal);
			const maxPercent = getPercent(+maxValRef.current.value);

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [minVal, getPercent]);

	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current.value);
			const maxPercent = getPercent(maxVal);

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [maxVal, getPercent]);

	return (
		<div className={styles['container']}>
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				ref={minValRef}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					const value = Math.min(+event.target.value, maxVal - 1);
					setMinVal(value);
					event.target.value = value.toString();
				}}
				className={minVal > max - 100 ?
					`${styles['thumb']} ${styles['thumb--zindex-5']}`
					: `${styles['thumb']} ${styles['thumb--zindex-3']}`}
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				ref={maxValRef}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					const value = Math.max(+event.target.value, minVal + 1);
					setMaxVal(value);
					event.target.value = value.toString();
				}}
				className={`${styles['thumb--zindex-4']} ${styles['thumb']}`}
			/>

			<div className={styles['slider']}>
				<div className={styles['slider__track']}></div>
				<div ref={range} className={styles['slider__range']}></div>
				<div className={styles['slider__left-value']}>
					{`${minVal} €`}
				</div>
				<div className={styles['slider__right-value']}>
					{`${maxVal} €`}
				</div>
			</div>
		</div>
	);
};

export default Slider;