// Importando o express para a leitura do app e utilizando o Router
const { Router } = require("express");
const usersRoutes = Router();


// 3 - Chegando no arquivo, ele verifica que a rota é na raiz e segue o fluxo
usersRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body
    response.json({name, email, password})
})

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
