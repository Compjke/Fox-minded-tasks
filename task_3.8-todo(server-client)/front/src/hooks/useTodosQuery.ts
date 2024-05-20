import { getTodos } from '@/api/getAllTodos';
import { useQuery } from '@tanstack/react-query';

export const useTodosQuery = () => {
	return useQuery({
		queryFn: getTodos,
		queryKey: ['todos'],
		staleTime: 2000,
	});
};
