// Colocando o express dentro de uma variável, nesse caso express
const express = require('express');

// Inicializando o express
const app = express()

app.use(express.json())


// Método-rota------função com a requisição e a resposta
app.get('/message', (request, response) => {
    // Envio da mensagem na rota indicada
    response.send('Olá Mundo!')
})

// ------  ROUTE PARAMS

// Route Params (parâmetros da rota) - Onde se consegue passar um parâmetro (determinado valor) pela nossa rota exemplo: www.enderecoservidor.com.br/user/5 - utilizado para informações mais simples
// No rote params o parâmetro que vai na rota tem que ser precedido dos :, para o node entender que se trata de um valor, e não do endereço da rota. Esses valores são obrigatórios.
app.get('/message/:id/:user', (request, response) => {
    
    // Formato sem desestruturação
    response.send(`id da mensagem é ${request.params.id}, e o usuário é o ${request.params.user}`)

    // Formato com desestruturação do request.params
    const { id, user } = request.params
    response.send(`o usuário ${user}, tem o id ${id}`)
})


// ------- QUERY PARAMS
// Query params - Os query params passados no endereço se iniciam com um ? e na necessidade de mais um query params é utilizado o &. Exemplo www.enderecoservidor.com.br/user?page=2&limit=10 - Esses valores são opcionais
// Nessa requisição os parâmetros não estão na rota expostos. Para acessar a rota, é preciso completar na url com os parâmetros para acessar o conteúdo 
app.get('/users', (request, response) => {
    const { page, limit } = request.query;

    response.send(`
        Página ${page}. Mostrar: ${limit}
    `)
})

// Depois de criar o body no insomnia, acessar por aqui 
app.post("/user", (request, response) => {
    const { name, email, password } = request.body // Dados da api no insomnia desestruturados, onde é necessário avisar ao node que os dados estão vindo no padrão json - linha 7
    // E posso responder com o send (formato text html), ou no formato json (padrão utilizado nas respostas de uma api)
    response.send(`Logado na conta de ${name}, com o email ${email}`)
    response.json({name, email})
})


// Indicando a porta que o express vai rodar
const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})






// Para executar o arquivo diretamente, no terminal digitar - node pasta_do_arquivo/nome_do_arquivo.js
// Nodemon para ficar reiniciando o servidor

