import { useTime } from './hooks/useTimer';
import { Time } from './components/Time';
import style from './App.module.css';
import { Actions } from './components/Actions';
function App() {
	const { isRunning, setIsRunning, setTime, time } = useTime();
	return (
		<div className={style.container}>
			<Time currentTime={time} />
			<div className={style.line} />
			<Actions
				onResetTime={setTime}
				isRunning={isRunning}
				onPlayPause={setIsRunning}
			/>
		</div>
	);
}

export default App;
