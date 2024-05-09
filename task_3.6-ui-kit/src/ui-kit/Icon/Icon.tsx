import { ICONS } from '@/constans/iconConstans';
import { PLayIcon, PauseIcon } from '../icons';

interface IIcon {
	className?: string;
	name: string;
}

export function Icon({ name, className }: IIcon) {
	const Svg = {
		[ICONS.PAUSE]: PauseIcon,
		[ICONS.PLAY]: PLayIcon,
	}[name];

	return <Svg className={className} />;
}
