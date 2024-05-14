const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers')


async function migrationsRun() {
    // Objeto schemas vai ter a referências das tabelas que o banco vai ter. Podendo ter várias migrations, é só separar por vírgulas.
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error))
    
}

module.exports = migrationsRun;