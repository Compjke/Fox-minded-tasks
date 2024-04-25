import clsx from 'clsx';
import { GameSymbol } from '../GameSymbol';
import { memo } from 'react';
import styles from './GameCell.module.scss';


export const GameCell = memo(function GameCell({
	onClick,
	className,
	isWinner,
	disabled,
	symbol,
	index,
}) {

	return (
		<button
			disabled={disabled}
			onClick={() => onClick(index)}
			className={clsx(styles.gameCell, isWinner && styles.winnerCell)}
		>
			{symbol && <GameSymbol symbol={symbol} className={styles.gameSymbol} />}
		</button>
	);
});
