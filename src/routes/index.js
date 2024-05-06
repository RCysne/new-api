// Arquivo responsável pelo gerenciamento das rotas da aplicação. Importando o Router e o arquivo com as rotas (usersRoutes)
const { Router } = require("express");
const usersRouter = require("./users.routes")


const routes = Router()

// 2 - Depois de vir do server a url reconhece a requisição, e leva para o arquivo usersRouter
routes.use("/user", usersRouter) // Entrou no users, já chama o userRoutes.post

//Exportando o routes que contém todas as rotas da aplicação
module.exports = routes;