// Importando o express para a leitura do app e utilizando o Router
const { Router } = require("express");

// Importando o arquivo controller para poder utilizar
const NotesController = require("../controllers/NotesController");

const notesRoutes = Router()

//Instanciando o controller para poder usar suas funcionalidades
const notesController = new NotesController()

notesRoutes.get("/", notesController.index); 
notesRoutes.post("/:user_id", notesController.create); 
notesRoutes.get("/:id", notesController.show); 
notesRoutes.delete("/:id", notesController.delete);



// Exportando para qualquer arquivo utilizar
module.exports = notesRoutes;
