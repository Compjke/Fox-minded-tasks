import { useState } from 'react';
import style from './App.module.css';
import { ControledForm } from './components/ControledForm';
import { UncontroledForm } from './components/UncontroledForm';

function App() {
	return (
		<div className={style.container}>
			<ControledForm />
			<UncontroledForm />
		</div>
	);
}

export default App;
