import { Selector, useDispatch, useSelector } from 'react-redux';
import { Chat } from '../Chat';
import { GameCell } from '../GameCell';
import { useCallback, useEffect } from 'react';
import { GameState, cellClick, startNewGame } from '../../store/gameSlice';
import { WinnerLineIcon } from '../ui-kit/icons';

import style from './GameBoard.module.scss';
import clsx from 'clsx';

interface Props {
	statusMessage: string;
	player: { id: number; userName: string; symbol: string };
}

export const GameBoard = ({ statusMessage, player }: Props) => {
	const { cells, currentMove } = useSelector((state) => state.game);
	const { winnerSymbol, winnerRow } = useSelector((s) => s.game.winner);
	const dispatch = useDispatch();
	const handleCellClick = useCallback(
		(ind: number) => dispatch(cellClick(ind)),
		[dispatch]
	);

	const classStatusMessage = clsx(
		style.statusMessage,
		winnerSymbol && statusMessage === 'You Win' && style.win,
		winnerSymbol && statusMessage === 'You Lose' && style.lose
	);
	useEffect(() => {
		let timeout: number | undefined;
		if (winnerSymbol) {
			console.log(winnerRow);
			timeout = setTimeout(() => {
				dispatch(startNewGame());
			}, 5000);
		}
		return () => clearTimeout(timeout);
	}, [dispatch, winnerRow, winnerSymbol]);

	return (
		<div className={style.gameBoard}>
			<h2 className={classStatusMessage}>{statusMessage}</h2>

			<div className={style.gameCells}>
				{cells.map((cell, ind) => (
					<GameCell
						onClick={handleCellClick}
						index={ind}
						key={ind}
						className
						disabled={!!winnerSymbol || player.symbol !== currentMove}
						isWinner={winnerRow?.includes(ind)}
						symbol={cell}
					/>
				))}
				{winnerRow && (
					<WinnerLineIcon className={style.winnerLine} winnerRow={winnerRow} />
				)}
			</div>
			<Chat playerName={player.userName} playerSymbol={player.symbol} />
		</div>
	);
};
