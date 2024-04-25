import { MOVE_ORDER } from '../constants';

export function getNextMove(currentMove: string) {
	const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
	return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}
