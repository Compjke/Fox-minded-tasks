import { CircleIcon, CrossIcon } from '../ui-kit/icons';
import { GAME_SYMBOLS } from '../../constants';

interface Props {
	symbol: string;
	className?: string ;
}

export function GameSymbol({ symbol, className }: Props) {
	const Icon =
		{
			[GAME_SYMBOLS.CROSS]: CrossIcon,
			[GAME_SYMBOLS.CIRCLE]: CircleIcon,
		}[symbol] ?? CrossIcon;

	return <Icon className={className!} />;
}
