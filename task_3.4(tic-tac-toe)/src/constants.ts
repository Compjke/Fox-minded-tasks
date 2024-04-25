export const GAME_SYMBOLS = {
	CROSS: 'cross',
	CIRCLE: 'circle',
};

export const MOVE_ORDER = [GAME_SYMBOLS.CROSS, GAME_SYMBOLS.CIRCLE];

export const PLAYERS = [
	{
		id: 1,
		userName: 'Player-1',
		symbol: GAME_SYMBOLS.CROSS,
	},
	{
		id: 2,
		userName: 'Player-2',
		symbol: GAME_SYMBOLS.CIRCLE,
	},
];
