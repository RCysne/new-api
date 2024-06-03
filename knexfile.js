const path = require("path")

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {

      // Caminho para o bando de dados utilizando o path
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },

    // Funcionalidade que será executada no momento de conexão com o banco de dados
    pool: {
      // Depois de criar, recuperar a conexão e a callback, e rodar primeiro essa função: PRAGMA foreign_keys = ON, e seguir para a callback. Essa funcionalidade habilita o CASCADE no delete
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    // Direcionando para a pasta migration dentro do knex
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },

    useNullAsDefault: true
  }


};
