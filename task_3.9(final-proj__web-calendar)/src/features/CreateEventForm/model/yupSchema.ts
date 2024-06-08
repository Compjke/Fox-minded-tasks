import * as yup from 'yup';

export const schema = yup
	.object({
		title: yup.string().required().min(5),
		calendar: yup.string().required(),
		date: yup.string().required(),
		description: yup.string().required(),
		endTime: yup.string().required(),
		isForAllDay: yup.boolean().optional(),
		startTime: yup.string().required(),
	})
	.required();
