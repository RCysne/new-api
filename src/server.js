const express = require('express');

const app = express()

app.get('/', (request, response) => {
    response.send('Você está no NodeJS')
})

app.get('/message', (request, response) => {
    response.send('Hello World! Uma mensagem de Ronaldo Cysne')
})

// Route Params
app.get('/product/:id/:user', (request, response) => {
    const {id, user} = request.params
    response.send(`Hello ${user}, o id do seu produto é ${id}`)
})

// Query Params
app.get('/users', (request, response) => {
    const { page, limit } = request.query;
    response.send(`
        Página ${page}, com limite de ${limit} usuários por página.
    `)
})


const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})


