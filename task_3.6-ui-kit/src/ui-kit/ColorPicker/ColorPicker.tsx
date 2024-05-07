import { useState } from 'react';
import style from './color-picker.module.scss';
import clsx from 'clsx';

const colorsArr = [
	'#9f2957',
	'#d90056',
	'#e25d33',
	'#dfc45a',
	'#b8c42f',
	'#16af6e',
	'#429488',
	'#397e49',
	'#439bdf',
	'#4254af',
	'#6c7ac4',
	'#8332a4',
];

interface IColorPicker {
	colors: string[];
	title?: string;
}

export const ColorPicker = ({
	colors = colorsArr,
	title = 'Colors',
}: IColorPicker) => {
	const [selectedColor, setSelectedColor] = useState<string | null>(null);

	return (
		<div className={style.container}>
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
							onClick={() => setSelectedColor(color)}
							style={{ backgroundColor: color }}
							className={clsx(style.color)}
						></button>
					</div>
				))}
			</div>
		</div>
	);
};
