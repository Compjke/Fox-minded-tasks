import clsx from 'clsx';
import { GameSymbol } from '../GameSymbol';
import { memo } from 'react';
import styles from './GameCell.module.scss';

interface Props {
	onClick: (index: number) => void;
	className?: string;
	isWinner?: boolean;
	disabled?: boolean;
	symbol?: string | null;
	index: number;
}
export const GameCell = memo(function GameCell({
	onClick,
	className,
	isWinner,
	disabled,
	symbol,
	index,
}: Props) {
	return (
		<button
			disabled={disabled}
			onClick={() => onClick(index)}
			className={clsx(
				className,
				styles.gameCell,
				isWinner && styles.winnerCell
			)}
		>
			{symbol && <GameSymbol symbol={symbol} className={styles.gameSymbol} />}
		</button>
	);
});
