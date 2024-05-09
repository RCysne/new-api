
// Esse é o drive de fato que vai estabelecer a comunicação com a base de dados (versão)
const sqlite3 = require("sqlite3"); // Versão

// Esse sqlite é o responsável pela conexão
const sqlite = require("sqlite"); // Linguagem

const path = require("path") // Local do db


// Função assíncrona para a conexão com o banco de dados. Se ele não existir, ele vai criar o arquivo de um banco vazio
async function sqliteConnection() {

    // Abrindo uma conexão com o banco
    const database = await sqlite.open({
        // Filename diz aonde o arquivo vai ficar salvo. Nesse formato ele pode dar conflito com outros sistemas operacionais, por isso a instalação da biblioteca do path
        // __filename: "../../database",

        // Com o dirname ele pega a pasta que estou, volta uma pra trás com ("..", foi para o arquivo database.db) e para finalizar é preciso especificar qual é o drive a ser utilizado. E o nome do banco vai ser database.db
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });

    return database

}

module.exports = sqliteConnection;