import { createSlice } from '@reduxjs/toolkit';
import { GAME_SYMBOLS } from '../constants';
import { computeWinner } from '../utils/computeWinner';
import { getNextMove } from '../utils/getNextMove';
import { getStatusMoves } from '../utils/getStatusMoves';

export interface GameState {
	cells: null[] | string[];
	currentMove: string;
	nextMove: string;
	statusMessageOfMoves: {
		cross: string;
		circle: string;
	};
	winner: {
		winnerSymbol: string | null;
		winnerRow: null | number[];
	};
	totalScore: {
		cross: number;
		circle: number;
	};
}

const init: GameState = {
	cells: Array(9).fill(null),
	currentMove: GAME_SYMBOLS.CROSS,
	nextMove: GAME_SYMBOLS.CIRCLE,
	statusMessageOfMoves: {
		cross: 'Game started! Your turn:',
		circle: 'Game started! Wait your opponent.',
	},
	winner: {
		winnerSymbol: '',
		winnerRow: null,
	},
	totalScore: {
		cross: 0,
		circle: 0,
	},
};

const gameSLice = createSlice({
	name: 'game',
	initialState: init,
	reducers: {
		cellClick: (state, action) => {
			const indexOfCell = action.payload;
			if (state.cells[indexOfCell]) {
				console.log('sovpalo');
				return state;
			}
			state.cells[indexOfCell] = state.currentMove;
			state.currentMove =
				state.currentMove === GAME_SYMBOLS.CROSS
					? GAME_SYMBOLS.CIRCLE
					: GAME_SYMBOLS.CROSS;
			state.nextMove = getNextMove(state.currentMove);
			const winner = computeWinner(state.cells);
			if (winner) {
				const { winnerRow, winnerSymbol } = winner;
				state.winner = {
					winnerSymbol,
					winnerRow,
				};
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				state.totalScore[winnerSymbol]++;
			}

			state.statusMessageOfMoves = getStatusMoves(state.currentMove, winner);
		},
		startNewGame: (state) => {
			state.cells = Array(9).fill(null);
			state.currentMove = GAME_SYMBOLS.CROSS;
			state.winner = {
				winnerSymbol: '',
				winnerRow: null,
			};
			state.statusMessageOfMoves = {
				cross: 'Game started! Your turn:',
				circle: 'Game started! Wait your opponent.',
			};
		},
		resetGame: (state) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			return (state = init);
		},
	},
});

export const { cellClick, startNewGame, resetGame } = gameSLice.actions;
export default gameSLice.reducer;
