import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { ChatInput } from 'src/ui-kit/ChatInput';
import { GameSymbol } from '../GameSymbol';
import style from './Chat.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { SendButton } from 'src/ui-kit/icons';
import { MessageList } from '../MessageList';
import { addMessage } from 'src/store/chatSlice';
import { RootStore } from 'src/store/store';

interface Props {
	playerName: string;
	playerSymbol: string;
}

export const Chat = ({ playerName, playerSymbol }: Props) => {
	const [message, setMessage] = useState('');
	const allMessages = useSelector((s: RootStore) => s.chat.messages);

	const dispatch = useDispatch();
	const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	}, []);

	const handleSendMessage = useCallback(() => {
		setMessage('');
		return dispatch(addMessage({ message, userName: playerName }));
	}, [dispatch, message, playerName]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div className={style.chat}>
			<div className={style.chatHeader}>
				<span className={style.chatPlayerSymbol}>
					<GameSymbol symbol={playerSymbol} />
				</span>
				<span className={style.chatPlayerName}>{playerName}</span>
			</div>
			<MessageList messages={allMessages} playerName={playerName} />
			<form onSubmit={handleSubmit} className={style.chatActions}>
				<ChatInput
					value={message}
					message={message}
					onChange={handleChangeInput}
				/>
				<SendButton disabled={message.length < 1} onClick={handleSendMessage} />
			</form>
		</div>
	);
};
