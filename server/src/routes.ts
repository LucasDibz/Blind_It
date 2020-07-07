import express from 'express';

import UsersController from './controllers/Users/usersController';
import CompaniesController from './controllers/Companies/companiesController';

const usersController = new UsersController();

const companiesController = new CompaniesController();

const routes = express.Router();

routes.post('/user', usersController.login);
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

// companies
routes.get('/companies', companiesController.index);
routes.post('/companies', companiesController.create);

export default routes;
