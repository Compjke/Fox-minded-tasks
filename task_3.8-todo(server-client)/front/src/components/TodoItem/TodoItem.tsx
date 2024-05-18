import { Checkbox } from '@/ui-kit/CheckBox';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DeleteButton } from '@/ui-kit/DeleteButton';
import { EditButton } from '@/ui-kit/EditButton';
import { ConfirmEditButton } from '@/ui-kit/ConfirmEditButton';
import clsx from 'clsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, updateTodo } from '@/utils/fetchTodos';
import style from './todo-item.module.scss';

export interface ITodoItem {
	completed: boolean;
	text: string;
	_id: string;
	className?: string;
}

export const TodoItem = ({ completed, _id, text, className }: ITodoItem) => {
	const [isCompleted, setisCompleted] = useState(completed);
	const [isHovered, setIsHovered] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [taskText, setTaskText] = useState(text);
	const textRef = useRef<HTMLInputElement | null>(null);
	const queryClient = useQueryClient();
	const { mutate: update } = useMutation({
		mutationFn: updateTodo,
		onMutate: async (newTodo: ITodoItem) => {
			await queryClient.cancelQueries({ queryKey: ['todos', newTodo._id] });
			const prevTodo = queryClient.getQueryData(['todos', newTodo._id]);
			queryClient.setQueryData(['todos', newTodo._id], newTodo);

			return { prevTodo, newTodo };
		},
		onError: (err, _, context) => {
			console.log(err);
			queryClient.setQueryData(
				['todos', context?.newTodo._id],
				context?.prevTodo
			);
		},
		onSuccess: (newTodo: ITodoItem | undefined) => {
			queryClient.invalidateQueries({ queryKey: ['todos', newTodo?._id] });
		},
	});
	const { mutate: _delete } = useMutation({
		mutationFn: () => deleteTodo(_id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
	});

	useEffect(() => {
		textRef.current?.focus();
	}, [isEditing]);

	const handleClickCheckBox = useCallback(() => {
		setisCompleted((prev) => !prev);
		update({
			_id,
			completed: !isCompleted,
			text: taskText,
		});
	}, [_id, isCompleted, taskText, update]);

	const handleDeleteTodo = () => {
		_delete();
	};

	const handeEditClick = () => {
		setIsEditing(true);
	};
	const handleConfirmEditClick = () => {
		setIsEditing(false);
		update({
			_id,
			text: taskText,
			completed: isCompleted,
		});
	};

	return (
		<li
			className={clsx(style.item, className)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Checkbox completed={isCompleted} onChahge={handleClickCheckBox} />
			<input
				readOnly={!isEditing}
				ref={textRef}
				contentEditable={isEditing}
				className={clsx(style.text, isCompleted && style.completed)}
				value={taskText}
				onChange={(e) => setTaskText(e.target.value)}
			/>

			<div className={style.actions}>
				{!isEditing && isHovered && !isCompleted && (
					<EditButton onClick={handeEditClick} />
				)}
				{!isEditing && isHovered && <DeleteButton onClick={handleDeleteTodo} />}
				{isEditing && <ConfirmEditButton onClick={handleConfirmEditClick} />}
			</div>
		</li>
	);
};
