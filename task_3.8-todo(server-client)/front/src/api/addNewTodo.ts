import { ITodoItem } from '@/components/TodoItem/TodoItem';
import { BASE_URL } from '@/constans/constans';
import axios from 'axios';

export const addNewTodo = async (newTodo: Omit<ITodoItem, '_id'>) => {
	const { statusText, status, data } = await axios.post(
		`${BASE_URL}/todos`,
		newTodo
	);
	return {
		data,
		statusText,
		status,
	};
};