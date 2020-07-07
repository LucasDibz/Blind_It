import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('nm_user').notNullable();
    table.string('ds_email').notNullable();
    table.string('ds_senha').notNullable();

    //Fix - Types
    table.string('nr_cpf');
    table.string('nr_rg');
    table.string('dt_nascimento');
    table.string('ds_genero');
    table.decimal('ds_cep');
    table.decimal('ds_endereco');
    table.string('nr_telefone');
    table.string('ds_escolaridade');
    table.string('ds_historico_profissional');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
