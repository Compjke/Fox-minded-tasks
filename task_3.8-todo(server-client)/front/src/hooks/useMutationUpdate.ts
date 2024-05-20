import { ITodoItem } from '@/components/TodoItem/TodoItem';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMutationUpdate = (cb) => {
	const client = useQueryClient();
	return useMutation({
		mutationFn: cb,
		onMutate: async (newTodo: ITodoItem) => {
			await client.cancelQueries({ queryKey: ['todos', newTodo._id] });
			const prevTodo = client.getQueryData(['todos', newTodo._id]);
			client.setQueryData(['todos', newTodo._id], newTodo);

			return { prevTodo, newTodo };
		},
		onError: (err, _, context) => {
			console.log(err);
			client.setQueryData(['todos', context?.newTodo._id], context?.prevTodo);
		},
		onSuccess: (newTodo: ITodoItem | undefined) => {
			client.invalidateQueries({ queryKey: ['todos', newTodo?._id] });
		},
	});
};
