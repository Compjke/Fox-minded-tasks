import './App.scss';
import { TodoAddForm } from '@/components/TodoAddForm';
import { TodoList } from '@/components/TodoList';

function App() {
	return (
		<div className='app'>
			<TodoAddForm />
			<TodoList />
		</div>
	);
}

export default App;
