import { useState } from 'react';
import style from './App.module.css';
import { ControledForm, UncontroledForm } from './components/Forms';

function App() {
	return (
		<div className={style.container}>
			<ControledForm />
			<UncontroledForm />
		</div>
	);
}

export default App;
