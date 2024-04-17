import { useEffect, useState } from 'react';

export const useTime = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval: number | undefined;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prev) => prev + 1000);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	return { time, setTime, isRunning, setIsRunning };
};
