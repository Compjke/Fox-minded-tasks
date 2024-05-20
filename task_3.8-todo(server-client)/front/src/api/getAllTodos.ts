import { ITodoItem } from '@/components/TodoItem/TodoItem';
import { BASE_URL } from '@/constans/constans';
import axios from 'axios';

export const getTodos = async (): Promise<ITodoItem[]> => {
	const { data } = await axios.get(`${BASE_URL}/todos`);
	return data;
};
