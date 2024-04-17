import { ButtonHTMLAttributes } from 'react';

export interface IActions {
	isRunning: boolean;
	onPlayPause: (arg: boolean) => void;
	onResetTime: (arg: number) => void;
}

export interface ITime {
	currentTime: number;
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	kindOf: string;
	onClick: () => void;
	props?: object;
	isRunning?: boolean;
}
