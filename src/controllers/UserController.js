const AppError = require('../utils/AppError')

class UsersController {
/*  PADRÃO DE UMA CLASSE CONTROLLER - NO MÁXIMO 5 MÉTODOS (5 FUNÇÕES) -

O controller é que possui a responsabilidade de processar as informações (lógica)

* index - GET para listar vários registros
* show - GET para exibir um registro específico
* create - POST para criar um registro
* update - PUT para atualizaa rum registro
* delete - DELETE para remover um registro
*/
    
    // Padrão dos métodos (funções) de uma classe
    create(request, response) {

        
        const { name, email, password } = request.body

        if (!name) {
            throw new AppError("O nome é obrigatório!")
        }


        // O uso do status code, é opcional
        response.status(201).json({name, email, password})
    }
}

module.exports = UsersController;