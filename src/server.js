// Colocando o express dentro de uma variável, nesse caso express
const express = require('express');

// Inicializando o express
const app = express()



// Indicando a porta que o express vai rodar
const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})






// Para executar o arquivo diretamente, no terminal digitar - node pasta_do_arquivo/nome_do_arquivo.js