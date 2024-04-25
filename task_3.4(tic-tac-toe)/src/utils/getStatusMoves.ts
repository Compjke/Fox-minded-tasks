import { GAME_SYMBOLS, PLAYERS } from '../constants';

export const getStatusMoves = (currentMove: string, isWinner: unknown) => {
	if (isWinner) {
		const { winnerSymbol } = isWinner;
		if (winnerSymbol === 'draw') {
			return {
				cross: 'Draw',
				circle: 'Draw',
			};
		}
		const winnerPlayer = PLAYERS.find(
			(player) => player.symbol === winnerSymbol
		);
		return {
			cross: winnerPlayer?.symbol === 'cross' ? 'You Win' : 'You Lose',
			circle: winnerPlayer?.symbol === 'circle' ? 'You Win' : 'You Lose',
		};
	}
	return {
		cross:
			currentMove === GAME_SYMBOLS.CROSS ? 'Your move' : 'Waiting for opponent',
		circle:
			currentMove === GAME_SYMBOLS.CIRCLE
				? 'Your move'
				: 'Waiting for opponent',
	};
};
