import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('companies', (table) => {
    table.string('nr_cnpj').primary();
    table.string('ds_razao_social').notNullable();
    table.string('ds_email').notNullable();

    //Fix - Types
    table.string('ds_atuacao');
    table.string('nr_telefone');
    table.decimal('ds_cep');
    table.decimal('ds_endereco');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('companies');
}
