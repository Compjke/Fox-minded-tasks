import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
});

export const todoModel = mongoose.model('todositems', todoSchema);
