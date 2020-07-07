import express from 'express';

import UsersController from './controllers/Users/usersController';

const usersController = new UsersController();

const routes = express.Router();

routes.post('/user', usersController.login);
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

export default routes;
