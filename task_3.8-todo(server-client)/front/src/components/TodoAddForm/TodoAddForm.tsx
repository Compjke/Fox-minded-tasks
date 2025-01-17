import { Plus } from '@/ui-kit/icons';
import { addNewTodo } from '@/api/addNewTodo';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
// import { FormEventHandler, useRef} from 'react';

import style from './todo-add-form.module.scss';
import { useMutaionAdd } from '@/hooks/useMutationAddTodo';

// interface IProps {}
// type ResponseNewTodo = {
// 	data: ITodoItem;
// 	statusText: string;
// 	status: number;
// };
export const TodoAddForm = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [message, setMessage] = useState('');
	const {
		status,
		isPending,
		isError,
		isSuccess,
		mutate: addTodo,
		data,
		error,
		variables,
	} = useMutaionAdd(addNewTodo, 'addTodo');

	useEffect(() => {
		let timeout: string | number | NodeJS.Timeout | undefined;
		if (isError) {
			setMessage(error.message);
		}
		if (isSuccess) {
			setMessage(`${data.statusText}: ${data.status}`);
		}

		if (message.length) {
			timeout = setTimeout(() => {
				setMessage('');
			}, 3000);
		}

		return () => clearTimeout(timeout);
	}, [status]);

	const handleAddNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (!inputRef.current?.value) {
			return;
		}
		addTodo({ text: inputRef.current?.value, completed: false });
		inputRef.current.value = '';
	};
	return (
		<form className={style.form} onSubmit={handleAddNewTodo}>
			<div className={style.formInner}>
				<input
					ref={inputRef}
					placeholder='Type here to add a task...'
					type='text'
					className={style.input}
				/>
				<button className={style.button}>
					<Plus /> Add
				</button>
			</div>
			{isPending && (
				<li style={{ opacity: 0.5 }}>{'trying to add ' + variables.text}</li>
			)}
			{isSuccess && (
				<li style={{ color: 'greenyellow' }}>
					{status + ': ' + data.statusText}
				</li>
			)}
			{isError && <li style={{ color: 'red' }}>{error.message}</li>}
		</form>
	);
};
