import { useState } from 'react';
import style from './drop-down-menu.module.scss';
import clsx from 'clsx';
import { Icon } from '../Icon';

interface IDropDownMenu {
	// label : string;
	items: string[];
	isShown: boolean;
}

const testItems = ['Week', 'Day'];

export const DropDownMenu = ({
	isShown = false,
	items = testItems,
}: IDropDownMenu) => {
	const [isOpen, setIsOpen] = useState(isShown);
	const [selectedItem, setSelectedItem] = useState(items[0]);

	return (
		<div data-testid='drop-down' className={style.dropDownContainer}>
			<div className={clsx(style.dropDownInput, isOpen && style.active)}>
				<span>{selectedItem}</span>
				<button
					style={{ rotate: isOpen ? '180deg' : '' }}
					className={style.dropDownBtn}
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<Icon name='drop-down-menu' />
				</button>
			</div>
			{isOpen && (
				<ul className={style.itemsList}>
					{items.map((i) => (
						<li
							onClick={() => {
								setSelectedItem(i);
								setIsOpen((prev) => !prev);
							}}
							key={i}
							className={clsx(style.item, selectedItem === i && style.selected)}
						>
							{i}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
