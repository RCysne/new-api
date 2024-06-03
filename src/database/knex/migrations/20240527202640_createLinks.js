// Criando um campo tipo inteiro chamado user_id, e que ele faz uma referência ao id que existe dentro da tabela users. Tem que existir um usuário para criar a nota

exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    table.text("url").notNullable();

    
    // OnDelete está gerando o efeito cascata, caso a nota seja apagada a tag também será apagada
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    
    table.timestamp("created_at").default(knex.fn.now())


});

exports.down = knex => knex.schema.dropTable("links");