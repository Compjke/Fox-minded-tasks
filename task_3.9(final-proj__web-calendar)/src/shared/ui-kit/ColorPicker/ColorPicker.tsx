import { useState } from 'react';
import style from './color-picker.module.scss';
import clsx from 'clsx';
import { colorsArr } from '@/shared/config';

interface IColorPicker {
	colors: string[];
	title?: string;
	onSelect: (value: string) => void;
}

export const ColorPicker = ({
	colors = colorsArr,
	title = 'Colors',
	onSelect,
}: IColorPicker) => {
	const [selectedColor, setSelectedColor] = useState<string>('');

	const handleClick = (color: string) => {
		setSelectedColor(color);
		onSelect(color);
	};

	return (
		<div className={style.container} data-testid='color-picker'>
			{/* For test */}
			<div
				style={{
					display: 'flex',
					gap: '5px',
					fontSize: '15px',
					alignItems: 'center',
				}}
			>
				Selected color{' '}
				{selectedColor ? (
					<span style={{ color: selectedColor }}>{selectedColor}</span>
				) : (
					'no choisen'
				)}
			</div>
			<h3 className={style.title}>{title}</h3>
			<div className={style.colors}>
				{colors.map((color) => (
					<div
						className={clsx(
							style.colorWrapper,
							selectedColor === color && style.selected
						)}
					>
						<button
							onClick={() => handleClick(color)}
							style={{ backgroundColor: color }}
							className={clsx(style.color)}
						></button>
					</div>
				))}
			</div>
		</div>
	);
};
