import {

	useMutation,
	useQueryClient,
} from '@tanstack/react-query';

export const useMutationDelete = (cb) => {
	const client = useQueryClient();

	return useMutation({
		mutationFn: cb,
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['todos'] });
		},
	});
};
