const express = require('express');
const app = express()

// Importando o arquivo com as rotas para o server usar. Chamando a pasta que já vai ler o arquivo index
const routes = require('./routes')

app.use(express.json())

// 1 - App utilizando as rotas - mostrando aonde elas estão
app.use(routes)


const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})


