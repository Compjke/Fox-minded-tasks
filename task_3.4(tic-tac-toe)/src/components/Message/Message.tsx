import clsx from 'clsx';
import style from './Message.module.scss';

interface Props {
	textMessage: string;
	author: string;
	whosChat: string;
}
export const Message = ({ author, textMessage, whosChat }: Props) => {
	// console.log('text: ' + textMessage);
	// console.log('author: ' + author);
	// console.log('WindowChat : ' + whosChat);

	const classNames = clsx(
		style.message,
		author === whosChat ? style.messageMine : style.messageInterlocutor
	);
	return <li className={classNames}>{textMessage}</li>;
};
