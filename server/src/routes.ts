import express from 'express';

import UsersController from './controllers/Users/usersController';
import CompaniesController from './controllers/Companies/companiesController';

const usersController = new UsersController();
const companiesController = new CompaniesController();

const routes = express.Router();

//Login
routes.post('/user', usersController.login);

//Users
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.patch('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

//Companies
routes.get('/companies', companiesController.index);
routes.post('/companies', companiesController.create);
export default routes;
