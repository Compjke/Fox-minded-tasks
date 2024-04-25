import { useEffect, useRef } from 'react';
import { Message } from '../Message/Message';
import style from './MessageList.module.scss';

interface Props {
	messages: object[];
	playerName: string;
}

export const MessageList = ({ messages, playerName }: Props) => {
	const divUnderMessages = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const div = divUnderMessages.current;
		if (div) {
			console.log(div);
			div.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	}, [messages]);

	return (
		<ul className={style.chatMessages}>
			{messages.length > 0 ? (
				messages.map((m) => (
					<Message
						key={m.id}
						author={m.userName}
						whosChat={playerName}
						textMessage={m.message}
					/>
				))
			) : (
				<p>No messages yet</p>
			)}
			<div ref={divUnderMessages}></div>
		</ul>
	);
};
