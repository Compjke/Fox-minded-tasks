import { ICONS } from '@/ui-kit/Icon/constans/iconConstans';
import {
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUp,
	BasketIcon,
	CheckBoxEmpty,
	CheckBoxFilled,
	CloseIcon,
	ConfirmIcon,
	DeleteIcon,
	DropDownMenuIcon,
	EditIcon,
	GarbageIcon,
	GoogleIcon,
	HidePasswordIcon,
	InfoIcon,
	LogOutIcon,
	LorryIcon,
	MinusIcon,
	PLayIcon,
	PauseIcon,
	PlayIconInCircle,
	PlusIcon,
	ShowPasswordIcon,
	UserIcon,
} from '../icons';
import { SVGAttributes } from 'react';

const ICON_MAP = {
	[ICONS.ARROW_UP]: ArrowUp,
	[ICONS.ARROW_LEFT]: ArrowLeftIcon,
	[ICONS.ARROW_RIGHT]: ArrowRightIcon,
	[ICONS.ARROW_DOWN]: ArrowDownIcon,
	[ICONS.BASKET]: BasketIcon,
	[ICONS.CLOSE]: CloseIcon,
	[ICONS.CHECKBOX_EMPTY]: CheckBoxEmpty,
	[ICONS.CHECKBOX_FILLED]: CheckBoxFilled,
	[ICONS.CONFIRM]: ConfirmIcon,
	[ICONS.DELETE]: DeleteIcon,
	[ICONS.DROP_DOWN_MENU]: DropDownMenuIcon,
	[ICONS.EDIT]: EditIcon,
	[ICONS.GARBAGE]: GarbageIcon,
	[ICONS.GOOGLE]: GoogleIcon,
	[ICONS.HIDE_PASSWORD]: HidePasswordIcon,
	[ICONS.INFO]: InfoIcon,
	[ICONS.LOG_OUT]: LogOutIcon,
	[ICONS.LORRY]: LorryIcon,
	[ICONS.MINUS]: MinusIcon,
	[ICONS.PLUS]: PlusIcon,
	[ICONS.PAUSE]: PauseIcon,
	[ICONS.PLAY]: PLayIcon,
	[ICONS.PLAY_IN_CIRCLE]: PlayIconInCircle,
	[ICONS.SHOW_PASSWORD]: ShowPasswordIcon,
	[ICONS.USER]: UserIcon,
} as const;

export type IconName = keyof typeof ICON_MAP;

interface IIcon extends SVGAttributes<HTMLOrSVGElement> {
	className?: string;
	name: IconName;
}

export function Icon({ name, className }: IIcon) {
	const Svg = ICON_MAP[name];

	return <Svg  className={className!} />;
}
