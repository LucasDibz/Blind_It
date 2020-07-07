import { Request, Response } from 'express';
import knex from '../../database/connection';

interface Company {
  nr_cnpj: string;
  ds_razao_social: string;
  ds_email: string;
}

class CompaniesController {
  create = async (request: Request, response: Response) => {
    const trx = await knex.transaction();

    const { cnpj, razao, email } = request.body;

    const company: Company = {
      nr_cnpj: cnpj,
      ds_razao_social: razao,
      ds_email: email,
    };

    await trx('companies').insert(company);

    await trx.commit();

    return response.json(company);
  };

  index = async (request: Request, response: Response) => {
    const companies = await knex('companies').select('*');

    return response.json(companies);
  };
}

export default CompaniesController;
