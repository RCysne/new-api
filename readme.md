Pasta Routes (index)
Na pasta se encontram as rotas da aplicação para o gerenciamento do roteamento.


Pasta Controllers
Nessa pasta, se encontra a lógica de controle dos acessos, permissões e resposta com as middlewares, que serão aplicadas no controle das rotas que segue para a função que está no fluxo da requisição, ou retorna algo para o cliente 


Pasta Utils
Aqui está o tratamento de erros com uma função que vai receber uma mensagem e o status da requisição


--------------------------------------------------------------------------------------------------------------


Fluxo da aplicação
Primeiro acessa o server.js indicando o caminho para o routes (index).
No routes, o routes recebe o Router e é usado para chamar o endpoint e na sequência a função. 
No users.routes na função é feito o método http, o endpoint e em seguida chama a função da classe do controller

_____________________________________________________________

Banco de dados utilizado é o sqlite

npm install sqlite3 sqlite --save (save é uma dependência de produção)

Depois de criada a conexão, é no server que ela é utilizada

Quando a aplicação faz uma chamada ao banco de dados, a função é chamada dentro do index. É assíncrona pq o banco é uma aplicação externa. Na função definimos uma variável chamada database que é como se fosse uma placa que deixando claro para a sua aplicação que ela é o banco de dados, diz o endereço e que para conversar com ela tem que usar aquela linguagem. Aí vem a sintaxe dentro da variável
Quando o sqlite.open é usado, a aplicação está abrindo uma conexão com o sqlite (falando: vamos conversar?). Mas para pedir os dados é necessário saber aonde o arquivo está, por isso o filename, e tem que saber como conversar, essa é a função do driver

Dependência bcryptjs serve para criptografar algum dado sensível no banco de dados