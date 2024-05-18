import express from 'express';
import {
	createNewTodo,
	deleteAllTodo,
	deleteTodo,
	getTodoById,
	getTodos,
	updateTodo,
} from '../controllers/todo-controller.mjs';

const todoRoutes = express.Router();

todoRoutes.get('/todos', getTodos);

todoRoutes.get('/todos/:id', getTodoById);

todoRoutes.delete('/todos/:id', deleteTodo);

todoRoutes.delete('/todos', deleteAllTodo);

todoRoutes.post('/todos', createNewTodo);

todoRoutes.patch('/todos/:id', updateTodo);

export default todoRoutes;
