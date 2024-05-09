import { ICONS } from '@/constans/iconConstans';
import { PLayIcon, PauseIcon } from '../icons';

const ICON_MAP = {
	[ICONS.PAUSE]: PauseIcon,
	[ICONS.PLAY]: PLayIcon,
} as const;

export type IconName = keyof typeof ICON_MAP;

interface IIcon {
	className?: string;
	name: IconName;
}

export function Icon({ name, className }: IIcon) {
	const Svg = ICON_MAP[name];

	return <Svg className={className} />;
}
