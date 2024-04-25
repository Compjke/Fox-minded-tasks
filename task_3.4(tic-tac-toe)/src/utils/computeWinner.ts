export function computeWinner(cells: Array<string | null>) {
	// ['x' , 'x' , 'x' , ....]
	let winnerSymbol = '';
	let winnerRow = null;
	const lines = [
		[0, 1, 2], // 3
		[3, 4, 5], // 12
		[6, 7, 8], // 21
		[0, 3, 6], // 9
		[1, 4, 7], // 12
		[2, 5, 8], // 15
		[0, 4, 8], // 12
		[2, 4, 6], // 12
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			winnerSymbol = cells[a]!;
			winnerRow = lines[i];
		}
	}

	const isCellsEnd = cells.every((c) => c !== null);
	if (isCellsEnd && !winnerRow?.length) {
		return { winnerSymbol: 'draw', winnerRow };
	}

	return { winnerSymbol, winnerRow };
}
