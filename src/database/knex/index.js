// Importando o arquivo com as configurações criadas no knex
const config = require("../../../knexfile");

// Importando o knex
const knex = require("knex");

// Criando a conexão. Conexão knex e suas configurações
const connection = knex(config.development);


module.exports = connection;