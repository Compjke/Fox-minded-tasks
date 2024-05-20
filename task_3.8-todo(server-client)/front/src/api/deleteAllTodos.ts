import { BASE_URL } from '@/constans/constans';
import axios from 'axios';

export const deleteAllTodo = async () => {
	const { statusText, data } = await axios.delete(`${BASE_URL}/todos`);
	console.log(statusText, data);
	return { statusText, data };
};
