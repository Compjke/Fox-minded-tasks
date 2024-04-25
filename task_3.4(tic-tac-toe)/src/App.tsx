import style from './App.module.scss';
import { GameHeader } from './components/GameHeader';
import { GameBoard } from './components/GameBoard';
import { useSelector } from 'react-redux';
import { GAME_SYMBOLS, PLAYERS } from './constants';

function App() {
	// const { currentMove, nextMove } = useSelector((s) => s.game);
	const statusGame = useSelector((s) => s.game.statusMessageOfMoves);

	return (
		<div className={style.game}>
			<GameHeader />
			<div className={style.gameBoardWrapper}>
				<
					GameBoard
					player={PLAYERS[0]}
					statusMessage={statusGame[GAME_SYMBOLS.CROSS]}
				/>
				<div className={style.divideLine} />
				<GameBoard
					player={PLAYERS[1]}
					statusMessage={statusGame[GAME_SYMBOLS.CIRCLE]}
				/>
			</div>
		</div>
	);
}

export default App;
