import clsx from 'clsx';
import style from './select.module.scss';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { getTimesArr } from '@/utils/time';
import dayjs from 'dayjs';

interface ISelect {
	className?: string;
	isOpen: boolean;
	label: string;
	// children: ReactNode;
}

export const Select = ({
	className,
	isOpen = false,
	label = 'Time',
}: ISelect) => {
	const [open, setOpen] = useState(isOpen);
	const inputRef = useRef<HTMLInputElement>(null);
	const [selectedTime, setSelectedTime] = useState(dayjs().format('HH:mm a'));

	const handleClick = (value: SetStateAction<string>) => {
		setSelectedTime(value);
		// setOpen(false);
	};

	useEffect(() => {
		inputRef.current.value = selectedTime;
	}, [selectedTime]);
	// console.log('render')
	return (
		<div className={clsx(className, style.select)}>
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
					<div
						className={style.selectContent}
						onMouseLeave={() => setOpen(false)}
					>
						{getTimesArr().map((item) => (
							<div
								onClick={() => handleClick(item)}
								key={item}
								className={clsx(
									style.selectItem,
									selectedTime === item && style.selected
								)}
							>
								{item}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
