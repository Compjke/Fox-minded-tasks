import { ITodoItem } from '@/components/TodoItem/TodoItem';
import { BASE_URL } from '@/constans/constans';
import axios from 'axios';

export const updateTodo = async (updateTodo: ITodoItem) => {
	const { _id, ...updatedField } = updateTodo;
	const { data } = await axios.patch<Promise<ITodoItem>>(
		`${BASE_URL}/todos/${_id}`,
		updatedField
	);
	return data;
};
