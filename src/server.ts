import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';
import { di } from './di';
import path = require('path');

async function server() {
	const dependencyInjection = di();
	await dependencyInjection.init();
	const app = express();

	app.use(cors({ credentials: true, origin: '*' }));
	app.use('/images', express.static('public/images'));
	app.use(express.json());
	dependencyInjection.get('routes').forEach((route: any) => {
		app.use(route.path, route.router);
	});
	app.listen(process.env.PORT || 5000);
}
server();
