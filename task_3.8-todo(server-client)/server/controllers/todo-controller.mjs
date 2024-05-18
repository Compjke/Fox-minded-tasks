import { todoModel } from '../models/todo.mjs';

export const getTodos = async (req, res) => {
	try {
		const todos = await todoModel.find().sort({ todo: 1 });
		res.status(200).json(todos);
	} catch (err) {
		res.status(404).send('Something wrong', err);
	}
};

export const getTodoById = async (req, res) => {
	const { id } = req.params;

	try {
		const todoById = await todoModel.findById(id);
		if (!todoById) {
			res.status(404).send('Not found');
		}
		res.status(200).send(todoById);
	} catch (err) {
		console.log(err);
		res.status(404).send('Not found');
	}
};

export const deleteTodo = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedTodo = await todoModel.findByIdAndDelete(id);
		console.log(deletedTodo);
		res.status(200).send(deletedTodo);
	} catch (err) {
		res.status(404).send('Not found');
	}
};

export const deleteAllTodo = async (req, res) => {
	try {
		await todoModel.deleteMany({});
		res.status(201).send('Vse uletelo');
	} catch (err) {
		res.status(404).send('Chto to poshlo ne tak');
	}
};

export const createNewTodo = async (req, res) => {
	const { text, completed } = req.body;

	try {
		const newTodo = new todoModel({ text, completed });
		await newTodo.save();
		res.status(201).send(newTodo);
	} catch (err) {
		res.status(500).send('Something wrong');
	}
};

export const updateTodo = async (req, res) => {
	const { id } = req.params;
	const body = req.body;
	console.log(body);
	console.log(id);
	try {
		const todos = await todoModel.findByIdAndUpdate(id, body);
		res.status(200).send(todos);
	} catch (error) {
		res.status(404).send('Not found', error);
	}
};
