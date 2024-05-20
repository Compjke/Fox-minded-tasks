import { addNewTodo } from '@/api/addNewTodo';
import {
	useMutation,
	useQueryClient,
} from '@tanstack/react-query';

export const useMutaionAdd = (cb: typeof addNewTodo, qKey: string) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: cb,
		mutationKey: [qKey],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
	});
};
