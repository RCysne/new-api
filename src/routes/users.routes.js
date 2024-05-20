// Importando o express para a leitura do app e utilizando o Router
const { Router } = require("express");

// Importando o arquivo controller para poder utilizar
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router()

/* Middlewares
Funções de verificações e controles. Verifica a requisição, a permissão, pode devolver uma resposta, bloquear a requisição, e se for continuar vai chama o next (continuação do processo, do fluxo) 
*/
// function middleWare(request, response, next) {
//     console.log('Middleware is running!')
//     const email = request.body.email;
//     const pass = request.body.password;

//     console.log(`
//         Login: ${email} 
//         Senha: ${pass}
//     `);
//     next();
// }


    /* Exemplo de Middleware 
    O return é para que se entrar na função ele encerre o processo
    
    if (!request.body.isAdmin) {
        return response.status(401).json({message: "Unauthorized"})
    }
    next(); 
    E na rota depois chama a função, entre a rota e a função a ser executada*/




//Instanciando o controller para poder usar suas funcionalidades
const usersController = new UsersController()


// Se o objetivo fosse passar o middleware para todas as rotas, de forma global, a forma seria essa. Mas é necessário analisar se a necessidade é de rota por rota, ou de forma global 
// usersRoutes.use(middleWare)


// 3 - Chegando no arquivo, ele verifica que a rota é na raiz e segue o fluxo
usersRoutes.post("/", usersController.create); //utilizando o método create do controller



/*Reponsabilidade do processamento foi para o controller

(request, response) => {
    const { name, email, password } = request.body
    response.json({name, email, password})}*/
    
    
    

usersRoutes.put("/:id", usersController.update);

// Exportando para qualquer arquivo utilizar
module.exports = usersRoutes;












/* Exemplos de métodos GET
usersRoutes.get('/', (request, response) => {
    response.send('Você está no NodeJS')
})
usersRoutes.get('/message', (request, response) => {
    response.send('Hello World! Uma mensagem de Ronaldo Cysne')
}) */



/*Route Params
app.get('/product/:id/:user', (request, response) => {
    const {id, user} = request.params
    response.send(`Hello ${user}, o id do seu produto é ${id}`)
}) */


/*Query Params
app.get('/users', (request, response) => {
    const { page, limit } = request.query;
    response.send(`
        Página ${page}, com limite de ${limit} usuários por página.
    `)
}) */
