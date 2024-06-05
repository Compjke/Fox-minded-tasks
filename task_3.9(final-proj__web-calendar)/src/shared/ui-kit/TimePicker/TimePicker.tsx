import clsx from 'clsx';
import style from './time.module.scss';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { getTimesArr } from '@/shared/libs/time';
import dayjs from 'dayjs';

interface ITimePicker {
	className?: string;
	label?: string;
	onSelect: (item: string) => void;
	// children: ReactNode;
	options?: string[];
	defaultValue?: string;
}

export const TimePicker = ({
	className,
	label = 'Time',
	onSelect,
	options = getTimesArr(),
	defaultValue = dayjs().format('HH:mm a'),
}: ITimePicker) => {
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [selectedValue, setSelectedValue] = useState(defaultValue);

	const handleClick = (value: SetStateAction<string>) => {
		setSelectedValue(value);
		onSelect(selectedValue);
		// setOpen(false);
	};

	useEffect(() => {
		inputRef.current.value = selectedValue;
	}, [selectedValue]);
	// console.log('render')
	return (
		<div className={clsx(style.select, className)}>
			<label className={style.selectLabel}>
				{label}
				<input
					readOnly
					onMouseEnter={() => setOpen((prev) => !prev)}
					className={style.selectInput}
					ref={inputRef}
				/>
			</label>
			<div className={''}>
				{open && (
					<ul
						className={style.selectContent}
						onMouseLeave={() => setOpen(false)}
					>
						{options.map((item) => (
							<li
								data-testid='select-item'
								onClick={() => handleClick(item)}
								key={item}
								className={clsx(
									style.selectItem,
									selectedValue === item && style.selected
								)}
							>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
