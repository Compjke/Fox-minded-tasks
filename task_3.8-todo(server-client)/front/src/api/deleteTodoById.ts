import { BASE_URL } from '@/constans/constans';
import axios from 'axios';

export const deleteTodo = async (id: string) => {
	const { statusText, data } = await axios.delete(`${BASE_URL}/todos/${id}`);
	return { statusText, data };
};
