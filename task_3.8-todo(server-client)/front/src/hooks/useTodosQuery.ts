import { getTodos } from '@/utils/fetchTodos';
import { useQuery } from '@tanstack/react-query';

export const useTodosQuery = () => {
	return useQuery({
		queryFn: getTodos,
		queryKey: ['todos'],
		staleTime: 2000,
	});
};
