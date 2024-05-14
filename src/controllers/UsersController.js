/*  PADRÃO DE UMA CLASSE CONTROLLER - NO MÁXIMO 5 MÉTODOS (5 FUNÇÕES) -

O controller é que possui a responsabilidade de processar as informações (lógica)

* index - GET para listar vários registros
* show - GET para exibir um registro específico
* create - POST para criar um registro
* update - PUT para atualizaa rum registro
* delete - DELETE para remover um registro
*/



const { hash } = require("bcryptjs") // O hash faz a função de criptografar


const AppError = require('../utils/AppError')

// Importando a conexão com o banco de dados
const sqliteConnection = require('../database/sqlite')


class UsersController {
    
    
    // Padrão dos métodos (funções) de uma classe
    async create(request, response) {

        
        const { name, email, password } = request.body

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (checkUserExists) {
            throw new AppError("Este email já está em uso.")
        }

        // Executando o hash e colocando em uma variável. No hash é necessário 2 parâmetros, o dado a ser criptografado e o fator de complexidade de criptografia. Como o hash é uma promise, é necessário o await até o final da geração da criptografia
        const hashedPassword = await hash(password, 8)


        // Quem vai para o banco de dados é a senha criptografada
        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);


        return response.status(201).json();

        // if (!name) {
        //     throw new AppError("O nome é obrigatório!")
        // }


        // O uso do status code, é opcional
        // response.status(201).json({name, email, password})
    }
}

module.exports = UsersController;