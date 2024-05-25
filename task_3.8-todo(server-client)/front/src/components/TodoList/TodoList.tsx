import { TodoItem } from '../TodoItem';
import { DeleteButton } from '@/ui-kit/DeleteButton';
import { ITodoItem } from '../TodoItem/TodoItem';

import { useTodosQuery } from '@/hooks/useTodosQuery';
import { useMutationState } from '@tanstack/react-query';
import { useId } from 'react';
import style from './todo-list.module.scss';
import { deleteAllTodo } from '@/api/deleteAllTodos';
import { useMutationDelete } from '@/hooks/useMutationDelete';

export const TodoList = () => {
	const { error, isSuccess, data: todos, isLoading } = useTodosQuery();
	const { mutate: deleteAll } = useMutationDelete(deleteAllTodo);
	const tempId = useId();
	// ! USE MUTATION
	const variables = useMutationState({
		filters: { mutationKey: ['addTodo'], status: 'pending' },
		select: (mut) => mut.state.variables as ITodoItem,
	});

	if (isLoading) {
		return <div style={{ marginTop: '20px' }}>Loading....</div>;
	}
	if (error) {
		if (error) return <div>An error occurred: {error.message}</div>;
	}
	if (isSuccess && !todos.length) {
		return <div className={style.empty}>Todos are absent </div>;
	}

	return (
		<>
			<ul className={style.todoList}>
				{isSuccess &&
					todos.map(({ text, _id, completed }: ITodoItem) => (
						<TodoItem key={_id} text={text} completed={completed} _id={_id} />
					))}
				{variables[0] && (
					<TodoItem
						className={style.tempItem}
						_id={tempId}
						text={variables[0].text}
						completed={false}
					/>
				)}
			</ul>
			<DeleteButton
				label='Clear all tasks'
				className={style.btn}
				onClick={() => deleteAll()}
			/>
		</>
	);
};
