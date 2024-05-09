// Importando no início a dependência de tratamento de erro
require('express-async-error');

const database = require("./database/sqlite")

const AppError = require("./utils/AppError")


const express = require('express');

// Importando o arquivo com as rotas para o server usar. Chamando a pasta que já vai ler o arquivo index
const routes = require('./routes')

const app = express()
app.use(express.json())

// 1 - App utilizando as rotas - mostrando aonde elas estão
app.use(routes)


database(); // Executando o banco de dados

// Tratamento dos erros pelo servidor
// O parâmetro error captura o erro da requisição
app.use((error, request, response, next) => {

    // Se o erro estiver instanciado no AppError (lógica solicitando as informações do cliente)
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    
    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error!"
    })
})

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})


