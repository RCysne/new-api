// Sintax de uma migration criada no knex para os bancos de dados, independendo do tipo de banco
// No knex existem dois tipos de métodos, o up (criar, alterar) e o down(restaurar o dado)

// Schema é uma função getter que retorna uma promisse para cada consulta
exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    // Criando um campo tipo inteiro chamado user_id, e que ele faz uma referência ao id que existe dentro da tabela users. Tem que existir um usuário para criar a nota
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())

});


// Elimina a tabelaespecificando o nome
exports.down = knex => knex.schema.dropTable("notes");


// Para rodar a migration usar o comando -> npx knex migrate:latest