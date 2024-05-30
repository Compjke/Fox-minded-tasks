import { useStateSelector } from '@/app/store';

export const useDate = () => {
	const date = useStateSelector((s) => s.dateReducer.date);
	const selectedDate = useStateSelector((s) => s.dateReducer.selectedDate);

	return { date, selectedDate };
};
