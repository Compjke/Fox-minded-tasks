// import { Path, UseFormRegister } from 'react-hook-form';
// import { Icon, IconName } from '../Icon/Icon';
// import { IFormCreateEventValues } from '@/shared/config/types';
// import { ICalendar } from '@/entities/calendar';
// import style from './select.module.scss';

// interface ISelect {
// 	label: string;
// 	options: ICalendar[] | [];
// 	icon?: IconName;
// 	register: UseFormRegister<IFormCreateEventValues>;
// 	registerLabel: Path<IFormCreateEventValues>;
// }

// export const Select = ({
// 	label,
// 	options,
// 	icon,
// 	register,
// 	registerLabel,
// }: ISelect) => {
// 	return (
// 		<div className={style.container}>
// 			{icon && <Icon name={icon} />}
// 			<div className={''}>
// 				<div className='group-558'>
// 					<div className='input-field'>
// 						<p className='password'>Calendar</p>
// 						<div className='frame-81'>
// 							<img
// 								src='https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2yrnwr11ieb-0%3A1847?alt=media&token=c3ecd78f-45f2-4017-a986-be86e87e1822'
// 								alt='Not Found'
// 								className='icon'
// 							/>
// 							<div className='group-756'>
// 								<img
// 									src='https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2yrnwr11ieb-0%3A1848?alt=media&token=c702839c-4beb-4aa3-8feb-23636a3d1783'
// 									alt='Not Found'
// 									className='icon-1'
// 								/>
// 								<p className='calendar-1'>Calendar 1</p>
// 							</div>
// 						</div>
// 					</div>
// 					<ul className={style.calendarGroup}>
// 						{options.map((calenar) => (
// 							<li key={calenar.color} className='frame-819'>
// 								<div
// 									style={{
// 										background: calenar.color,
// 										width: '16px',
// 										height: '16px',
// 									}}
// 								></div>
// 								<p className='calendar-11'>{calenar.label}</p>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

import { LegacyRef, forwardRef, useEffect, useRef, useState } from 'react';
import { ICalendar } from '@/entities/calendar';
import { Icon, IconName } from '../Icon/Icon';
import styles from './select.module.scss';

type SelectProps = {
	icon?: IconName;
	label?: string;
	options: ICalendar[];
	onChange: (value: ICalendar | undefined) => void;
};

export const CalendarSelect = forwardRef(
	(
		{ onChange, options, icon, label }: SelectProps,
		ref: LegacyRef<HTMLSpanElement>
	) => {
		const [isOpen, setIsOpen] = useState(false);
		const [highlightedIndex, setHighlightedIndex] = useState(0);
		const [value, setValue] = useState(options[0]);
		const containerRef = useRef<HTMLDivElement>(null);
		function selectOption(option: ICalendar) {
			if (option !== value) {
				setValue(option);
				onChange(option);
			}
		}

		function isOptionSelected(option: ICalendar) {
			return option === value;
		}

		useEffect(() => {
			if (isOpen) setHighlightedIndex(0);
		}, [isOpen]);

		useEffect(() => {
			const handler = (e: KeyboardEvent) => {
				if (e.target != containerRef.current) return;
				switch (e.code) {
					case 'Enter':
					case 'Space':
						setIsOpen((prev) => !prev);
						if (isOpen) selectOption(options[highlightedIndex]);
						break;
					case 'ArrowUp':
					case 'ArrowDown': {
						if (!isOpen) {
							setIsOpen(true);
							break;
						}

						const newValue =
							highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
						if (newValue >= 0 && newValue < options.length) {
							setHighlightedIndex(newValue);
						}
						break;
					}
					case 'Escape':
						setIsOpen(false);
						break;
				}
			};
			containerRef.current?.addEventListener('keydown', handler);

			return () => {
				containerRef.current?.removeEventListener('keydown', handler);
			};
		}, [isOpen, highlightedIndex, options]);

		return (
			<div>
				<label className={styles.label}>{label}</label>
				<div className={styles.wrapper}>
					{icon && <Icon name='calendar' />}
					<div
						ref={containerRef}
						onBlur={() => setIsOpen(false)}
						onClick={() => setIsOpen((prev) => !prev)}
						tabIndex={0}
						className={styles.container}
					>
						<span className={styles.value} ref={ref}>
							<span
								className={styles.optionColor}
								style={{ backgroundColor: value.color }}
							></span>
							{value?.label}
						</span>

						<div className={styles.caret}></div>
						<ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
							{options.map((option, index) => (
								<li
									onClick={(e) => {
										e.stopPropagation();
										selectOption(option);
										setIsOpen(false);
									}}
									onMouseEnter={() => setHighlightedIndex(index)}
									key={option.color}
									data-color={option.color}
									className={`${styles.option} ${
										isOptionSelected(option) ? styles.selected : ''
									} ${index === highlightedIndex ? styles.highlighted : ''}`}
								>
									<span
										style={{ backgroundColor: option.color }}
										className={styles.optionColor}
									/>
									{option.label}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
);
