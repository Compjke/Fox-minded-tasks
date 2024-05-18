// import { ITodoItem } from '@/components/TodoItem/TodoItem';
import { ITodoItem } from '@/components/TodoItem/TodoItem';
import { BASE_URL } from '@/constans/constans';
import axios from 'axios';

export const getTodos = async (): Promise<ITodoItem[]> => {
	const { data } = await axios.get(`${BASE_URL}/todos`);
	return data;
};

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

export const updateTodo = async (updateTodo: ITodoItem): Promise<ITodoItem> => {
	const { _id, ...updatedField } = updateTodo;
	const { data } = await axios.patch(`${BASE_URL}/todos/${_id}`, updatedField);
	return data;
};

export const deleteTodo = async (id: string) => {
	const { statusText, data } = await axios.delete(`${BASE_URL}/todos/${id}`);
	return { statusText, data };
};
export const deleteAllTodo = async () => {
	const { statusText, data } = await axios.delete(`${BASE_URL}/todos`);
	console.log(statusText, data);
	return { statusText, data };
};
