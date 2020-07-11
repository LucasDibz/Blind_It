import express from 'express';

import UsersController from './controllers/Users/usersController';

const usersController = new UsersController();

const routes = express.Router();

//Login
routes.post('/user', usersController.login);

//Users
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.patch('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

export default routes;
