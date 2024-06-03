exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable();


    // OnDelete está gerando o efeito cascata, caso a nota seja apagada a tag também será apagada
    // Crie na tabela notes, uma id para a tag vinculada a id da nota
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");


});

exports.down = knex => knex.schema.dropTable("tags");