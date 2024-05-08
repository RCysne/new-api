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