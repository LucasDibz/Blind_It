import { Request, Response } from 'express';
import knex from '../../database/connection';

interface User {
  nm_user: string;
  ds_email: string;
  ds_senha: string;
}

class UsersController {
  login = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
      const dbUser = await knex('users')
        .select('ds_senha')
        .where({ ds_email: email })
        .first();

      //Todo - fix invalid login
      password === dbUser.ds_senha
        ? response.redirect('/home')
        : response.send('Wrong Password!');
    } catch (error) {
      response.send('User not found');
    }
  };

  index = async (request: Request, response: Response) => {
    const users = await knex('users').select('*');

    const serializedUsers = users.map((user: User) => {
      return {
        name: user.nm_user,
        email: user.ds_email,
        senha: user.ds_senha,
      };
    });

    return response.json(serializedUsers);
  };

  create = async (request: Request, response: Response) => {
    const trx = await knex.transaction();

    const { name, email, password } = request.body;

    const user = {
      nm_user: name,
      ds_email: email,
      ds_senha: password,
    };

    await trx('users').insert(user);

    await trx.commit();

    return response.json({ user });
  };
}

export default UsersController;
