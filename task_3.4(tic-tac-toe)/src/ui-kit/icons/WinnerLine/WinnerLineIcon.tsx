import clsx from 'clsx';
import { computeWinnerLineStyle } from 'src/utils/computeLineStyle';
import styles from './WinnerLine.module.scss';
interface Props {
	className?: string;
	winnerRow: number[];
}
export const WinnerLineIcon = ({ className, winnerRow }: Props) => {
	const computedClass = computeWinnerLineStyle(winnerRow)!;
	return (
		<svg
			className={clsx(className, styles[computedClass])}
			width='276'
			height='276'
			viewBox='0 0 276 276'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3 273L273 3'
				stroke='white'
				strokeWidth='6'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default WinnerLineIcon;
