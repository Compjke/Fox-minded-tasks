export const computeWinnerLineStyle = (lines: number[]): string | undefined => {
	/*
[0, 1, 2], // 3
		[3, 4, 5], // 12
		[6, 7, 8], // 21
		[0, 3, 6], // 9
		[1, 4, 7], // 12
		[2, 5, 8], // 15
		[0, 4, 8], // 12
		[2, 4, 6], // 12
      */
	const str = lines.join('');

	return {
		'012': 'TopHorizontal',
		'345': 'CenterHorizontal',
		'678': 'BottomHorizontal',
		'036': 'LeftVertical',
		'147': 'CenterVertical',
		'258': 'RigthVertical',
		'048': 'LeftRightDiagonal',
		'246': 'RightLeftDiagonal',
	}[str];
};
