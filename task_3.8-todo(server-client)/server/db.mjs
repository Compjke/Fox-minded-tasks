// import { MongoClient } from 'mongodb';

// const URL = 'mongodb://localhost:27017/todos';

// let dbConnectonStatus;

// export function connectDb(cb) {
// 	MongoClient.connect(URL)
// 		.then((client) => {
// 			console.log('Connected MD');
// 			dbConnectonStatus = client.db();
// 			return cb();
// 		})
// 		.catch((e) => {
// 			return cb(e);
// 		});
// }

// export const getDbConection = () => dbConnectonStatus;
