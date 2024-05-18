import express from 'express';
// import { connectDb, getDbConection } from './db.mjs';
// import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import todoRoutes from './routes/todo-routes.mjs';
import { config } from 'dotenv';
import cors from 'cors';
config();

const URL = process.env.MONGO;
console.log(URL);

const port = 4200;

mongoose
	.connect(URL)
	.then(() => console.log('Connect to DB'))
	.catch((e) => console.log('Ooops bedaaa...'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(todoRoutes);

app.listen(port, (err) => {
	err ? console.log(err) : console.log('Server works vse ok');
});
