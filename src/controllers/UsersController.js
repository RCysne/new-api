/*  PADRÃO DE UMA CLASSE CONTROLLER - NO MÁXIMO 5 MÉTODOS (5 FUNÇÕES) -

O controller é que possui a responsabilidade de processar as informações (lógica)

* index - GET para listar vários registros
* show - GET para exibir um registro específico
* create - POST para criar um registro
* update - PUT para atualizaa rum registro
* delete - DELETE para remover um registro
*/



const { hash, compare } = require("bcryptjs") // O hash faz a função de criptografar

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

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        // Concexão com o banco de dados
        const database = await sqliteConnection();

        // ID do usuário igual ao id que está sendo passado nos parâmetros
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        // Se o usuário não existir, lançar mensagem de erro
        if (!user) {
            throw new AppError("Usuário não encontrado!")
        }
        
        // procurando no banco de dados se o email do usuário já existe
        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        
        // verificando se o usuário está tentando alterar seu email para um que já exista
        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este email já está em uso.")
        }

        // Se existir conteúdo dentro do name, ele vai ser utilizado, se não existir conteúdo, o user.name(valor anterior), é que vai ser utilizado. Nullish Coalescing Operator
        user.name = name ?? user.name;
        user.email = email ?? user.email;

        // Informando a senha nova, mas não enviando a senha antiga
        if (password && !old_password) {
            throw new AppError('Você precisa informar a senha antiga para definir uma nova senha!')
        }

        // Verificando se a senha antiga está correta
        if (password && old_password) {
            // Como estão criptografadas, se utiliza o compare
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError('A senha antiga não está correta!');
            }

            // Alterando e criptografando a nova senha
            user.password = await hash(password, 8)
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [user.name, user.email, user.password, id]);


        return response.json()

    }
}

module.exports = UsersController;