import { useSelector } from 'react-redux';
import { ResetButton } from 'src/ui-kit/ResetButton/ResetButton';
import style from './GameHeade.module.scss';
import { GAME_SYMBOLS, PLAYERS } from 'src/constants';
import { RootStore } from 'src/store/store';

export const GameHeader = () => {
	const totalScore = useSelector((s: RootStore) => s.game.totalScore);
	return (
		<header className={style.gameHeader}>
			<div className={style.gameHeaderInner}>
				<span>{PLAYERS[0].userName}</span>

				<div className={style.gameScore}>
					<span>
						Score{' '}
						<span>{`${totalScore[GAME_SYMBOLS.CROSS]} : ${
							totalScore[GAME_SYMBOLS.CIRCLE]
						}`}</span>
					</span>
					<ResetButton />
				</div>
				<span>{PLAYERS[1].userName}</span>
			</div>
		</header>
	);
};
