import { useCallback, useEffect, useRef, useState } from 'react';
import { useMutationDelete } from '@/hooks/useMutationDelete';
import { useMutationUpdate } from '@/hooks/useMutationUpdate';
import { updateTodo } from '@/api/updateTodo';
import { deleteTodo } from '@/api/deleteTodoById';
import { ConfirmEditButton } from '@/ui-kit/ConfirmEditButton';
import { Checkbox } from '@/ui-kit/CheckBox';
import { EditButton } from '@/ui-kit/EditButton';
import { DeleteButton } from '@/ui-kit/DeleteButton';
import clsx from 'clsx';
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

	const { mutate: update } = useMutationUpdate(updateTodo);
	const { mutate: deleteOne } = useMutationDelete(() => deleteTodo(_id));

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
		deleteOne();
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
